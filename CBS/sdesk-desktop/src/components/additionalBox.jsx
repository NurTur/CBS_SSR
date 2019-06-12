import React from "react";
import {TabPane,TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Comments from "./shared/comments.jsx";
import "../styles/additionalBox.less";

class AdditionalBox extends React.Component { 
    state = { activeTab: '1' };
    
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
    }); } }

    render() {        
        return ( 
            <div id="additionalBox">
            <Nav tabs > 
          <NavItem>
            <NavLink id="space" className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggleTab('1'); }}><div id="historyTicket"></div></NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="space" className={classnames({ active: this.state.activeTab === '2' })} 
            onClick={() => { this.toggleTab('2'); }}><div id="buyTicket"></div></NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="space" className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggleTab('3'); }}><div id="repairsTicket"></div></NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="space" className={classnames({ active: this.state.activeTab === '4' })}
            onClick={() => { this.toggleTab('4'); }}><div id="comments"></div></NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="space" className={classnames({ active: this.state.activeTab === '5' })}
            onClick={() => { this.toggleTab('5'); }}><div id="messages"></div></NavLink>
          </NavItem>           
        </Nav> 
        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="4">
          <Comments />  
        </TabPane>  
        </TabContent>
            </div>);
    }
}

export default AdditionalBox;
