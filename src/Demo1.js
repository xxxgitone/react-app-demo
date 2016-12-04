import React from "react";

class Demo1 extends React.Component{
  constructor(){
    super();
    this.state={
      txt:'this is state txt'
    };

  };

  update(e){
    this.setState({txt:e.target.value});
  }

  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
      </div>
    );
  }
}

const Widget=(props)=>
      <input type="text" onChange={props.update} />



// App.propTypes={
//     txt:React.PropTypes.string,
//     cat:React.PropTypes.number.isRequired
// }


//const App=()=><h1>Hello stateless</h1>

export default Demo1;