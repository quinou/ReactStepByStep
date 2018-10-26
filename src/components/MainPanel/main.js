import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import * as presTmp from '../../source/pres.json';
import * as contentMapTmp from '../../source/contentMap.json';

import BrowseContentPanel from '../BrowseContentPanel/containers/browseContentPanel';
import Presentation from '../Common/presentation/containers/Presentation';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers'
import {updateContentMap,updatePresentation} from '../../actions';

const store = createStore(globalReducer);

class Main extends React.Component {
    constructor(props) {
        super(props);

        var slide1Tmp = {
            id: 1,
            title: "Title slide",
            txt: "Text du slide",
            content_id: 1,
        };

        var slide2Tmp = {
            id: 2,
            title: "Title slide 2",
            txt: "Text du slide 2 ",
            content_id: 2,
        }

        var presentationTmp = {
            id: 0,
            title: "Titre de la présentation",
            description: "Description de la présentation",
            slidArray: [slide1Tmp, slide2Tmp],
        }

        this.state = {
            slide1: slide1Tmp,
            slide2: slide2Tmp,
            presentationMap: presentationTmp
        }
        store.dispatch(updateContentMap(contentMapTmp));
    }

    render() {
        return (
            <Provider store={store} >
                <div className='container-fluid height-100'>
                    <div className="row height-100">
                        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                            <p>Left</p>
                            <Presentation presentation={this.state.presentationMap}></Presentation>
                        </div>
                        <div className='col-md-6 col-lg-6 height-100'>
                            <p>Middle</p>
                            <EditSlidPanel selected_slid={this.state.slide2}></EditSlidPanel>
                        </div>
                        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                            <p>Right</p>
                            <BrowseContentPanel> </BrowseContentPanel>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}



export default Main;
