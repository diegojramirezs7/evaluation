import React from 'react';

class Header extends React.Component {
	render(){
		return (
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="/">SpeedLine Solutions</a>
			    </div>
			    <form className="navbar-form navbar-right">
			    	<button type="button" className="btn btn-default" onClick={() => this.props.showAllInfo()}>
			     		Show All Info
			    	</button>
			    </form>
			  </div>
			</nav>
		);
	}
}

export default Header;