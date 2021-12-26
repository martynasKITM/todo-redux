import React, {useState} from 'react';
import { Button, Modal, Form, FormGroup } from 'react-bootstrap';
import {connect} from 'react-redux';
import {addTodo} from '../../store/actions/TodoAction'


const Modals = (props)=>{
    const [modal, setModal] = useState(false)
    const [task, setTask] =useState({
        title:'',
        description:''
    })


    const handleClose = () =>  setModal(false);
    const handleShow = () =>  setModal(true);


    const handleChange = (e)=>{
        setTask(
            {
                ...task,
                [e.target.name]:e.target.value
            }
        )

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let id = parseInt(Date.now())
        const todo = {
            ...task,
            isComplete:false,
            id:id
        }
        props.addTodo(todo)
        setTask({})
        setModal(false);
    }

    return (
        <div>
            <Button style={{marginTop:'-65px'}} color="danger" onClick={handleShow}>Nauja užduotis</Button>
            <Modal show={modal} onHide={handleClose} className={props.className}>
                <Modal.Header>Sukurti naują užduotį</Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Form.Label for="title">Pavadinimas</Form.Label>
                            <Form.Control type="text" onChange={handleChange} required value={task.title} name="title" id="title" placeholder="Įveskite pavadinimą" />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label for="description">Užduoties aprašymas</Form.Label>
                            <Form.Control type="textarea" required onChange={handleChange} value={task.description} name="description" id="description" placeholder="Įveskite užduoties aprašymą" />
                        </FormGroup>
                        <Button variant="secondary" onClick={handleClose}>
                            Uždaryti
                        </Button>
                        <Button color="primary" type="submit">Pridėti</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}



export default connect(null, {addTodo}) (Modals);