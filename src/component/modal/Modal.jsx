import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {addTodo} from '../../store/actions/TodoAction'


const Modals = (props)=>{
    const [modal, setModal] = useState(false)
    const [task, setTask] =useState({
        title:'',
        description:''
    })

    const toggle = ()=> {
        setModal({modal: !modal });
    }


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
            <Button style={{marginTop:'-65px'}} color="danger" onClick={toggle}>Nauja užduotis</Button>
            <Modal isOpen={modal} toggle={toggle} className={props.className}>
                <ModalHeader toggle={toggle}>Sukurti naują užduotį</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="title">Pavadinimas</Label>
                            <Input type="text" onChange={handleChange} required value={task.title} name="title" id="title" placeholder="Įveskite pavadinimą" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Užduoties aprašymas</Label>
                            <Input type="textarea" required onChange={handleChange} value={task.description} name="description" id="description" placeholder="Įveskite užduoties aprašymą" />
                        </FormGroup>
                        <Button color="primary">Pridėti</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}



export default connect(null, {addTodo}) (Modals);