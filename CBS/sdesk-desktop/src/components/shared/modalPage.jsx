import React from 'react';
import {Modal, ModalHeader, ModalBody, TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import Comments from "./comments.jsx";
import classnames from 'classnames';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { GetTicketId,LoadComments } from "../../actions/comments";


class ModalPage extends React.Component {
  state = { modal: false, activeTab: '1',Id:null };

  toggle=async (Id)=> { 
    await this.props.GetTicketId(Id);
    await this.props.LoadComments();
    this.setState(prevState => ({ modal: !prevState.modal,Id })); 
  }
  
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
      console.log("AEEA");
    return (
    <React.Fragment>
        <td onClick={()=>this.toggle(this.props.Id)}>{this.props.number}</td>  
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" 
            style={{maxWidth: '1600px', width: '84vw'}}>
          <ModalHeader toggle={this.toggle}>
          
        <Nav tabs style={{fontSize:"16px"}}> 
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggleTab('1'); }}>Заказ запасных частей</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })} 
            onClick={() => { this.toggleTab('2'); }}>Установленные запасные части</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggleTab('3'); }}>История Заявки</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '4' })}
            onClick={() => { this.toggleTab('4'); }}>Комментарии</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '5' })}
            onClick={() => { this.toggleTab('5'); }}>Сообщения</NavLink>
          </NavItem>           
        </Nav>
        </ModalHeader>
        
        
        
        
          <ModalBody style={{minHeight: '400px', height: '75vh',overflowY:"scroll"}}>
          <TabContent activeTab={this.state.activeTab}>
          <Comments />  
          </TabContent>
          </ModalBody>
         
    </Modal>
    </React.Fragment>
    );
  }
}

export default connect(state => ({ Comments:state.Comments }),
dispatch => bindActionCreators({ GetTicketId, LoadComments }, dispatch)) (ModalPage);