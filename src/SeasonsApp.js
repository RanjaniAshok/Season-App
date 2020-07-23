import React from 'react';
import SeasonsDisplay from "./SeasonsAppcoponents/SeasonDisplay";
import Loader from './Loader';
class SeasonsApp extends  React.Component{
    state={
        lat:null,
        errMessage:''
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            positionError => this.setState({errMessage:positionError.message})
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component has been updated")
    }
    //Helper method
    renderContent(){

           if (this.state.lat && !this.state.errMessage) {
               return <SeasonsDisplay lat={this.state.lat}/>
           }
           if(this.state.errMessage && !this.state.lat){
               return <div>{this.state.errMessage}</div>
           }
              return  <Loader message="Please allow the location"/>
    }

    render(){
        console.log(this.state.lat)
        return (
            <>
                {this.renderContent()}
            </>
        )
    }

}
export default SeasonsApp;