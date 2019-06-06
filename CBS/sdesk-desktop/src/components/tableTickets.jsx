import React from 'react';
import { connect } from "react-redux";
import { Table } from 'reactstrap';
import Selector from "./selector.jsx";
import "../styles/tableTickets.less";

class TableTickets extends React.Component {


  render() {
    const {columns}=this.props.Global;
    const {rows,count}=this.props.Entity.tickets;
    const {servicetypes,statuses,cities}=this.props.Entity;
 
    return (
       <div id="table">
      <Table striped bordered hover>
        <thead>
          <tr>
          { columns.filter(function (el) { 
            return (el.status)
          }).map((e,i)=><th id={`col${e.id}`} key={e.id}><Selector id={e.id} value={e.value}/></th>)}    
          </tr>
        </thead>
        <tbody>  
         {count>0?
         rows.map((e)=>
         <tr>
         {columns[0].status && <td scope="row">{e.number}</td>}
         {columns[1].status && <td>{servicetypes.find(x => x.id === e.serviceTypeId).name}</td>}
         {columns[2].status && <td>{e.date}</td>}
         {columns[3].status && <td>{e.warrantyFlag===1?"Да":""}</td>}
         {columns[4].status && <td>{e.cbsWarrantyFlag===1?"Да":""}</td>}
         {columns[5].status && <td>{e.equipment==null?"":
         (e.equipment.endWarrantyDate==null?"":e.equipment.endWarrantyDate)}</td>}
         {columns[6].status && <td>{e.equipment==null?"":
         (e.equipment.endCBSWarrantyDate==null?"":e.equipment.endCBSWarrantyDate)}</td>}
         {columns[7].status && <td>{e.commonFieldString?e.commonFieldString:""}</td>}
         {columns[8].status && <td>{e.customer.name}</td>}
         {columns[9].status && <td>{statuses.find(x => x.id === e.statusId).name}</td>}
         {columns[10].status && <td>{""}</td>}
         {columns[11].status && <td>{e.performer==null?"":e.performer.name}</td>}
         {columns[12].status && <td>{e.equipment==null?"":
         (e.equipment.equipmentType.name==null?"":e.equipment.equipmentType.name)}</td>}
         {columns[13].status && <td>{e.equipment==null?"":
         (e.equipment.serialNumber==null?"":e.equipment.serialNumber)}</td>}
          {columns[14].status && <td>{e.equipment==null?"":
         (e.equipment.regNumber==null?"":e.equipment.regNumber)}</td>} 
         {columns[15].status && <td>{""}</td>}
         {columns[16].status && <td>{cities.find(x => x.id === e.cityId).name}</td>}
         {columns[17].status && <td>{e.subcontractorFlag===1?"Да":""}</td>}
         {columns[18].status && <td>{e.reasonDescription==null?"":e.reasonDescription}</td>}       
         
       </tr>          
        ):""}
         
            
        </tbody>
         </Table>
         </div>
     
      
    );
  }
}

export default connect(state => ({ Global: state.Global,Entity: state.Entity }))(TableTickets);