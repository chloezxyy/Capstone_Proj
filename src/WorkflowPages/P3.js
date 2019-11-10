import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


class P3 extends Component{
    render(){

        return(
            <div>
                <Navbar></Navbar>
                <h2>Step 3</h2>
                <p><b>Connect the charge controller to your batteries.</b> Assuming you have DC batteries, you can connect your charge controller to your batteries. If you have AC batteries, you'll need to connect your inverter first (see next step).</p>
                <Link to="2"><Button>Previous</Button></Link>
                <Link to="4"><Button>Next</Button></Link>
            </div>
        )
    }

}

export default P3;