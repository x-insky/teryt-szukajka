import react from 'react';
import './Searcher.scss';

  // również start od komponentu funkcyjnego
function Searcher ({ isLoadingNow, onStartSearching, onStopSearching }) {

  return (
    <>
      <div className="search-box">
        <label htmlFor="search_me">Zacznij szukać</label>
        <input type="text" name="search_me" id="search_me" disabled={ isLoadingNow ? "disabled" : null } />
        <button name="cancel_search" onClick={ onStopSearching } >Wyzeruj</button>
        <button name="accept_search" className="bold" disabled={ isLoadingNow ? "disabled" : null } onClick={ onStartSearching } >Wyszukaj</button>
      </div>
      <hr />
      <h4>Zaawansowane</h4>
    </>
  );
}

export default Searcher;
