import React from "react";
import PanelHeader from "./PanelHeader";
import RegPanel from "./RegPanel";

import './app.css'

class App extends React.Component{
	render(){
		return(
			<div className="login-reg-panel">
				<form action="123.html">
					<PanelHeader />
					<RegPanel />
				</form>
			</div>
		);
	}
}

export default App