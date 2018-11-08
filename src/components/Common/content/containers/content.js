import React from 'react';
import ComponentsContent from '../components/componentsContent';

// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    allowDrop(ev) {
        ev.preventDefault();
    }
    
    onDragStart(ev, content) {
        console.log("DRAG: ", content.id);
        ev.dataTransfer.setData("text/plain", content.id);
    }

    render() {

        let render_slide;
        if (this.props.slide_value.onlyContent) {
            render_slide = (
                <div className="draggable" draggable="true" onDragStart={(e) => this.onDragStart(e,this.props.slide_value)}><ComponentsContent slide_content_id={this.props.slide_value.id} className="thumbnail"></ComponentsContent></div>
            )
        }
        else {
            render_slide = (
                <div>
                    <div className="draggable" draggable="true" onDragStart={(e) => this.onDragStart(e,this.props.slide_value)}><ComponentsContent slide_content_id={this.props.slide_value.id} className="thumbnail"></ComponentsContent></div>
                    <div>
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
