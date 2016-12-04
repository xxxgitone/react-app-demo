import React from "react";

import './LoginPanel.css'

class LoginPanel extends React.Component{

	getTitle(){
		return <h3 className="title">注册新账号</h3>
	}
	
	getUser(){
		return(
			<div className="userInput">
				<span className="user">名字</span>
				<input type="text" className="userText" placeholder="真实姓名或者常用昵称" required/>
			</div>
		);
	}

	

	render(){
		return (
			<div className="loginPanel">
				{this.getTitle()}
				{this.getUser()}
			</div>
		);
	}
}

export default LoginPanel;