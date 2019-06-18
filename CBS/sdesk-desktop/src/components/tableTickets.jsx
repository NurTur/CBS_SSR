import React from 'react';
import { connect } from "react-redux";
import { Table } from 'reactstrap';
import Selector from "./selector.jsx";
import { bindActionCreators } from "redux";
import { GetTicketId,LoadComments } from "../actions/additional";

import "../styles/tableTickets.less";

class TableTickets extends React.Component {

  render() {
    
    const {columns}=this.props.Global;
    const {rows,count}=this.props.Entity.tickets;
    const {servicetypes,statuses,cities}=this.props.Entity;
    return (
     <div id="table">
      <Table striped bordered hover class="fixed_header">
        <thead>
          <tr>
          { columns.filter(function (el) { 
            return (el.status)
          }).map((e)=><th id={`col${e.id}`} key={e.id}><Selector id={e.id} value={e.value}/></th>)}    
          </tr>
        </thead>
        <tbody>  
         {count>0?
         rows.map((e)=>
         <tr onClick={()=>this.props.GetTicketId(e.id)}>
         {columns[0].status && <td id="col1">{e.number}</td>}
         {columns[1].status && <td id="col2">{servicetypes.find(x => x.id === e.serviceTypeId).name}</td>}
         {columns[2].status && <td id="col3">{e.date}</td>}
         {columns[3].status && <td id="col4">{e.warrantyFlag===1?"Да":""}</td>}
         {columns[4].status && <td id="col5">{e.cbsWarrantyFlag===1?"Да":""}</td>}
         {columns[5].status && <td id="col6">{e.equipment==null?"":
         (e.equipment.endWarrantyDate==null?"":e.equipment.endWarrantyDate)}</td>}
         {columns[6].status && <td id="col7">{e.equipment==null?"":
         (e.equipment.endCBSWarrantyDate==null?"":e.equipment.endCBSWarrantyDate)}</td>}
         {columns[7].status && <td id="col8">{e.commonFieldString?e.commonFieldString:""}</td>}
         {columns[8].status && <td id="col9">{e.customer.name}</td>}
         {columns[9].status && <td id="col10">{statuses.find(x => x.id === e.statusId).name}</td>}
         {columns[10].status && <td id="col11">{""}</td>}
         {columns[11].status && <td id="col12">{e.performer==null?"":e.performer.name}</td>}
         {columns[12].status && <td id="col13">{e.equipment==null?"":
         (e.equipment.equipmentType.name==null?"":e.equipment.equipmentType.name)}</td>}
         {columns[13].status && <td id="col14">{e.equipment==null?"":
         (e.equipment.serialNumber==null?"":e.equipment.serialNumber)}</td>}
          {columns[14].status && <td id="col15">{e.equipment==null?"":
         (e.equipment.regNumber==null?"":e.equipment.regNumber)}</td>} 
         {columns[15].status && <td id="col16">{""}</td>}
         {columns[16].status && <td id="col17">{cities.find(x => x.id === e.cityId).name}</td>}
         {columns[17].status && <td id="col18">{e.subcontractorFlag===1?"Да":""}</td>}
         {columns[18].status && <td id="col19">{e.reasonDescription==null?"":e.reasonDescription}</td>}       
         
       </tr>          
        ):""}
         
            
        </tbody>
         </Table>
       </div>
     
      
    );
  }
}

export default connect(state => ({ Additional:state.Additional,Global: state.Global,Entity: state.Entity }),
dispatch => bindActionCreators({ GetTicketId, LoadComments }, dispatch)) (TableTickets);