import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getUsers } from '../Service/api';
import { Link } from 'react-router-dom';


const AllData = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    // const deleteUserData = async (id) => {
    //     await deleteUser(id);
    //     getAllUsers();
    // }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    function deleteUser(id) {
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((response) => {
                console.warn(response);
                getAllUsers();
            })
        })
    }

// add data
const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.slice(0,10).map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Button onClick={() => deleteUser(item.id)}>
                                        Delete
                                    </Button>
                                    {/* <Button component={Link} to={`/edit/${item.id}`}>
                Edit
            </Button> */}
                                    <Link className='text-decoration-none' to={`/edit/${item.id}`}>
                                        <Button>
                                            Edit
                                        </Button>
                                    </Link>
                                </td>

                            </tr>
                        )
                    }


                    {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
                </tbody>
            </Table>
        </div>
    )
}

export default AllData