import React, {Component} from 'react';
import Navbar from '../Navbar';


class P5 extends Component{
    render(){

        return(
            <div>
                <Navbar></Navbar>
                <h2>Step 5</h2>
                <p><b>Connect the solar panels to the rest of the system.</b> Once everything is safely connected, you can introduce power to the system by connecting the solar panels to the charge converter. In the end, the panels should connect to the charge converter, which connects to the batteries, which connect to the inverter, which connects to your main system.</p>
            </div>
        )
    }

}

export default P5;