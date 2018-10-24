import React from 'react';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let render_slide;
        let render_content;

        switch (this.props.slide_value.type) {
            case "img":
                render_content = (
                    <img className='imgCard' alt={this.props.slide_value.title} src={this.props.slide_value.src} />
                );
                break;
            case "img_url":
                render_content = (
                    <img className='imgCard' alt={this.props.slide_value.title} src={this.props.slide_value.src} />
                );
                break;
            case "video":
                render_content = (
                    <object width="100%" height="100%" aria-label={this.props.slide_value.title} data={this.props.slide_value.src}></object>
                );
                break;
            case "web":
                render_content = (
                    <iframe src={this.props.slide_value.src} title={this.props.slide_value.title} height="100%" width="100%"></iframe>
                );
                break;
            default:
                render_content = ("");
                break;
        }

        if (this.props.slide_value.onlyContent) {
            render_slide = (
                <div className="thumbnail">
                    {render_content}
                </div>
            )
        }
        else {
            render_slide = (
                <div className="thumbnail">
                    {render_content}
                    <h3>ID: {this.props.slide_value.id} and Title: {this.props.slide_value.title}</h3>
                </div>
            )
        }
        return (
            <div>{render_slide}</div>

        );
    }
}

//export the current classes in order to be used outside
export default Content;
