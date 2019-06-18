import React from "react";
import { UncontrolledTooltip } from 'reactstrap';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDog } from "../actions/dogs";
import SettingsHome from "./settingsHome.jsx";
import "../styles/header.less";

class Header extends React.Component
{

  render()
  {
    const {name}=this.props.Entity.appUser;
    return <div id="header">   
     <UncontrolledTooltip placement="top" target="logoutTooltip">Выход</UncontrolledTooltip>
     <UncontrolledTooltip placement="top" target="settingsTooltip">Настройки</UncontrolledTooltip>
     <UncontrolledTooltip placement="top" target="searchTooltip">Поиск</UncontrolledTooltip>
    
    <div className="logotip"><img alt="logo" className="img" src="/images/logo.png" />CBS SERVICE</div>
    <div id="searchTooltip" className="search" onClick={()=>this.props.fetchDog()}></div>  
    <div className="appuser">{name}</div>
    <div id="logoutTooltip" className="logout" onClick={() => window.location = `logout`}></div> 
    <div id="settingsTooltip" className="settings"><SettingsHome /></div>
    </div>  
  }  
}

export default connect(state => ({ Entity:state.Entity,Dogs:state.Dogs }),
dispatch => bindActionCreators({ fetchDog }, dispatch))(Header);
