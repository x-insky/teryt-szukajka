import react from 'react';
import './Searcher.scss';

  // również start od komponentu funkcyjnego
function Searcher ({ searchValue, isLoadingNow, onStartSearching, onStopSearching }) {

  const handleClickOnStartSearching = ( evt ) => {
    const element = evt.target;
    console.log( element );

      // ZROBIĆ: przejmowanie treści z pola tekstowego po naciśnięciu przycisku

    onStartSearching( "(treść szukana z <Search>)" );
  }

  const handleClickOnStopSearching = () => {
    onStopSearching();
  }


  return (
    <>
      <div className="search-box">
        <label htmlFor="search_me">Zacznij szukać</label>
        <input type="text" name="search_me" id="search_me" disabled={ isLoadingNow ? "disabled" : null } /* value={ searchValue } */ />
        <button name="cancel_search" onClick={ handleClickOnStopSearching } >Wyzeruj</button>
        <button name="accept_search" className="bold" disabled={ isLoadingNow ? "disabled" : null } onClick={ handleClickOnStartSearching } >Wyszukaj</button>
      </div>
      <hr />
      <h4>Zaawansowane</h4>
    </>
  );
}

export default Searcher;
