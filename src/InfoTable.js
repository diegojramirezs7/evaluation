import React from 'react';

function InfoTable(props){
	const stores = props.stores;
	//shows detailed info of all the locations when user presses the button on the header
	return (
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
						<th>Description</th>
						<th>Wind Speed</th>
					</tr>
				</thead>
				<tbody>
					{
						//for every store display a row on the table
					}
					{stores.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.temp} &deg;C</td>
								<td>{item.pressure}</td>
								<td>{item.humidity} % </td>
								<td>{item.description} </td>
								<td>{item.windSpeed} m/s</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default InfoTable;