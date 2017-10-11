import React from 'react';
import ReactDOM from 'react-dom';
import Politician from './comps/Sen.jsx';

const GatherComp = () => {
  return (
    <div>
      <h1>U.S. Senators by Party:</h1>
      <Politician />
    </div>
  )
}

ReactDOM.render(<GatherComp />, document.getElementById("cat"));
