import React from 'react';
import GoogleMapReact from 'google-map-react';

class App extends React.Component{
    state = {
      showInfoWindow: false, //hide/show infowindow
      mapLoaded: false,
      stores: [
        {city: "Dease Lake", lat: 58.4374, lng: -129.9994},
        {city: "Fort Nelson", lat: 58.8050, lng: -122.6972},
        {city: "Terrace", lat: 54.5182, lng: -128.6032},
        {city: "Prince George", lat: 53.9171, lng: -122.7497},
        {city: "Whistler", lat: 50.1163, lng: -122.9574},
        {city: "Revelstoke", lat: 50.9981, lng: -118.1957},
        {city: "Creston", lat: 49.5, lng: -116.5135}
      ]
    }
  
  render(){
    return (
      <div className="App" style={{height: '70vh', width: '70vw', textAlign: 'center'}}>
       <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDAH-HZXwsL1DwvM7i0p3pPtrwrnzQhUxs'}}
        defaultCenter={{lat: 54.6569, lng: -124.7417}}
        defaultZoom={5.5} >

        {this.state.stores.map((store, index) => {
          return (
            <div key={index} lat={store.lat} lng={store.lng} style={{textAlign: 'center'}}>
              {store.city}
              <img src="./icons/raining.png" alt="icon" style={{width: '2.7vw', height: '3.5vh'}}/>
              14&deg;
            </div>
          );
        })

        }
        </GoogleMapReact>
      </div>
    );
  }
  
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDAH-HZXwsL1DwvM7i0p3pPtrwrnzQhUxs'
// })(App);
export default App;