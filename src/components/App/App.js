import React, { Component } from 'react';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class App extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            increment: 0
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({ title: e.target.value });
    }

    handleIncrement() {
        this.setState({ increment: this.state.increment + 1 })
    }

    //render function use to update the virtual dom
    render() {
        return (
            <div className="App">
                <h1 onMouseEnter={this.handleIncrement}> this is my App Component &nbsp;
                <span className="badge badge-primary">{this.state.increment}</span>
                </h1>
                <h2>{this.props.component_title}</h2>
                <label htmlFor="titleInput">Title </label>
                <input type="text" id="titleInput"
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <h3 >{this.state.title}</h3>
            </div>
        );
    }
}

//export the current classes in order to be used outside
export default App;
