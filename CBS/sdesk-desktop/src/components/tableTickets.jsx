import React from 'react';
import { connect } from "react-redux";
import { Table } from 'reactstrap';
import "../styles/tableTickets.less";

class TableTickets extends React.Component {

  render() {
    const {columns}=this.props.Global;
    return (
      <div id="table">
      <Table striped bordered hover>
        <thead>
          <tr>
          { columns.filter(function (el) { 
            return (el.status)
          }).map((e,i)=><th id={`col${e.id}`} key={e.id}>{e.value}</th>)}             
          </tr>
        </thead>
        <tbody>        
        </tbody>
      </Table>
      </div>
    );
  }
}

export default connect(state => ({ Global: state.Global }))(TableTickets);