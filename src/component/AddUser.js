import React, { useState } from "react";
import 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AddUser() {


    
    const navigate=useNavigate()
    function allData(){
        navigate('/')
    }
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    function saveUser(e) {
        
        console.warn({ title, body });
        let data = { title, body }
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            // console.warn("result",result);
            result.json().then((response) => {
                console.warn("response", response);
            })
        })

    }

    return (
        <div>
            
            <div className="text-start m-5">
            <h4 className="text-dark mt-3 mb-3" >Add Data</h4>
                <Form className="w-25 h-100 ">
                    <Form.Group className="mb-3 mt-1 text-dark" controlId="formtext">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" required name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                    </Form.Group>

                    <Form.Group className="mb-3 mt-1 text-dark" controlId="formTextf">
                        <Form.Label>Body</Form.Label>

                        <Form.Control type="text" required name="body" value={body}  onChange={(e) => { setBody(e.target.value) }} />
                       
                        <Button variant="primary" type="submit"   className='float-start'  onClick={(e)=>{e.preventDefault(); saveUser();
                         allData()
                        }} >
                        Add data
                    </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}
export default AddUser;