import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


class P2 extends Component{
    render(){

        return(
            <div>
                <Navbar></Navbar>
                <h2>Step 2</h2>
                <p>You will need to <b>connect the panels to a charge controller</b>. This controller will help regulate the amount of power in the system, keeping your batteries from becoming damaged.</p>
                <Link to="1"><Button>Previous</Button></Link>
                <Link to="3"><Button>Next</Button></Link>
            </div>
        )
    }

}

export default P2;