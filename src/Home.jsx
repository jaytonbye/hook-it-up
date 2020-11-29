import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Details from './Details'

const Home = () => {
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

    return (
        <>
        <h1>The Names:</h1>
            {users.map((user)=>{
                return(
                    <Router>
                        <Link to={`/users/${user.id}`} >
                            <h4>{user.name}</h4>
                        </Link>
                        <Route exact path={`/users/${user.id}`}>
                            <Details id={user.id} name={user.name} username={user.username} email={user.email} address={user.address} phone={user.phone} />
                        </Route>
                    </Router>
                )
            })}
        </>
    )
}

export default Home