import React from "react";

import './RegPanel.css';

class RegPanel extends React.Component{

	constructor(){
		super();
		this.state={
			userName:'请输入...',
			number:'请输入...',
			code:'请输入...',
			password:'请输入...',
		};
		this.updateUser=this.updateUser.bind(this);
		this.updateNumber=this.updateNumber.bind(this);
		this.updateCode=this.updateCode.bind(this);
		this.updatePassword=this.updatePassword.bind(this);
	}
	
	updateUser(e){
		this.setState({
			userName:e.target.value,
		});
	}

	updateNumber(e){
		this.setState({
			number:e.target.value,
		});
	}

	updateCode(e){
		this.setState({
			code:e.target.value,
		});
	}

	updatePassword(e){
		this.setState({
			password:e.target.value,
		});
	}

	getTitle(){
		return <h3 className="title">注册新账号</h3>
	}
	
	getUser(){
		return(
			<div className="userInput">
				<span className="user">名字</span>
				<input type="text" className="inputText" placeholder="真实姓名或者常用昵称" 
					required
					onChange={this.updateUser}/>
			</div>
		);
	}
	
	getType(){
		return(
			<div className="regType">
				<label className="radio-num">
					<input type="radio" name="reg-type" value="1" checked/>
					用手机号注册
				</label>
				<label className="radio-email" value="2">
					<input type="radio" name="reg-type"/>
					用Email注册
				</label>
			</div>
		);
	}

	getNum(){
		return(
			<div className="reg-num">
				<div className="number">
					<input type="text" className="inputText" placeholder="仅支持大陆手机号" 
					required
					onChange={this.updateNumber}/>
				</div>
				<div className="code">
					<input type="text" className="inputCode" placeholder="短信验证码" required 
					onChange={this.updateCode}/>
					<span className="getCode">获取验证码</span>
				</div>
			</div>
		);
	}

	getPass(){
		return(
			<div className="passInput">
				<span className="user">密码</span>
				<input type="password" className="inputText" placeholder="不少于6位" 
				required minLength="6" 
				onChange={this.updatePassword}/>
			</div>
		);
	}

	getButton(){
		return(
			<div className="reg-button">
				<span className="serve">同意并接受<a href="###">《服务条款》</a></span>
				<button className="button" type="submit">注册</button>
			</div>
		);
	}
	
	getDisplay(){
		return(
			<div>
				<p className="disContent">你的名字：{this.state.userName}</p>
				<p className="disContent">你的手机号：{this.state.number}</p>
				<p className="disContent">你的验证码：{this.state.code}</p>
				<p className="disContent">你的密码：{this.state.password}</p>
			</div>
		);
	}

	render(){
		return (
			<div>
				<div className="regPanel">
					{this.getTitle()}
					{this.getUser()}
					{this.getType()}
					{this.getNum()}
					{this.getPass()}
					{this.getButton()}
				</div>
				<div className="disPanel">
					{this.getDisplay()}
				</div>
			</div>
		);
	}
}

export default RegPanel;