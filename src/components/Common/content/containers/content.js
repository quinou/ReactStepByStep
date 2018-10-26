import React from 'react';
import ComponentsContent from '../components/componentsContent';

// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        let render_slide;
        if (this.props.slide_value.onlyContent) {
            render_slide = (
                <ComponentsContent slide_content_id={this.props.slide_value.id} className="thumbnail"></ComponentsContent>
            )
        }
        else {
            render_slide = (
                <div>
                    <ComponentsContent slide_content_id={this.props.slide_value.id} className="thumbnail"></ComponentsContent>
                    <div>
                        <h1>Title: {this.props.slide_value.title}</h1>
                        <h3>ID: {this.props.slide_value.id} </h3>
                    </div>
                </div>
            )
        }

        return (
        
        <div className="panel panel-default">
            <div className="panel-body">
                {render_slide}
            </div>
        </div>
                
 
    );
    }
}

//export the current classes in order to be used outside
export default Content;
