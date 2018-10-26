import React from 'react';
import Slid from '../../slid/containers/Slid';

class SlidList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        let slide_array = [];

        this.props.slidArray.forEach(element => {
            console.log(element.id);
            slide_array.push(<Slid key={element.id} slide={element} displayMode="SHORT"></Slid>)
        });

        return (
            <div>
                {slide_array}
            </div>


        );
    }
}


export default SlidList;
