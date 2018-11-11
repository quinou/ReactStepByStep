import React from 'react';
import { updateSlid, sendNavCmd } from '../../../actions';
import { connect } from 'react-redux';
import './commandButtons.css';
import '../../../lib/bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.eot'
import '../../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'

class CommandButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleAddSlid = this.handleAddSlid.bind(this);
        this.handleRemoveSlid = this.handleRemoveSlid.bind(this);
        this.handleSaveSlid = this.handleSaveSlid.bind(this);
    }

    handleAddSlid(event) {
        const tmpSlid = {
            id: 'b5c35356-1347-457d-af6b-e3d40862c1e0',
            title: 'Titre slid added',
            txt: 'Text slid added',
            content_id: '62cf58dd-ecb1-495a-899c-b7c633fa1df7'
        };
        this.updateCurrentSlid(event, tmpSlid.id, tmpSlid.title, tmpSlid.txt, tmpSlid.content_id);
    }

    handleRemoveSlid(event) {
        console.log(event + this.props.slid.id);
        this.updateCurrentSlid(event, this.props.slid.id, this.props.slid.title, this.props.slid.txt, this.props.slid.content_id);
    }

    updateCurrentSlid(event, id, title, txt, content_id) {
        const slidUpdated = {
            id: id,
            title: title,
            txt: txt,
            content_id: content_id
        };
        
        this.props.dispatch(updateSlid(event,slidUpdated));
    }

    handleSaveSlid(event) {
        this.props.dispatch(sendNavCmd(event));
    }

    render() {
        return (
            <div>
                <button className="btn btn-default btn-primary" onClick={(e) => this.handleAddSlid('ADD_CMD')}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                <button className="btn btn-default btn-danger" onClick={(e) => this.handleRemoveSlid('REMOVE_CMD')}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                <button className="btn btn-default btn-success" onClick={(e) => this.handleSaveSlid('SAVE_CMD')}><span className="glyphicon glyphicon-floppy-saved" aria-hidden="true"></span></button>
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
export default connect(mapStateToProps)(CommandButtons);
