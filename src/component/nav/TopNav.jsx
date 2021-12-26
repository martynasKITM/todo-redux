import React from 'react'
import { Button, ButtonGroup} from 'react-bootstrap'
import {filterTodo } from '../../store/actions/TodoAction';
import {connect } from 'react-redux'
const TopNav = (props) =>{
    let {filterTodo} = props;
    return (
             <ButtonGroup style={{marginLeft:'156px'}}>
                <Button color="primary" onClick={() => filterTodo('VISOS')}>Visos užduotys</Button>
                <Button color="danger" onClick={() => filterTodo('AKTYVIOS')} >Aktyvios</Button>
                <Button color="success" onClick={() => filterTodo('PABAIGTOS')} >Užbaigtos</Button>
             </ButtonGroup>
      
    )
}

export default connect(null, {filterTodo})(TopNav);