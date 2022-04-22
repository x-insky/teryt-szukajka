import './Searcher.scss';

  // również start od komponentu funkcyjnego
function Searcher () {

  return (
    <>
      <div className="search-box">
        <label htmlFor="search_me">Zacznij szukać</label>
        <input type="text" name="search_me" id="search_me"/>
        <button name="cancel_search">Wyzeruj</button>
        <button name="accept_search" className="bold">Wyszukaj</button>

      </div>
      <hr />
      <h4>Zaawansowane</h4>
      <></>

    </>
  );
}

export default Searcher;
