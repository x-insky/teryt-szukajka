import react, { Component } from 'react';
import './App.scss';
import AboutApp from './components/AboutApp';
import LoadingNotifier from './components/LoadingNotifier';
import Searcher from './components/Searcher';


class App extends Component {

  constructor() {
    super();

    this.state = {
      testText: "Podtytuł nr 3 (treść dynamiczna)",
      isLoading: false
    };
  }

    // ----- funkcje ogólnego przeznaczenia / general purpose functions -----

  setPageTitle = pageTitle => {
    if ( typeof pageTitle !== "string" ) {
       throw new Error("Tytuł powinien być napisem!");
    }
    document.title = pageTitle;
  }

    // ----- obsługa zdarzeń / event handling -----

  handleActivateSearch = () => {
    this.setState({ isLoading: true });
  }

  handleDeactivateSearch = () => {
    this.setState({ isLoading: false });
  }


    // ----- metody cyklu życia lifecycle methods -----

  componentDidMount() {
    this.setPageTitle("TERYT Szukajka - wyszukiwanie w rejestrze krajowym"); // ustalenie nowego tytułu dla strony
  }

  render() {
    return (
      <div className="app-container">

        <h2>Teryt szukajka</h2>

        <AboutApp someText={ this.state.testText } />

        <Searcher isLoadingNow={ this.state.isLoading} onStartSearching={ this.handleActivateSearch } onStopSearching={ this.handleDeactivateSearch } />

        { this.state.isLoading && <LoadingNotifier notificationHeader="Odpytywanie serwera..."/> /* warunkowe wstawianie komponentu, zeleżnie od stanu aplikacji */ }

      </div>
    );
  }
}

export default App;
