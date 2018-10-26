import React from 'react';
import BrowsePresentationPanel from '../../../BrowsePresentationPanel/containers/BrowsePresentationPanel';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

class Presentation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.presentation.id,
            title: this.props.presentation.title,
            description: this.props.presentation.description,
            slidArray: this.props.presentation.slidArray,

        }
        //binding of the function given the ability to use this
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    //function with the event as parameter
    handleChangeTitle(e) {
        //call the set State function (from react component)
        // lead to update state object whith the given value
        // lead to re-render the current component
        this.setState({ title: e.target.value });
    }

    handleChangeDescription(e) {
        this.setState({ description: e.target.value });
    }


    render() {

        return (
            <BrowsePresentationPanel presentation={this.props.presentation}></BrowsePresentationPanel>


        );
    }
}


export default Presentation;
