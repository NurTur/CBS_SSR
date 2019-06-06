import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {AddRequest,RemoveRequest } from "../actions/filter";
import "../styles/selector.less";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Selector extends React.Component {
state={ dropdownOpen: false} 
handleClicked=(num,obj,len)=>{
  const ticket= this.props.Filter.filters.ticket;
  if (ticket.hasOwnProperty(obj))
  {
    let arr=[];
  if (obj==='statusId') { arr=ticket.statusId['$in']; }
  if (obj==='serviceTypeId') { arr=ticket.serviceTypeId['$in']; } 
  if (obj==='typeId') { arr=ticket.typeId['$in']; } 
  if (obj==='cityId') { arr=ticket.cityId['$in']; } 
 
  if (arr.length===len && num===0)
  {
    this.props.RemoveRequest(obj)
  } 
  else if (arr.length<len && num===0)
  {
    if (obj==='statusId') { this.props.AddRequest({statusId:{$in:[1,3,4,5,6,7,15,18,19,20,21,22,24,25,26,27,28,29,30,31]}}) }
    if (obj==='serviceTypeId') { this.props.AddRequest({serviceTypeId:{$in:[1,2,3,4,5,6,7,8,9,10]}}) }
    if (obj==='typeId') { this.props.AddRequest({typeId:{$in:[1,2,3,4,5,6,7]}}) }
    if (obj==='cityId') { this.props.AddRequest({cityId:{$in:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}}) } 
  } 
  else 
  {
  const index=arr.indexOf(num);
  if (index===-1)
  {
  if (obj==='statusId') { this.props.AddRequest({statusId:{$in:[...arr,num]}}) }
  if (obj==='serviceTypeId') { this.props.AddRequest({serviceTypeId:{$in:[...arr,num]}}) }
  if (obj==='typeId') { this.props.AddRequest({typeId:{$in:[...arr,num]}}) }
  if (obj==='cityId') { this.props.AddRequest({cityId:{$in:[...arr,num]}}) }
} else 
  { 
    arr.splice(index, 1);
    if (arr.length===0) { this.props.RemoveRequest(obj) }
    else { 
      if (obj==='statusId') { this.props.AddRequest({statusId:{$in:arr}}) }
      if (obj==='serviceTypeId') { this.props.AddRequest({serviceTypeId:{$in:arr}}) }
      if (obj==='typeId') { this.props.AddRequest({typeId:{$in:arr}}) }
      if (obj==='cityId') { this.props.AddRequest({cityId:{$in:arr}}) }    
    }
  }
  } 
}  
  else 
  { 
    if (num===0)
    {  
    if (obj==='statusId') { this.props.AddRequest({statusId:{$in:[1,3,4,5,6,7,15,18,19,20,21,22,24,25,26,27,28,29,30,31]}}) }
    if (obj==='serviceTypeId') { this.props.AddRequest({serviceTypeId:{$in:[1,2,3,4,5,6,7,8,9,10]}}) }
    if (obj==='typeId') { this.props.AddRequest({typeId:{$in:[1,2,3,4,5,6,7]}}) }
    if (obj==='cityId') { this.props.AddRequest({cityId:{$in:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}}) } 
    } 
    else { 
      if (obj==='statusId') { this.props.AddRequest({statusId:{$in:[num]}})} 
      if (obj==='serviceTypeId') { this.props.AddRequest({serviceTypeId:{$in:[num]}})} 
      if (obj==='typeId') { this.props.AddRequest({typeId:{$in:[num]}})} 
      if (obj==='cityId') { this.props.AddRequest({cityId:{$in:[num]}})} 
  }
}
      
  this.setState(prevState => ({
    dropdownOpen: !prevState.dropdownOpen
  }));
}

Search=(num,obj)=>{
  const ticket= this.props.Filter.filters.ticket;
  if (ticket.hasOwnProperty(obj))
  {
  let arr=[];
  if (obj==='statusId') { arr=ticket.statusId['$in']; }
  if (obj==='serviceTypeId') { arr=ticket.serviceTypeId['$in']; }
  if (obj==='typeId') { arr=ticket.typeId['$in']; }
  if (obj==='cityId') { arr=ticket.cityId['$in']; }
  
  const index=arr.indexOf(num);
  if (index===-1)
  {
  return "white";
  } else 
  { 
    return "rgb(11, 142, 230)";
  }
 } else return "white";
}

toggle() { this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen })); }


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

    console.log("_______AAA________________")
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
      if (ticket.hasOwnProperty('statusId'))
      {
        arr=ticket.statusId['$in'];
      }   
      return (
        <Dropdown toggle={this.toggle.bind(this)} isOpen={this.state.dropdownOpen}>
        <DropdownToggle caret id="title">Статус&nbsp;{arr.length}</DropdownToggle>
        <DropdownMenu className="dropdownMenu">
        <DropdownItem onClick={()=>this.handleClicked(0,'statusId',20)}>Выбрать все/ Отменить все</DropdownItem>
        <DropdownItem divider />
        { this.props.Entity.statuses.map((e)=>
        <DropdownItem style={{background:this.Search(e.id,'statusId')}} onClick={()=>this.handleClicked(e.id,'statusId',20)}>{e.name}</DropdownItem>) }
        </DropdownMenu>
      </Dropdown>
      );  
    }
/****************************************************************************************/
if (id===2)
{
  let arr=[];
  if (ticket.hasOwnProperty('serviceTypeId'))
  {
    arr=ticket.serviceTypeId['$in'];
  }   
  return (
    <Dropdown toggle={this.toggle.bind(this)} isOpen={this.state.dropdownOpen}>
    <DropdownToggle caret id="title">Вид работ&nbsp;{arr.length}</DropdownToggle>
    <DropdownMenu className="dropdownMenu">
    <DropdownItem onClick={()=>this.handleClicked(0,'serviceTypeId',10)}>Выбрать все/ Отменить все</DropdownItem>
    <DropdownItem divider />
    { this.props.Entity.servicetypes.map((e)=>
    <DropdownItem style={{background:this.Search(e.id,'serviceTypeId')}} onClick={()=>this.handleClicked(e.id,'serviceTypeId',10)}>{e.name}</DropdownItem>) }
    </DropdownMenu>
  </Dropdown>
  );  
}
/****************************************************************************************/
if (id===1)
{
  let arr=[];
  if (ticket.hasOwnProperty('typeId'))
  {
    arr=ticket.typeId['$in'];
  }   
  return (
    <Dropdown toggle={this.toggle.bind(this)} isOpen={this.state.dropdownOpen}>
    <DropdownToggle caret id="title">Номер заявки&nbsp;{arr.length}</DropdownToggle>
    <DropdownMenu className="dropdownMenu">
    <DropdownItem onClick={()=>this.handleClicked(0,'typeId',7)}>Выбрать все/ Отменить все</DropdownItem>
    <DropdownItem divider />
    { this.props.Entity.types.map((e)=>
    <DropdownItem style={{background:this.Search(e.id,'typeId')}} onClick={()=>this.handleClicked(e.id,'typeId',7)}>{e.name}</DropdownItem>) }
    </DropdownMenu>
  </Dropdown>
  );  
}
/****************************************************************************************/
if (id===17)
{
  let arr=[];
  if (ticket.hasOwnProperty('cityId'))
  {
    arr=ticket.cityId['$in'];
  }   
  return (
    <Dropdown toggle={this.toggle.bind(this)} isOpen={this.state.dropdownOpen}>
    <DropdownToggle caret id="title">Город&nbsp;{arr.length}</DropdownToggle>
    <DropdownMenu className="dropdownMenu">
    <DropdownItem onClick={()=>this.handleClicked(0,'cityId',22)}>Выбрать все/ Отменить все</DropdownItem>    
    <DropdownItem divider />
    { this.props.Entity.cities.map((e)=>
    <DropdownItem style={{background:this.Search(e.id,'cityId')}} onClick={()=>this.handleClicked(e.id,'cityId',22)}>{e.name}</DropdownItem>) }
    </DropdownMenu>
  </Dropdown>
  );  
}
/****************************************************************************************/

   else { return <div id="title">{value}</div>}  
  }
}


export default connect(state => ({ Filter: state.Filter,Entity:state.Entity }),
dispatch => bindActionCreators({ AddRequest,RemoveRequest }, dispatch))(Selector);