import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({apiKey: 'd20569bbacb24a92a5f2ca447cee27f0'});

const particlesOption = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'login',
      isLoggedIn: false
    }
  }

  calculateFaceLosition = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      topRow: clarifaiFace.top_row * width,
      rightCol: width - clarifaiFace.right_col * width,
      botRow: height - clarifaiFace.bottom_row * height,
      leftCol: clarifaiFace.left_col * width
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonChange = () => {
    console.log(this.box)
    this.setState({imgUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLosition(response)))
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if(route === 'logout') {
      this.setState({isLoggedIn: false})
    } else if(route === 'home') {
      this.setState({isLoggedIn: true})
    }
    this.setState({route: route});
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles"
        params={particlesOption}
        />
        <Navigation isLoggedIn={this.state.isLoggedIn} onRouteChange={this.onRouteChange} />
        { this.state.route === 'home' 
          ?
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonChange={this.onButtonChange} />
            <FaceRecognition imgUrl={this.state.imgUrl} box={this.state.box}/>
          </div>
          :(
            this.state.route === 'login'
            ? <Login onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          )
        }
        
        
      </div>
    );
  }
}

export default App;
