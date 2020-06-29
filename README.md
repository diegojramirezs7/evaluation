## SpeedLine Solutions Evaluation 

Displaying weather data superimposed over cities in a BC map. 

## Features
- Frontend gets weather data from an API. (OpenWeatherMap)
- City name, icon represent the city's current weather and temperature are displayed on the map
- When user clicks on the city name or icon, a dropdown/dropup list is displayed with more detailed data
- A button is included in the header that toggles the appearance of a table showing detailed data of all the cities. 
- The center of the map is calculated by taking the median point between the northernmost city and the southernmost city for the latitude and the median point between the westernmost and easternmost city for the longitude. 


## Tech Stack Used
- The web app is built with React. 
- The Google Maps API is used through the "google-map-react" component which allows to display arbitrary React components over the map more easily.
- The initial template for the app was created with "create-react-app", which sets up the environment to start building single page applications.  
- The weather data is fetched with Axios, an HTTP client.
- The OpenWeatherMap API is used to get weather data. This API was chosen because it's free for up to 60 calls a minute and provides extensive weather data for thousands of cities. 