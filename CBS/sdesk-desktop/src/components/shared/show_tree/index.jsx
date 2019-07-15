import React from "react";
import {connect} from "react-redux";
import { Table } from 'reactstrap';
import "../../../styles/shared/showTree.less";

class TreeBox extends React.Component { 
    render() {   
    const { ticketId, tree, treeData }=this.props.Additional;
    const {servicetypes,statuses,users,cities}=this.props.Entity;

    let result="";
    let children=[];
    let status=0;

    if (tree.hasOwnProperty('children')) { children=tree.children }
    
    if (ticketId!==null && ticketId==tree.id && children.length===1)
    {
        result="Подчиненная заявка";
        status=2;
    } 
    if (ticketId!==null && ticketId==tree.id && children.length>1)
    {
        result="Подчиненные заявки";
        status=2;
    } 
    if (ticketId!==null && ticketId!=tree.id && children.length>0)
    {
        result="Родительская заявка"; 
        status=1;
    } 


    console.log("WAW2",status,' ',children)
  
    return  <div id="showTree">
       <div className="treeHeader">{result}</div>
       <div className="treeMain">

        { status>0 && <Table striped bordered hover>
        {/*<thead>
          <tr>
            <th id="col2">Номер Заявки</th>
            <th id="col3">Вид работ</th>
            <th id="col4">Дата подачи</th>
            <th id="col10">Заказчик</th>
            <th id="col6">№ заказа от постав.</th>
            <th id="col11">Статус</th>
            <th id="col13">Исполнитель</th>            
            <th id="col14">Оборудование</th>
            <th id="col17">Город</th>
          </tr>
        </thead>*/}
        <tbody> 
        { status===1 &&
        <tr>
            <td id="col2">{tree.number}</td>
            <td id="col3">{servicetypes.find(x => x.id === tree.serviceTypeId).name}</td>
            <td id="col4">{tree.date}</td>
            <td id="col10">{treeData.customer}</td>
            <td id="col6">{tree.commonFieldString?tree.commonFieldString:""}</td>
            <td id="col11">{statuses.find(x => x.id ===  tree.statusId).name}</td>
            <td id="col14">{treeData.equipment}</td>
        <td id="col17">{cities.find(x => x.id === tree.cityId)?cities.find(x => x.id === tree.cityId).name:""}</td>
        </tr>
        }
       
        { status===2 &&
         children.map((e)=>
         <tr key={e.id}>
         <td id="col2">{e.number}</td>
            <td id="col3">{servicetypes.find(x => x.id === e.serviceTypeId).name}</td>
            <td id="col4">{e.date}</td>
            <td id="col10">{treeData.customer}</td>
            <td id="col6">{e.commonFieldString?e.commonFieldString:""}</td>
            <td id="col11">{statuses.find(x => x.id === e.statusId).name}</td>
            <td id="col14">{treeData.equipment}</td>
            <td id="col17">{cities.find(x => x.id === e.cityId)?cities.find(x => x.id === e.cityId).name:""}</td> 
        </tr>)
        } 
        </tbody>
      </Table>}       
       </div>  
    </div>
   }
}

export default connect(state => ({ Additional: state.Additional, Entity: state.Entity }))(TreeBox);
