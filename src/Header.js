import React from 'react';

function Header(props){
	return (
		<nav className="navbar navbar-inverse">
			<div className="container-fluid">
			    <div className="navbar-header">
			    	{
			    		//reloads the page
			    	}
			      <a className="navbar-brand" href="/">SpeedLine Solutions</a>
			    	}
			    </div>
		   		<form className="navbar-form navbar-right">
		   			{
		   				//shows/hides info table, text on the button depends on whether table is showing or not
		   			}
					<button type="button" className="btn btn-default" onClick={() => props.showAllInfo()}>
				    	{(props.showInfo)?"Hide Info": "Show Info"}
					</button>
				</form>
			</div>
		</nav>
	);
}

export default Header;