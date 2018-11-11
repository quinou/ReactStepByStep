import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import BrowseContentPanel from '../BrowseContentPanel/containers/BrowseContentPanel';
import Presentation from '../Common/presentation/containers/Presentation';
import EditSlidPanel from '../EditSlidPanel/containers/EditSlidPanel';

import * as presTmp from '../../source/pres.json';
import * as contentMapTmp from '../../source/contentMap.json';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../../reducers/Index'
import { updateContentMap, updatePresentation } from '../../actions';
import Comm from '../../services/Comm'
import CommandButtons from '../BrowsePresentationPanel/containers/CommandButtons';
import PresentationNavigation from '../EditSlidPanel/containers/PresentationNavigation';

const store = createStore(globalReducer);

class Main extends React.Component {
    constructor(props) {
        super(props);

    
        this.comm = new Comm();
        this.state = {
            contentMap: contentMapTmp,
            current_pres: presTmp
        }
        //send action to the store for update the current contentMap
        // store.dispatch(updateContentMap(contentMapTmp));
        // //send action to the store for update the current presentation
        // store.dispatch(updatePresentation(presTmp));

        store.subscribe(() => {
            this.setState(
                { presentation: store.getState().updateModelReducer.presentation });
            this.setState(
                { contentMap: store.getState().updateModelReducer.content_map });

            
            console.log("Presentation " + store.getState().updateModelReducer.presentation.id);


            if (store.getState().commandReducer.cmdPres == 'SAVE_CMD') {
                this.comm.savPres(
                    store.getState().updateModelReducer.presentation,
                    this.callbackErr
                );
            }
            else if (store.getState().commandReducer.cmdPres == 'FIRST_CMD') {
                this.comm.begin(store.getState().updateModelReducer.presentation.id, store.getState().selectedReducer.slid.id);
            }
            else if (store.getState().commandReducer.cmdPres == 'PREV_CMD') {
                this.comm.backward(store.getState().updateModelReducer.presentation.id, store.getState().selectedReducer.slid.id);
            }
            else if (store.getState().commandReducer.cmdPres == 'PLAY_CMD') {
                this.comm.play(store.getState().updateModelReducer.presentation.id, store.getState().selectedReducer.slid.id);
            }
            else if (store.getState().commandReducer.cmdPres == 'PAUSE_CMD') {
                this.comm.pause(store.getState().updateModelReducer.presentation.id, store.getState().selectedReducer.slid.id);
            }
            else if (store.getState().commandReducer.cmdPres == 'NEXT_CMD') {
                this.comm.forward(store.getState().updateModelReducer.presentation.id, store.getState().selectedReducer.slid.id);
            }
            else if (store.getState().commandReducer.cmdPres == 'LAST_CMD') {
                this.comm.end(store.getState().updateModelReducer.presentation.id, store.getState().selectedReducer.slid.id);
            }
        });
        // Bind local function to the current object
        this.loadContentUpdate = this.loadContentUpdate.bind(this);
        this.loadPresUpdate = this.loadPresUpdate.bind(this);
        this.callbackErr = this.callbackErr.bind(this);

        //FIRST ACTIONS
        // try to load the contentMap from the server
        this.comm.loadContent(this.loadContentUpdate, this.callbackErr);
        // try to load the presentation from the server
        this.comm.loadPres(0, this.loadPresUpdate, this.callbackErr);
        // create the sokect connection between the server and the web browser
        this.comm.socketConnection(this.state.uuid);
    }

    loadContentUpdate(data) {
        //send action to the store for update the current contentMap
        store.dispatch(updateContentMap(data));
    }

    loadPresUpdate(data) {
        //send action to the store for update the current presentation
        store.dispatch(updatePresentation(data));
    }

    callbackErr(msg) {
        console.error('Network Failure ?');
        console.error(msg);
    }

    render() {
        return (
            <Provider store={store}>
                <div className='container-fluid height-100'>
                    <div className="row height-100">
                        <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                            <CommandButtons></CommandButtons>
                            <Presentation></Presentation>
                        </div>
                        <div className='col-md-6 col-lg-6 height-100'>
                            <PresentationNavigation></PresentationNavigation>
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
