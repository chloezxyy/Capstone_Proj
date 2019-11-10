import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from '../assets/P5.jpg';
import Navbar from '../Navbar';


class P5 extends Component{
    render(){

        return(
            <div class="screen">
                <Navbar></Navbar>
                <div class="content">
                    <h2>Step 5</h2>
                    <img src={pic} width="100%"/>
                    <p><b>Connect the solar panels to the rest of the system.</b> Once everything is safely connected, you can introduce power to the system by connecting the solar panels to the charge converter. In the end, the panels should connect to the charge converter, which connects to the batteries, which connect to the inverter, which connects to your main system.</p>
                </div>
                <div class="prev-next-btns">
                    <Link to="4"><Button>Previous</Button></Link>
                </div>
            </div>
        )
    }

}

export default P5;