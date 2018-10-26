import React from 'react';
import ComponentsContent from '../../content/components/componentsContent';

import EditMetaSlid from '../components/EditMetaSlid';
// import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import './slid.css';
import { connect } from 'react-redux';
import { setSelectedSlid } from '../../../../actions'

class Slid extends React.Component {

    constructor(props) {
        super(props);
        this.updateSelectedSlid = this.updateSelectedSlid.bind(this);
        this.state = {
            title: this.props.slide.title,
            txt: this.props.slide.txt
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
        this.setState({ title: e.target.value });
    }

    handleChangeText(e) {
        this.setState({ txt: e.target.value });
    }

    render() {
        let render_slide;
        if (this.props.displayMode === "SHORT") {
            render_slide = (
                <div>
                    <ComponentsContent slide_content_id={this.props.slide.content_id} className="thumbnail"></ComponentsContent>
                </div>
            )
        }
        else if (this.props.displayMode === "FULL_MNG") {
            render_slide = (
                <div>
                    <ComponentsContent slide_content_id={this.props.slide.content_id} className="thumbnail"></ComponentsContent>
                    <EditMetaSlid title={this.state.title}
                        txt={this.state.txt}
                        handleChangeText={this.handleChangeText}
                        handleChangeTitle={this.handleChangeTitle}></EditMetaSlid>
                </div>
            )

        }

        return (

            <div className="panel panel-default" onClick={() => { this.updateSelectedSlid() }}>
                <div className="panel-body">
                    <h1>Title: {this.state.title}</h1>
                    <h3>{this.state.txt} </h3>
                    {render_slide}
                </div>
            </div>


        );
    }
}

//export the current classes in order to be used outside
export default connect()(Slid);
