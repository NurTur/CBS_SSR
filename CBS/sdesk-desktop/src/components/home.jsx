import React from "react";
import TableTickets from "./tableTickets.jsx";
import AdditionalBox from "./additionalBox.jsx";
import TreeBox from "./shared/show_tree/index.jsx";
import {connect} from "react-redux";
import Loader from "./loader.jsx";
import "../styles/home.less";

class Home extends React.Component { 
    render( ) {        
        const {loading,error}=this.props.Global.request;
        const {tree}=this.props.Additional;
        const test=(tree.hasOwnProperty('children') && tree.children.length>0);
        console.log('++++++++ddddddddddddddddddddddd',test,'========')
         return ( 
            <React.Fragment> 
                <div id="home">          
                <TableTickets className="tableHome"/>
                <AdditionalBox className="additionHome"/> 
                <TreeBox className="treeHome" />            
                </div>
                     
           
            
            {loading 
              ? <Loader/>
              : error
                  ? <p>Error, try again</p>
                  : ""}
        </React.Fragment>);
    }
}

export default connect(state => ({ Additional: state.Additional, Global: state.Global }))(Home);
