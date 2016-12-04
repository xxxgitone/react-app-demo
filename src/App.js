import React from "react";
import PanelHeader from "./PanelHeader";
import LoginPanel from "./LoginPanel";

import './app.css'

class App extends React.Component{
	render(){
		return(
			<div className="login-reg-panel">
				<PanelHeader />
				<LoginPanel />
			</div>
		);
	}
}

export default App