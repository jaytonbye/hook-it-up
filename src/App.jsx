import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './Home'

//I removed the switch statement from this lab, because it wasn't needed (with the way I was doing things).
//This might explain my comment below?

const App = () =>{
    return (
    <>
        <h1 className='text-primary' >Hook It Up!</h1>
        <Router>
            <nav>
                <ul>
                    <li><Link to='/' >List of Names</Link></li> {/* When I click on list of names, it leaves the detailed components showing;
                                                                    It will only refresh the page if I press refresh or resubmit the URL,
                                                                    I don't understand this behavior. Shouldn't clicking the link do the same,
                                                                    as it directs me to the same URL? */}
                </ul>
            </nav>
                <Route exact path='/'>
                    <Home /> {/* I didn't realize I could write coponent's like this (in the previous lab, 
                            we wrote the components as a property on Route). I feel like this way is better because 
                            we can pass props down to the component. Is this correct? */}
                </Route>
        </Router>
    </>
    )
}

export default App