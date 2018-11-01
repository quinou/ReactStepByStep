import React from 'react';
import Slid from '../../slid/containers/Slid';
import './slidList.css';
class SlidList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        let slide_array = [];

        this.props.slidArray.forEach(element => {
            slide_array.push(<Slid key={element.id} slide={element} displayMode="SHORT"></Slid>)
        });

        return (
            <div className="vertical-scroll height-100">
                {slide_array}
            </div>


        );
    }
}


export default SlidList;
