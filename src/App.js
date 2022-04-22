import react, { Component } from 'react';
import './App.scss';
import AboutApp from './components/AboutApp';
import Searcher from './components/Searcher';

class App extends Component {

  constructor() {
    super();

    this.state = {
      testText: "Podtytuł nr 3 (treść dynamiczna)"
    };
  }



  render() {
    return (
      <div className="app-container">

        <h2>Teryt szukajka</h2>

        <AboutApp someText={this.state.testText} />

        <Searcher />

      </div>
    );
  }

}

export default App;
