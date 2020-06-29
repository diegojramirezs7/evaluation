import React from 'react'

function CityInfo(props){
	const store = props.store;
	const classes = "cityInfo "+props.cn;
	return (
		<div className={classes}>
			<button className="dropdown-toggle " data-toggle="dropdown" type="button">
				<span className="cityName"> {store.name} </span>
				<img 
					src={store.icon} alt="icon" className="icon"
				/> 
				<span style={{fontSize: '1.2em'}}>
	            	{store.temp}&deg;C
	            </span>
            </button>
            <ul className="dropdown-menu list-group" style={{textAlign: 'center'}}>
            	<h4>{store.name}</h4>
            	<li className="list-group-item">temp: {props.store.temp} &deg;C</li>
				<li className="list-group-item">pressure: {props.store.pressure} </li>
				<li className="list-group-item">humidity: {props.store.humidity} %</li>
				<li className="list-group-item">description: {props.store.description} </li>
				<li className="list-group-item">wind speed: {props.store.windSpeed} m/s</li>			     
            </ul>
		</div>
	);
}

export default CityInfo;