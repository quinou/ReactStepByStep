import React from 'react';

export default class EditMetaSlid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor="currentSlideTitle">Title </label>
                <input
                    type="text"
                    className="form-control"
                    id="currentSlideTitle"
                    onChange={this.props.handleChangeTitle}
                    value={this.props.title}
                />
                <label htmlFor="currentSlideText">Text </label>
                <textarea
                    rows="5"
                    type="text"
                    className="form-control"
                    id="currentSlideText"
                    onChange={this.props.handleChangeText}
                    value={this.props.txt}>
                </textarea>
            </div>
        );
    }
}
