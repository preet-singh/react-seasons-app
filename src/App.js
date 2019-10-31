import React from 'react';
import SeasonsDisplay from './SeasonsDisplay';
import LoadingPage from './LoadingPage';

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: ''}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
        err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <SeasonsDisplay lat={this.state.lat} long={this.state.long}/>
      )
    }

    return (
      <LoadingPage message="Please accept location request"/>
    )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  
  }
};

export default App;
