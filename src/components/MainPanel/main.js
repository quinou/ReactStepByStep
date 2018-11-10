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
import Comm from '../../services/Comm'

const store = createStore(globalReducer);

class Main extends React.Component {
    constructor(props) {
        super(props);     
    }
    loadPresentation(){
        var comm = new Comm();
        comm.loadPres((resPres) => {
            console.log("PRES: " + resPres);
            comm.loadContent((resContent) => {
                console.log("CONTENT: " + resContent);
                store.dispatch(updateContentMap(resContent));
                store.dispatch(updatePresentation(resPres));
            }, (errorContent) => {
                console.log("ERROR CONTENT: " + errorContent);
            });
            
            
        }, (errorPres) => {
            console.log("ERROR PRES: " + errorPres);
        });
    }

    loadContent(){
        var comm = new Comm();
        
    }

    



    render() {
        this.loadPresentation();
        return (
            <Provider store={store}>
                <div className='container-fluid height-100'>
                    <div className="row height-100">
                        <div className='col-md-3 col-lg-3 height-100'>
                            <Presentation></Presentation>
                        </div>
                        <div className='col-md-6 col-lg-6 height-100'>
                            <EditSlidPanel></EditSlidPanel>
                        </div>
                        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                            <BrowseContentPanel> </BrowseContentPanel>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}
export default Main;
