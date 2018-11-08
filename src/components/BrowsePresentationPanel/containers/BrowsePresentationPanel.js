import React from 'react';
import SlidList from '../../Common/presentation/components/SlidList';
import EditMetaPres from '../../Common/presentation/components/EditMetaPres'
import { connect } from 'react-redux';
import { updatePresentationContent} from '../../../actions'

// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

class BrowsePresentationPanel extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {  }
        //binding of the function given the ability to use this
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    //function with the event as parameter
    handleChangeTitle(e) {
        //call the set State function (from react component)
        // lead to update state object whith the given value
        // lead to re-render the current component
        this.props.dispatch(updatePresentationContent(e.target.value, this.props.description));
    }

    handleChangeDescription(e) {
        this.props.dispatch(updatePresentationContent(this.props.title, e.target.value));
    }

    render() {
        let slidArrayList;
        if(this.props.presentation.slidArray == undefined){
            console.log("SLIDARRAY NULL");
            slidArrayList = (<div></div>)
        }
        else{
            console.log("SLIDARRAY not null");
            slidArrayList = (<SlidList slidArray={this.props.presentation.slidArray}></SlidList>)
        }

        console.log("SlidArray: " + JSON.stringify(this.props.presentation.slidArray));

        return (
            <div>
                <EditMetaPres title={this.props.presentation.title}
                        description={this.props.presentation.description}
                        handleChangeDescription={this.handleChangeDescription}
                        handleChangeTitle={this.handleChangeTitle}></EditMetaPres>
                {slidArrayList}

            </div>


        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        presentation: state.updateModelReducer.presentation,
    }
};

export default connect(mapStateToProps)(BrowsePresentationPanel);
