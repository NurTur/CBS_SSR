import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {AddRequest,RemoveRequest } from "../actions/filter";
import DropdownSelect from "./shared/dropdownSelect.jsx";
import DropdownSearch from "./shared/dropdownSearch.jsx";
import DatePicker from './shared/datePicker.jsx';
import "../styles/selector.less";


class Selector extends React.Component {


/*handleChecked=(id,act,checkYes,checkNo)=>{
if (id===4)
{
  if (act===1 && checkYes===false) {  this.props.AddRequest({warrantyFlag:1}) }
  if (act===1 && checkYes===true) {  this.props.RemoveRequest('warrantyFlag') }
  if (act===0 && checkNo===false) {  this.props.AddRequest({warrantyFlag:0}) }
  if (act===0 && checkNo) {  this.props.RemoveRequest('warrantyFlag') }
}
if (id===5)
{
  if (act===1 && checkYes===false) {  this.props.AddRequest({cbsWarrantyFlag:1}) }
  if (act===1 && checkYes) {  this.props.RemoveRequest('cbsWarrantyFlag') }
  if (act===0 && checkNo===false) {  this.props.AddRequest({cbsWarrantyFlag:0}) }
  if (act===0 && checkNo) {  this.props.RemoveRequest('cbsWarrantyFlag') }
}
if (id===18)
{
  if (act===1 && checkYes===false) {  this.props.AddRequest({subcontractorFlag:1}) }
  if (act===1 && checkYes) {  this.props.RemoveRequest('subcontractorFlag') }
  if (act===0 && checkNo===false) {  this.props.AddRequest({subcontractorFlag:0}) }
  if (act===0 && checkNo) {  this.props.RemoveRequest('subcontractorFlag') }
}
}*/




  render() {
    const {value,id} = this.props;
    const {ticket}=this.props.Filter.filters;
    console.log("______AA__");
    /*if (id===4)
    {
      let checkYes=false;
      let checkNo=false;      
      if (ticket.hasOwnProperty('warrantyFlag'))
      {
        checkYes=ticket.warrantyFlag===1?true:false;
        checkNo =ticket.warrantyFlag===0?true:false;
      }        
      return (
          <div id="title">{value}
          <div id="checkBox">    
          <label className="firstBox">
          <input type="checkbox" 
           onChange={()=>this.handleChecked(id,1,checkYes,checkNo) } checked={checkYes}/>Да
         </label>    
         <label className="secondBox">
          <input type="checkbox"
            onChange={()=>this.handleChecked(id,0,checkYes,checkNo) } checked={checkNo}/>Нет
         </label>  
          </div>         
         </div>)     
    }
    if (id===5)
    {
      let checkYes=false;
      let checkNo=false;      
      if (ticket.hasOwnProperty('cbsWarrantyFlag'))
      {
        checkYes=ticket.cbsWarrantyFlag===1?true:false;
        checkNo =ticket.cbsWarrantyFlag===0?true:false;
      }        
      return (
          <div id="title">{value}
          <div id="checkBox">    
          <label className="firstBox">
          <input type="checkbox" 
           onChange={()=>this.handleChecked(id,1,checkYes,checkNo) } checked={checkYes}/>Да
         </label>    
         <label className="secondBox">
          <input type="checkbox"
            onChange={()=>this.handleChecked(id,0,checkYes,checkNo) } checked={checkNo}/>Нет
         </label>  
          </div>         
         </div>)     
    }
    if (id===18)
    {
      let checkYes=false;
      let checkNo=false;      
      if (ticket.hasOwnProperty('subcontractorFlag'))
      {
        checkYes=ticket.subcontractorFlag===1?true:false;
        checkNo =ticket.subcontractorFlag===0?true:false;
      }        
      return (
          <div id="title">{value}
          <div id="checkBox">    
          <label className="firstBox">
          <input type="checkbox" 
           onChange={()=>this.handleChecked(id,1,checkYes,checkNo) } checked={checkYes}/>Да
         </label>    
         <label className="secondBox">
          <input type="checkbox"
            onChange={()=>this.handleChecked(id,0,checkYes,checkNo) } checked={checkNo}/>Нет
         </label>  
          </div>         
         </div>)     
    }*/
    /****************************************************************************************/
if (id===10)
  {
    let arr=[];
    if (ticket.hasOwnProperty('statusId')) { arr=ticket.statusId['$in'];}   
    return (<DropdownSelect title={value} len={arr.length} array={this.props.Entity.statuses} name={"statusId"}/>);  
      
  }
/****************************************************************************************/
if (id===2)
{
    let arr=[];
    if (ticket.hasOwnProperty('serviceTypeId')) { arr=ticket.serviceTypeId['$in']; }   
    return (<DropdownSelect title={value} len={arr.length} array={this.props.Entity.servicetypes} name={"serviceTypeId"}/>);  
}
/****************************************************************************************/
if (id===1)
{
    let arr=[];
    if (ticket.hasOwnProperty('typeId')) { arr=ticket.typeId['$in']; }   
    return (<DropdownSelect title={value} len={arr.length} array={this.props.Entity.types} name={"typeId"}/>);  
}
/****************************************************************************************/
if (id===17)
{
    let arr=[];
    if (ticket.hasOwnProperty('cityId')) {  arr=ticket.cityId['$in']; }   
    return (<DropdownSelect title={value} len={arr.length} array={this.props.Entity.cities} name={"cityId"}/>);  
}
/****************************************************************************************/
if (id===3)
{
   return (<DatePicker title={value}/>);  
}
/****************************************************************************************/
if (id===9)
{
  return (<DropdownSearch title={value} name={"customerId"}/>);  
}
/****************************************************************************************/
if (id===12)
{
  return (<DropdownSearch title={value} name={"performerId"}/>);  
}
/****************************************************************************************/
    else { return <div id="title">{value}</div>}  
}
}


export default connect(state => ({ Filter: state.Filter,Entity:state.Entity }),
dispatch => bindActionCreators({ AddRequest,RemoveRequest }, dispatch))(Selector);










/* return (
    <Dropdown toggle={this.toggle.bind(this)} isOpen={this.state.dropdownOpen}>
    <DropdownToggle caret id="title">Номер заявки&nbsp;{arr.length}</DropdownToggle>
    <DropdownMenu className="dropdownMenu">
    <DropdownItem onClick={()=>this.handleClicked(0,'typeId',7)}>Выбрать все/ Отменить все</DropdownItem>
    <DropdownItem divider />
    { this.props.Entity.types.map((e)=>
    <DropdownItem style={{background:this.Search(e.id,'typeId')}} onClick={()=>this.handleClicked(e.id,'typeId',7)}>{e.name}</DropdownItem>) }
    </DropdownMenu>
  </Dropdown>
  ); */