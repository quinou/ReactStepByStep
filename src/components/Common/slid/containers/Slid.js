import React from 'react';
import ComponentsContent from '../../content/components/componentsContent';

import EditMetaSlid from '../components/EditMetaSlid';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import './slid.css';
import { connect } from 'react-redux';
import { setSelectedSlid, updateSlid } from '../../../../actions';

class Slid extends React.Component {

    constructor(props) {
        super(props);
        this.updateSelectedSlid = this.updateSelectedSlid.bind(this);
        this.state = {
        }
        //binding of the function given the ability to use this
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    updateSelectedSlid() {
        const tmpSlid = {
            id: this.props.slide.id,
            title: this.props.slide.title,
            txt: this.props.slide.txt,
            content_id: this.props.slide.content_id
        };
        this.props.dispatch(setSelectedSlid(tmpSlid));
    }

    //function with the event as parameter
    handleChangeTitle(e) {
        //call the set State function (from react component)
        // lead to update state object whith the given value
        // lead to re-render the current component
        this.updateCurrentSlid(this.props.slide.id, e.target.value, this.props.slide.txt, this.props.slide.content_id);

    }

    handleChangeText(e) {
        this.updateCurrentSlid(this.props.slide.id, this.props.slide.title, e.target.value, this.props.slide.content_id);
    }

    updateCurrentSlid(id, title, txt, content_id) {
        const tmpSlid = {
            id: id,
            title: title,
            txt: txt,
            content_id: content_id
        };
        this.props.dispatch(updateSlid(tmpSlid));
    }

    onDragOver(ev) {
        ev.preventDefault();
    }

    onDrop(ev) {
        let data = ev.dataTransfer.getData("text");
        this.updateCurrentSlid(this.props.slide.id, this.props.slide.title, this.props.slide.txt, data);  
        
        console.log("DROP: " + data);
    }

    render() {
        let render_slide;
        if (this.props.displayMode === "SHORT") {
            render_slide = (
                <div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h2>{this.props.slide.title}</h2>
                            <h3 className="text-muted">{this.props.slide.txt}</h3>
                            <div onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)}><ComponentsContent slide_content_id={this.props.slide.content_id} className="thumbnail"></ComponentsContent></div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.props.displayMode === "FULL_MNG") {
            render_slide = (
                <div>
                    <EditMetaSlid title={this.props.slide.title}
                        txt={this.props.slide.txt}
                        handleChangeText={this.handleChangeText}
                        handleChangeTitle={this.handleChangeTitle}></EditMetaSlid>
                    <div onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)}><ComponentsContent slide_content_id={this.props.slide.content_id} className="thumbnail"></ComponentsContent></div>
                </div>
            )

        }

        return (

            <div>
               <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div onClick={() => { this.updateSelectedSlid() }}>
                    {render_slide}
                </div>
            </div>


        );
    }
}

//export the current classes in order to be used outside
export default connect()(Slid);