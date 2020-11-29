// I decided to pass everything down via props, as it was easier...
//import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'

const Details = (props) => {
 /*   
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                return response.json()
            })
            .then((obj)=>{
                setUsers(obj)
            })
        }, [])
*/

const { id, email, address, phone, name } = props // I finally used destructuring, Yay!
    return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                <strong>Id:</strong> {id}
                                <br />
                                <strong>Email:</strong> {email} 
                                <br />
                                <strong>Address:</strong> {address.suite} {address.street}, {address.city}
                                <br />
                                <strong>Phone number:</strong> {phone}
                            </Card.Text>
                        </Card.Body>
                    </Card>
    )
}

export default Details