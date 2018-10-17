import React, { Component } from 'react';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class RobotLabel extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    //render function use to update the virtual dom
    render() {
        return (
            <div className="RobotLabel">
                <h1>{this.props.title}</h1>
                <h5>{this.props.id} LABEL:{this.props.title}</h5>


            </div>
        );
    }
}

//export the current classes in order to be used outside
export default RobotLabel;
