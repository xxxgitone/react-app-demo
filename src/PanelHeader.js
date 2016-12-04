import React from "react";

import './PanelHeader.css'

class PanelHeader extends React.Component{

	render(){
		return(
			<div className="panelHeader">
				<div className="login">登录</div>
				<div className="close">×</div>
			</div>
		);
	}
	
}

export default PanelHeader;