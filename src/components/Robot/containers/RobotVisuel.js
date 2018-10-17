import React, { Component } from 'react';
import '../../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class RobotVisuel extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.visualTypeProcessing = this.visualTypeProcessing.bind(this)
        this.state = {
        };
    }
    visualTypeProcessing(){
        switch(this.props.type){
            case 'img':
            return ( 
                < img className='imgCard'
                src={ this.props.src}/>
            );

            case 'video': 
            return( 
                <object width="100%" height="100%" data={this.props.src}></object>
            );

            default :
            return '';
        }
    }

    //render function use to update the virtual dom
    render() {
        let display_result = this.visualTypeProcessing();
        return (
            <div className="thumbnail">
                {display_result}
            </div>
        );
    }
}

//export the current classes in order to be used outside
export default RobotVisuel;
