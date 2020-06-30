import React from 'react';
import GoogleMap from 'google-map-react';
import CityInfo from './CityInfo';
import axios from 'axios';
import Header from './Header';
import InfoTable from './InfoTable';

class App extends React.Component{
  state = {
    center: {},
    stores: [],
    showInfo: false,
    activeStore: {}
  }

  intervalId;
  
  getCenter(){
    // get the center of the map by getting midpoint of northernmost/southernmost cities
    // and easternmost/westernmost cities
    const stores = this.state.stores;
    var maxLat = 0;
    var minLat = 100;
    var maxLong = -300;
    var minLong = +300;
    
    for (let i = 0; i<stores.length; i++){
      if (stores[i].coords.lat > maxLat){
        maxLat = stores[i].coords.lat;
      }else if(stores[i].coords.lat < minLat){
        minLat = stores[i].coords.lat;
      }

      if (stores[i].coords.lng > maxLong){
        maxLong = stores[i].coords.lng;
      }else if(stores[i].coords.lng < minLong){
        minLong = stores[i].coords.lng;
      }
    }

    var latitude = (maxLat + minLat) / 2.0;
    var longitude = (maxLong + minLong) / 2.0;

    this.setState({
      center: {lat: latitude, lng: longitude}
    })
  } 

  componentDidMount(){
    this.getCities();

    //update every half hour
    let half_hour = 1000*60*30
    this.intervalId = setInterval(this.getCities.bind(this), half_hour)
  }


  componentWillUnmount(){
    //if component is not there, no need to fetch the data
    clearInterval(this.intervalID);
  }


  getCities(){
    var city_ids = "6113365,5932311,6180144,5936286,5955902,6162949,6121621";
    //fetch data from openWeatherMap API
    axios.get("http://api.openweathermap.org/data/2.5/group", {
     params: {
      units: "metric",
      id: city_ids,
      appid: "d768b86ac2b5b13b09964365eb5f0128"
     }
    }).then(response => {
      var data = response.data.list;
      const cityWeathers = data.map(city => {
        return (
          {
            name: city.name,
            temp: city.main.temp,
            coords: {lat: city.coord.lat, lng: city.coord.lon},
            tempMin: city.main.temp_min,
            tempMax: city.main.temp_max,
            pressure: city.main.pressure,
            humidity: city.main.humidity,
            description: city.weather[0].description,
            windSpeed: city.wind.speed,
            icon: "http://openweathermap.org/img/wn/"+city.weather[0].icon+".png"
          }
        );
      });
      this.setState({
        stores: cityWeathers
      });

      this.getCenter();
    });
  }

  handleClick = () => {
    //display/hide info table
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render(){
    return (
      <div>
        {
          //
        }
        <Header 
          showAllInfo={this.handleClick}
          showInfo={this.state.showInfo}
        />
        <div className="app">
         <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyDAH-HZXwsL1DwvM7i0p3pPtrwrnzQhUxs'}}
          defaultCenter={{lat: 54.0562, lng: -124.7414}}
          defaultZoom={5.4} 
          center={{lat: this.state.center.lat, lng: this.state.center.lng}}
        >

            {
              //for every store, show it on the map with the appropriate info
            }
            {this.state.stores.map((store, index) => {
                const latitude = store.coords.lat;
                return (
                  <CityInfo 
                    key={index} 
                    lat={Math.ceil(latitude)} 
                    lng={Math.floor(store.coords.lng)} 
                    store={store}
                    cn={(latitude > this.state.center.lat)?'dropdown':'dropup'}
                  />
                );
              })
            }

          </GoogleMap>
          
          {
            //show/hide detailed info table when user clicks button on the header
          }

          {this.state.showInfo && 
            <InfoTable 
              stores={this.state.stores}
            />
          }
          
        </div>
      </div>
    );
  }
}

export default App;