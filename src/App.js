import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.getPhotos = this.getPhotos.bind(this);
  }
  state = {
    photos: []
  }
  getPhotos() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          photos: json
        })
      })
  }
  render() {
    return (
      <div>
        <button onClick={this.getPhotos}>Pobierz zdjęcia</button>
        {this.state.photos && this.state.photos.map(photo => (
          <li style={{ listStyleType: "none" }} key={photo.id}>
            {JSON.stringify(photo)}
          </li>
        ))}
        {this.state.photos && this.state.photos.map(photo => (
          <li style={{ listStyleType: "none" }} key={photo.id}>
            {JSON.stringify(photo)}
          </li>
        ))}
        {this.state.photos && this.state.photos.map(photo => (
          <li style={{ listStyleType: "none" }} key={photo.id}>
            {JSON.stringify(photo)}
          </li>
        ))}
        {this.state.photos && this.state.photos.map(photo => (
          <li style={{ listStyleType: "none" }} key={photo.id}>
            {JSON.stringify(photo)}
          </li>
        ))}
        {this.state.photos && this.state.photos.map(photo => (
          <li style={{ listStyleType: "none" }} key={photo.id}>
            {JSON.stringify(photo)}
          </li>
        ))}
      </div>
    );
  }
}
export default App;
