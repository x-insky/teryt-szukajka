import React, { Component } from 'react';
import './App.scss';
import AboutApp from './components/AboutApp';
import LoadingNotifier from './components/LoadingNotifier';
import Searcher from './components/Searcher';
import SearchSummary from './components/SearchSummary';


class App extends Component {

  constructor() {
    super();

    this.state = {
      testText: "Podtytuł nr 3 (treść dynamiczna)",
      isLoadingNow: false,   // czy trwa zapytanie/ładowanie
      isLoadedSuccesfully: false,   // czy otrzymano oczekiwane wyniki (prawidłowe)
      isLoadedWithError: false,   // czy wystąpił błąd w odpowiedzi
      isResultStage: false,   // czy powienien być jakiś wynik prezentowany (ewentulanie zamiast: wyliczać ze stanu obu przeciwnych efektów zapyatania serwera)

      searchText: "",  // treść pola wyszukiwania
      textFound: ""   // też treść z pola, ale dla znalezionego już dopasowania/wyniku/wysyłanego_zapytania

    };
  }

    // ----- funkcje ogólnego przeznaczenia / general purpose functions -----

  setPageTitle = pageTitle => {
    if ( typeof pageTitle !== "string" ) {
       throw new Error("Tytuł powinien być napisem!");
    }
    document.title = pageTitle;
  }

  simulateAQueryToTheServer = searchText => {
    setTimeout( () => {
      this.setState({
        isLoadingNow: false,
        isLoadedSuccesfully: true,
        isResultStage: true,
        textFound: searchText    // czy ta duplikacja jest celowa, chwilę wcześniej tekst także zgłoszony do wpsiania w stan?!
       })
    }, 1111);
  }

    // ----- obsługa zdarzeń / event handling -----

  handleActivateSearch = ( searchingText ) => {
    console.log("uruchamiam zmianę stanu dla wyszukiwania");
      //  każde ponowione wyszukiwanie nie zdejmuje etapu wyników, które już mogą być prezentowane (WCZEŚNIEJSZE zapytania), ale już z BIEŻĄCĄ treścią!; ewentualnie zmodyfikować na resetujace
    this.setState({
      isLoadingNow: true,
      searchText: searchingText
     });

     this.simulateAQueryToTheServer( searchingText );  // udawana odpowiedź serwera
  }

  handleDeactivateSearch = () => {
    console.log("resetuję zmianę stanu dla wyszukiwania");
    this.setState({
      isLoadingNow: false,
      isLoadedSuccesfully: false,
      isResultStage: false,
      searchText: ""
     });
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

        <Searcher searchValue={ this.state.searchText } isLoadingNow={ this.state.isLoadingNow } onStartSearching={ this.handleActivateSearch } onStopSearching={ this.handleDeactivateSearch } />

        { this.state.isLoadingNow && <LoadingNotifier notificationHeader="Odpytywanie serwera..."/> /* warunkowe wstawianie komponentu, zeleżnie od stanu aplikacji */ }

        { this.state.isLoadedSuccesfully && this.state.isResultStage && <SearchSummary searchValue={ this.state.textFound } /> }

      </div>
    );
  }
}

export default App;
