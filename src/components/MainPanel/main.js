import React from 'react';
import './main.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';
import Content from '../Common/content/containers/content'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentMap: contentMapTmp,
        }
        console.log(contentMapTmp.contents);
    }

    render() {

        let displaySlides=[];
        // console.log(this.state.contentMap.contents.id);
        displaySlides = this.state.contentMap.contents.map(
            (slide)=>{
                console.log(slide)
                return(<Content key={slide.id} root_value={slide}> </Content>)
            }
        );
        
        return (

            <div className='container-fluid height-100'>
                <div className="row height-100">
                    <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
                        <p>Left</p>
                    </div>
                    <div className='col-md-6 col-lg-6 height-100'>
                        <p>Middle</p>

                        {displaySlides}
                    </div>
                    <div className='col-md-3 col-lg-3 height-100'>
                        <p>Right</p>
                    </div>
                </div>
            </div>
        );
    }
}

//export the current classes in order to be used outside
export default Main;
