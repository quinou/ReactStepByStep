import React from 'react';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import Content from '../../Common/content/containers/content';
import { connect } from 'react-redux';


class BrowseContentPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        let displaySlides = [];
        for (let content in this.props.content_map) {
            displaySlides.push(<Content key={this.props.content_map[content].id} slide_value={this.props.content_map[content]}> </Content>);
        }

        return (
            <div className="contentlist">
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
