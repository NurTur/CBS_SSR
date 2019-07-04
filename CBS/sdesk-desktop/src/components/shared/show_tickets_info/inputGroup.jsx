import React from 'react';
import {Row,Col} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export const Radioboxes=(props)=> {
    return (       
        <Row>
        <Col sm="6">  
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="radio" checked={props.check}/>
          </InputGroupText>
        </InputGroupAddon>
        <Input value={props.value1} disabled/>
        </InputGroup>
        </Col>
        <Col sm="6">
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="radio" checked={!props.check}/>
          </InputGroupText>
        </InputGroupAddon>
        <Input value={props.value2} disabled/>
        </InputGroup>     
        </Col>   
        </Row>          
    );
  }

  export const Input1Col=(props)=> {
    return (       
      <InputGroup >
      <InputGroupAddon  addonType="prepend">{props.title}</InputGroupAddon>
      <Input  value={props.value} disabled={props.disable}/>
      </InputGroup>
    );
  }

  export const InputWithStyle=(props)=> {
    return (       
      <InputGroup className="fontMiddle" style={{width:`${props.px}px`}}>
          <InputGroupAddon  addonType="prepend">{props.title}</InputGroupAddon>
          <Input   value={props.value} disabled={props.disable}/>
    </InputGroup> 
    );
  }
  
  export const InputWithRadio=(props)=> {
    return (       
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="radio" checked={props.check}/>&ensp;Производителя до
          </InputGroupText>          
        </InputGroupAddon>
        <Input value={props.value} disabled={props.disable}/>
      </InputGroup>     
    );
  }