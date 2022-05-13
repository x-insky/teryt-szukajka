import React, { Component, createRef } from 'react';
import './Searcher.scss';
import Notifier from './Notifier';

class Searcher extends Component {

    // dlaczego w takim miejscu inicjalizacja stanu komponentu działa, a w konstruktorze lub z "this." gdziekolwiek indziej aplikacja się wysypuje, przecież to nielogiczne?!
  state = { isEmptySearchField: false };

  constructor( props ) {
    super( props );

      // tu najpierw tworzymy nowe refy/odwołania do elementów DOMu dla treści formularzowych
    this.searchTextInput = createRef();   // nazwy zmiennych oczywiście dowolne, ale zachowano znaczeniowe mapowanie
    this.searchResetBtn = createRef();    // te odwołania do guzików średnio potrzebne, albo się do nich odwoływać, albo w renderze warunkowo atrybuty ustwiać/zerować
    this.searchSubmitBtn = createRef();
  }

  // componentDidMount () {
  //   this.setState({ isEmptySearchField: false });
  // }

  handleClickOnStartSearching = () => { // parametr 'event' niepotrzebny, wydobycie wartości z sąsiednego elementu interaktywanego poprzez połączenie z atrybutem 'ref'
    const { onStartSearching } = this.props;
      // przejmowanie treści z pola tekstowego po naciśnięciu przycisku WYŚLIJ
    let inputString = this.searchTextInput.current.value;   // jeszcze odwołanie do pośrednego elementu .CURRENT, w którym dopiero jest .VALUE jak w elemencie interaktywnym formularza

    if ( inputString.length > 0 ) {   // czy tekst zapytaina jest niepusty?
      inputString = inputString.trim();   // przycięcie z niepotrzebnych sapcji i inncyh znaków (podobno niebezpieczne znaki HTMLa React nadal sam usuwa w locie)
      this.searchTextInput.current.value = inputString; // dla klarowności przycięto w osobnej intrukcji przypisania; dłuższy zapis dwa wiersze wyżej średnio czytelny
      this.setState({ isEmptySearchField: false }); // zerowanie komunikatu o błędzie, jeśli przesłano niepusty tekst wyszukiwania

      onStartSearching( inputString );  // wywołanie metody, przesłanej do komponentu jako PROPS
    }
    else {
      console.log("zbyt krótki tekst, ma tylko", inputString.length, "bo to tekst", "'", inputString, "'");
      this.setState({ isEmptySearchField: true });
    }
  }

  handleClickOnStopSearching = () => {
    const { onStopSearching } = this.props;

    this.searchTextInput.current.value = "";  // odwołanie się do REFa w komponencie i zerowanie zawartości, bo wyzerowany stan w App nie zeruje zawwartosci tego pola

    onStopSearching();  // metoda przekazana jako props
  }


  render() {
    const { searchValue, isLoadingNow } = this.props;

    return (
      <div className="searcher">
        <div className="search-box">
          <label htmlFor="search_me">Zacznij szukać</label>
          <input type="text" name="search_me" id="search_me" disabled={ isLoadingNow ? "disabled" : null } ref={ this.searchTextInput } defaultValue={ searchValue } />
          <button name="cancel_search" ref={ this.searchResetBtn } onClick={ this.handleClickOnStopSearching } >Wyzeruj</button>
          <button name="accept_search" className="bold" disabled={ isLoadingNow ? "disabled" : null } ref={ this.searchSubmitBtn } onClick={ this.handleClickOnStartSearching } >Wyszukaj</button>
        </div>
        { this.state.isEmptySearchField && (  // jeśli jest puste pole tekstowe to wyświetl komunikat
            <Notifier notificationText="Nie określono zapytania (zbyt krótki tekst)"/>
        )}
        <hr />
        <h4>Wyszukiwanie zaawansowane (gdzieś tutaj podobno rozwijamy menu wyszukiwania)</h4>
      </div>
    );
  }
}

export default Searcher;
