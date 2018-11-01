import React from 'react';
import Slid from '../../Common/slid/containers/Slid'


// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
class EditSlidPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.getSlidSelected = this.getSlidSelected.bind(this);
    }


    getSlidSelected() {
        let array_render = [];
        console.log(this.props.selected_slid.id)
        if (this.props.selected_slid.id === undefined) {
            console.log("Undefined");
            return;

        }
        array_render = (
            <Slid
                key={this.props.selected_slid.id}
                slide={this.props.selected_slid}
                displayMode="FULL_MNG"></Slid>

        );

        return array_render;
    }

    render() {

        const display_list = this.getSlidSelected();
        return (
            <div>
                {display_list}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    let mySelectedSlid = {};
    for (let slidTmp in state.updateModelReducer.presentation.slidArray) {
        if (state.updateModelReducer.presentation.slidArray[slidTmp].id === state.selectedReducer.slid.id) {
            mySelectedSlid = state.updateModelReducer.presentation.slidArray[slidTmp];
        }
    }

    return {
        selected_slid: mySelectedSlid

    }
};

//export the current classes in order to be used outside
export default connect(mapStateToProps)(EditSlidPanel);
