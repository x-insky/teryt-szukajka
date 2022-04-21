import './Searcher.css';

  // również start od komponentu funkcyjnego
function Searcher () {

  return (
    <div className="search-box">
      <label htmlFor="search_me">Zacznij szukać</label>
      <input type="text" name="search_me" />
      <button name="accept_search">Wyszukaj</button>
      <button name="cancel_search">Wyzeruj</button>
    </div>
  );
}

export default Searcher;