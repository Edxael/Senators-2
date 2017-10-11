import React from 'react';

class Template extends React.Component {
  render() {
    const myStyle = { border: "2px solid black", padding: "7px" }
    return(
      <div>
        <div style={myStyle}>
          <div><strong>Name: </strong>{this.props.info.name}</div>
          <div><strong>Party: </strong>{this.props.info.party}</div>
          <div><strong>Birthday: </strong>{this.props.info.bday}</div>
        </div>
        <br/>
      </div>
    )
  }
}

export default Template;
