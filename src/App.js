import React, { Component } from 'react';
import './App.scss';
import AboutApp from './components/AboutApp';
import LoadingNotifier from './components/LoadingNotifier';
import Searcher from './components/Searcher';
import SearchSummary from './components/SearchSummary';
import Notifier from './components/Notifier';


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
    const randomSecond = Math.floor( Math.random() * 5000 ) + 1;
    console.log( randomSecond );
    setTimeout( () => {
      this.setState({
        isLoadingNow: false,
        isLoadedSuccesfully: true,
        isResultStage: true,
        textFound: searchText    // czy ta duplikacja jest celowa, chwilę wcześniej tekst także zgłoszony do wpsiania w stan?!
       })
    }, 1111 + randomSecond);
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
      <>
        <div className="app-container">

          <div className="main-app-title">
            <h2>Teryt szukajka</h2>
          </div>

          <div>{process.env.SUPER_SECRET_TEXT}</div>  {/* test tekstu zadziała po prawidłowym skonfigurowaniu aplikacji do odczytania zmiennej środowiskowej */}

          { process.env.REACT_APP_ALMOST_SUPER_SECRET_TEXT && <Notifier notificationText={`${process.env.REACT_APP_ALMOST_SUPER_SECRET_TEXT}`}></Notifier> } {/* warunkowe wyświetlanie komponnetu, jeśli istnieje zmienna środowiskowa */}

          <AboutApp someText={ this.state.testText } />

          <Searcher searchValue={ this.state.searchText } isLoadingNow={ this.state.isLoadingNow } onStartSearching={ this.handleActivateSearch } onStopSearching={ this.handleDeactivateSearch } />

          { this.state.isLoadedSuccesfully && this.state.isResultStage && <SearchSummary searchValue={ this.state.textFound } /> }

        </div>

        { this.state.isLoadingNow && <LoadingNotifier notificationHeader="Odpytywanie serwera..."/> /* warunkowe wstawianie komponentu, zeleżnie od stanu aplikacji */ }

      </>
    );
  }
}

export default App;
