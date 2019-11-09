import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class WorkflowPage extends Component{
    render(){

        return(
            <div>
                <Navbar></Navbar>
                <Link to="workflow/1">Step 1</Link><br/>
                <Link to="workflow/2">Step 2</Link><br/>
                <Link to="workflow/3">Step 3</Link><br/>
                <Link to="workflow/4">Step 4</Link><br/>
                <Link to="workflow/5">Step 5</Link>
            </div>
        )
    }

}

export default WorkflowPage;