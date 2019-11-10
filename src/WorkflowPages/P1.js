import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from '../assets/P1.jpg';
import Navbar from '../Navbar';
import './workflow-page.css';

class P1 extends Component{
    render(){

        return(
            <div class="screen">
                <Navbar></Navbar>
                <div class="content">
                    <h2>Step 1</h2>
                    <img src={pic} width="100%"/>
                    <p><b>Install the solar panels.</b> Once you're ready to start, install the solar panels. Choose the best type of panel for you and get enough of the to produce the amount of power you need. This is another area where a professional (or at least an expert) can be really helpful, as there is a lot of math involved in figuring out the necessary number of panels.</p>
                </div>
                <div class="prev-next-btns">
                    <span></span>
                    <Link to="2"><Button>Next</Button></Link>
                </div>
            </div>
        )
    }

}

export default P1;