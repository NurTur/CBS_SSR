/*import React from "react";
import {connect} from "react-redux";
import { Table } from 'reactstrap';
import "../styles/parentTicketBox.less";

class ParentTicketBox extends React.Component { 
    render() {   
    const { ticketId, tree }=this.props.Additional;
    let result="";
    let children=[];
    if (tree.hasOwnProperty('children')) { children=tree.children }
    
    if (ticketId!==null && ticketId==tree.id && children.length===1)
    {
        result="Подчиненная заявка"
    } 
    if (ticketId!==null && ticketId==tree.id && children.length>1)
    {
        result="Подчиненные заявки"
    } 
    if (ticketId!==null && ticketId!=tree.id && children.length>0)
    {
        result="Родительская заявка"
    } 

  
    return  <div id="parentTicket">
       
    { result && <Table striped bordered hover>
        <thead>
          <tr>
            <th id="col2">Номер Завки</th>
            <th id="col3">Вид работ</th>
            <th id="col4">Дата подачи</th>
            <th id="col10">Заказчик</th>
            <th id="col6">№ заказа от постав.</th>
            <th id="col11">Статус</th>
            <th id="col13">Исполнитель</th>            
            <th id="col14">Оборудование</th>
            <th id="col17">Город</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>}
      </div>
   
    
  
 
        
    }
}

export default connect(state => ({ Additional: state.Additional }))(ParentTicketBox);*/
