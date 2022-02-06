import React from 'react';

import HomePage from './pages/homepage.component';

import './App.css';
import Directory from './component/directory/directory.component';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Directory />
      </div>
    );
  }
}

export default App;