import React from 'react';
import { Button,TabPane, Card, CardTitle, CardText, Row, Col,CardHeader, CardBody } from 'reactstrap';
import {connect} from "react-redux";
import "../../styles/shared/comments.less";

const DateParse=(date)=>
{
    const d=new Date(date);
    let hour; 
    if (`${d.getUTCHours()}`.toString().length===1)
    { hour=`0${d.getUTCHours()}`.toString(); }
    else { hour=`${d.getUTCHours()}`.toString(); }

    let min; 
    if (`${d.getMinutes()}`.toString().length===1)
    { min=`0${d.getMinutes()}`.toString(); }
    else { min=`${d.getMinutes()}`.toString(); }

    let sec; 
    if (`${d.getSeconds()}`.toString().length===1)
    { sec=`0${d.getSeconds()}`.toString(); }
    else { sec=`${d.getSeconds()}`.toString(); }

    return `${hour}:${min}:${sec}`;
}

class Comments extends React.Component {

 
  render() {
    const count=this.props.Comments.comments.length;
    const rows=this.props.Comments.comments;
    
   console.log("ASQ");
    return (
    <div id="commentsBox">     
       
        <Button color="primary">Добавить коммент</Button>
       
          
        {count>0?
         rows.map((e)=>
         <Card style={{marginTop:"12px"}}>
         <CardHeader>
         {e.user && <div>{e.user.name}</div>}
         <div>Дата:&ensp;{e.date.slice(0,10)}&ensp;Время:&ensp;{ DateParse(e.date)}</div>
         </CardHeader>
         <CardBody>
          {e.device?(e.device.parent?<CardTitle>{e.device.parent.name}/{e.device.name}</CardTitle>:<CardTitle>{e.device.name}</CardTitle>):""}
          
         
         <CardText>{e.text}</CardText>
         </CardBody>
         </Card>):""}



        
        
        </div>
    );
  }
}


export default connect(state => ({ Comments:state.Comments }))(Comments);