import React from 'react';
import SlidList from '../../Common/presentation/components/SlidList';
import EditMetaPres from '../../Common/presentation/components/EditMetaPres'

// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

class BrowsePresentationPanel extends React.Component {
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
            <div>
                <EditMetaPres title={this.state.title}
                        description={this.state.description}
                        handleChangeDescription={this.handleChangeDescription}
                        handleChangeTitle={this.handleChangeTitle}></EditMetaPres>

                <SlidList slidArray={this.state.slidArray}></SlidList>

            </div>


        );
    }
}

//export the current classes in order to be used outside
export default BrowsePresentationPanel;
