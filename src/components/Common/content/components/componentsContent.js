import React from 'react';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class ComponentsContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let render_visual;

        let slide_value = this.props.content_map[this.props.slide_content_id];
        switch (slide_value.type) {
            case "img":
            case "img_url":
                render_visual = (
                    <img className='imgCard' alt={slide_value.title} src={slide_value.src} />
                );
                break;
            case "video":
                render_visual = (
                    <object width="100%" height="100%" aria-label={slide_value.title} data={slide_value.src}></object>
                );
                break;
            case "web":
                render_visual = (
                    <iframe src={slide_value.src} title={slide_value.title} height="100%" width="100%"></iframe>
                );
                break;
            default:
                render_visual = ("");
                break;
        }
        return (
            <div className="thumbnail">
                {render_visual}
            </div>            
    );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        content_map: state.updateModelReducer.content_map,
    }
};

export default connect(mapStateToProps)(ComponentsContent);
