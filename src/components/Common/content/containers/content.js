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
        switch (this.props.root_value.type) {
            case "img":
                render_slide = (
                    <img className='imgCard' src={this.props.root_value.src} />
                );
                break;
            case "img_url":
                render_slide = (
                    <img className='imgCard' src={this.props.root_value.src} />
                );
                break;
            case "video":
                render_slide = (
                    <object width="100%" height="100%" data={this.props.root_value.src}></object>
                );
                break;
        }
        return (

            <div>
                <h3>id: {this.props.root_value.id} title: {this.props.root_value.title}</h3>
                <div className="thumbnail">{render_slide}</div>

            </div>

        );
    }
}

//export the current classes in order to be used outside
export default Content;
