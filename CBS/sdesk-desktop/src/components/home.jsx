import React from "react";
import TableTickets from "./tableTickets.jsx";
import {connect} from "react-redux";
import Loader from "./loader.jsx"

class Home extends React.Component { 
    render( ) {        
        const {loading,error}=this.props.Global.request;
        return ( 
            <div>   
            <TableTickets/>          
            {loading 
              ? <Loader/>
              : error
                  ? <p>Error, try again</p>
                  : ""}
        </div>);
    }
}

export default connect(state => ({ Global: state.Global }))(Home);
