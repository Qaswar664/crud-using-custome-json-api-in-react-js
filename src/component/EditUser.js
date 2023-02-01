import { useState, useEffect } from 'react';import 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { getUsers } from '../Service/api';
import { editUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


const initialValue = {
    title: '',
    body: '',
    
}

function EditUser() { 
    
    const [user, setUser] = useState(initialValue);
    const { title, body } = user;
    const { id } = useParams();
    
    const navigate=useNavigate()
    function allData(){
        navigate('/')
    }

    useEffect(() => {
        loadUserDetails();
    },[]);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
      
        
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    

    return (
        <div>
            
            <div className="text-start m-5">
            <h4 className="text-dark mt-3 mb-3" >Add Data</h4>
                <Form className="w-25 h-100 ">
                    <Form.Group className="mb-3 mt-1 text-dark" controlId="formtext">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" required name="title" value={title} placeholder="Restaurant Name" onChange={(e) => onValueChange(e)} />

                    </Form.Group>

                    <Form.Group className="mb-3 mt-1 text-dark" controlId="formTextf">
                        <Form.Label>Body</Form.Label>

                        <Form.Control type="text" required name="body" value={body} placeholder="Restaurant Email" onChange={(e) => onValueChange(e)} />
                        {/* <Button onClick={() =>editUserDetails()} variant="primary" type="submit" className="mt-3 mb-5">
                            Save change
                        </Button> */}
                         <Button variant="primary" type="submit"   className='float-start'  onClick={(e)=>{e.preventDefault(); editUserDetails();
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
export default EditUser;