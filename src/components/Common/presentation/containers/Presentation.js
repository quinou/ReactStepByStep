import React from 'react';
import BrowsePresentationPanel from '../../../BrowsePresentationPanel/containers/BrowsePresentationPanel';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { connect } from 'react-redux';


class Presentation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.presentation.title,
            description: this.props.presentation.description,

        }
    }


    render() {
        console.log(this.props.presentation);
        return (
            <BrowsePresentationPanel></BrowsePresentationPanel>


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        presentation: state.updateModelReducer.presentation,
    }
};

export default connect(mapStateToProps)(Presentation);
