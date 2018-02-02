import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.setState({name: 'KakaoTocs'});}}>Click</button>
        <h1>Hello React TFS {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
// module.export = App; 이랑 같음
