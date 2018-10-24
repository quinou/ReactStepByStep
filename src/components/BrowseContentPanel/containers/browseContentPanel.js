import React from 'react';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import Content from '../../Common/content/containers/content'


class BrowseContentPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        
        return (
            <Content slide_value={this.props.slide_value} className="thumbnail"></Content>

        );
    }
}

//export the current classes in order to be used outside
export default BrowseContentPanel;
