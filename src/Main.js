import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import LeftSide from './components/LeftSide/LeftSide'
import MiddleSide from './components/MiddleSide/MiddleSide'

//extends the object Component
class Main extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);

        this.state = {
            msg: "Welcome to robot shop",
            one_robot: {
                "id": 1,
                "title": "robotA",
                "visual_type": "video",
                "visual_img": "https://www.youtube.com/watch?v=8vIT2da6N_o"
            }
        };
    }


    //render function use to update the virtual dom
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <h1>{this.state.msg}</h1>

                    <div className="col-md-4">
                        <LeftSide
                            robot_value={this.state.one_robot}></LeftSide>
                    </div>

                    <div className="col-md-4">
                        <MiddleSide></MiddleSide>
                    </div>

                    <div className="col-md-4">
                    </div>
                </div>

            </div>

        );
    }
}

//export the current classes in order to be used outside
export default Main;
