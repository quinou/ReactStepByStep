import React from 'react';
import './main.css';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
// import * as contentMapTmp from '../../source/contentMap.json';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // let temp_robot_list;
        
        // temp_robot_list=contentMapTmp;

        this.state = {
            // contentMap: contentMapTmp,
        }
    }

    render() {
        return (

            <div className='container-fluid height-100'>
                <div className="row height-100">
                    <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                    </div>
                    <div className='col-md-6 col-lg-6 height-100'>
                    </div>
                    <div className='col-md-3 col-lg-3 height-100'>
                    </div>
                </div>
            </div>
        );
    }
}

//export the current classes in order to be used outside
export default Main;
