import React from "react";
import TableTickets from "./tableTickets.jsx";
import AdditionalBox from "./additionalBox.jsx";
import {connect} from "react-redux";
import Loader from "./loader.jsx";
import "../styles/home.less";

class Home extends React.Component { 
    render( ) {        
        const {loading,error}=this.props.Global.request;
        return ( 
            <React.Fragment>  
               <div id="home">          
                <TableTickets className="tableHome"/>
                <AdditionalBox className="additionHome"/>      
                </div>
            
            {loading 
              ? <Loader/>
              : error
                  ? <p>Error, try again</p>
                  : ""}
        </React.Fragment>);
    }
}

export default connect(state => ({ Global: state.Global }))(Home);
