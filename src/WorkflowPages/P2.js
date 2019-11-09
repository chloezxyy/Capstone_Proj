import React, {Component} from 'react';
import Navbar from '../Navbar';


class P2 extends Component{
    render(){

        return(
            <div>
                <Navbar></Navbar>
                <h2>Step 2</h2>
                <p>You will need to <b>connect the panels to a charge controller</b>. This controller will help regulate the amount of power in the system, keeping your batteries from becoming damaged.</p>
            </div>
        )
    }

}

export default P2;