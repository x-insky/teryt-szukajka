import React, { Component, createRef } from 'react';
import './Searcher.scss';

class Searcher extends Component {

  constructor( props ) {
    super( props );

      // tu najpierw tworzymy nowe refy/odwołania do elementów DOMu dla treści formularzowych
    this.searchTextInput = createRef();   // nazwy zmiennych oczywiście dowolne, ale zachowano znaczeniowe mapowanie
    this.searchResetBtn = createRef();
    this.searchSubmitBtn = createRef();
  }

  handleClickOnStartSearching = () => { // parametr 'event' niepotrzebny, wydobycie wartości z sąsiednego elementu interaktywanego poprzez połączenie z atrybutem 'ref'
    const { onStartSearching } = this.props;
      // przejmowanie treści z pola tekstowego po naciśnięciu przycisku WYŚLIJ
    const inputString = this.searchTextInput.current.value;   // jeszcze odwołanie do pośrednego elementu .CURRENT, w którym dopiero jest .VALUE jak w elemencie interaktywnym formularza

    onStartSearching( inputString );  // wywołanie metody, przesłanej do komponentu jako PROPS
  }

  handleClickOnStopSearching = () => {
    const { onStopSearching } = this.props;
    onStopSearching();
  }


  render() {
    const { searchValue, isLoadingNow } = this.props;

    return (
      <>
        <div className="search-box">
          <label htmlFor="search_me">Zacznij szukać</label>
          <input type="text" name="search_me" id="search_me" disabled={ isLoadingNow ? "disabled" : null } ref={ this.searchTextInput } /* value={ searchValue } */ />
          <button name="cancel_search" ref={ this.searchResetBtn } onClick={ this.handleClickOnStopSearching } >Wyzeruj</button>
          <button name="accept_search" className="bold" disabled={ isLoadingNow ? "disabled" : null } ref={ this.searchSubmitBtn } onClick={ this.handleClickOnStartSearching } >Wyszukaj</button>
        </div>
        <hr />
        <h4>Zaawansowane</h4>
      </>
    );
  }
}

export default Searcher;
