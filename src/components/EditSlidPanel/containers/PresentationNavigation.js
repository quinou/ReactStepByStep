import React from 'react';
import { sendNavCmd } from '../../../actions';
import { connect } from 'react-redux';
import '../../../lib/bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.eot'

class PresentationNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleNavPresentation = this.handleNavPresentation.bind(this);
    }

    handleNavPresentation(event) {
        this.props.dispatch(sendNavCmd(event));
    }

    render() {

        return (
            <div>
                <button className="btn btn-default btn-light" onClick={(e) => this.handleNavPresentation('FIRST_CMD')}><span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span></button>
                <button className="btn btn-default btn-light" onClick={(e) => this.handleNavPresentation('PREV_CMD')}><span className="glyphicon glyphicon-backward" aria-hidden="true"></span></button>
                <button className="btn btn-default btn-light" onClick={(e) => this.handleNavPresentation('PLAY_CMD')}><span className="glyphicon glyphicon-play" aria-hidden="true"></span></button>
                <button className="btn btn-default btn-light" onClick={(e) => this.handleNavPresentation('PAUSE_CMD')}><span className="glyphicon glyphicon-pause" aria-hidden="true"></span></button>
                <button className="btn btn-default btn-light" onClick={(e) => this.handleNavPresentation('NEXT_CMD')}><span className="glyphicon glyphicon-forward" aria-hidden="true"></span></button>
                <button className="btn btn-default btn-light" onClick={(e) => this.handleNavPresentation('LAST_CMD')}><span className="glyphicon glyphicon-step-forward" aria-hidden="true"></span></button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        slid: state.selectedReducer.slid,
    }
};
//export the current classes in order to be used outside
export default connect(mapStateToProps)(PresentationNavigation);
