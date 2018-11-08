import React from 'react';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import Content from '../../Common/content/containers/content';
import { connect } from 'react-redux';


class BrowseContentPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    render() {
        let displaySlides = [];
        for (let content in this.props.content_map) {
            displaySlides.push(<Content key={this.props.content_map[content].id} slide_value={this.props.content_map[content]}> </Content>);

        }


        return (
            <div >

                <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69"></img>
                <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                {displaySlides}
            </div>

        );
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        content_map: state.updateModelReducer.content_map,
    }
};

export default connect(mapStateToProps)(BrowseContentPanel);

