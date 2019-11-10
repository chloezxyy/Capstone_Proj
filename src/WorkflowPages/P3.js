import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from '../assets/P3.jpg';
import Navbar from '../Navbar';


class P3 extends Component{
    render(){

        return(
            <div class="screen">
                <Navbar></Navbar>
                <div class="content">
                    <h2>Step 3</h2>
                    <img src={pic} width="100%"/>
                    <p><b>Connect the charge controller to your batteries.</b> Assuming you have DC batteries, you can connect your charge controller to your batteries. If you have AC batteries, you'll need to connect your inverter first (see next step).</p>
                </div>
                <div class="prev-next-btns">
                    <Link to="2"><Button>Previous</Button></Link>
                    <Link to="4"><Button>Next</Button></Link>
                </div>
            </div>
        )
    }

}

export default P3;