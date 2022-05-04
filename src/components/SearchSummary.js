import './SearchSummary.scss';

  // wstępnie można zacząc od komponentu funkcyjnego
function SearchSummary ({ searchValue="nic" }) {

  return (
    <div className="search-summary">
      <h3>Dla zapytania o <span>{ searchValue }</span> znaleziono:</h3>
      <div className="summary-box">
        <p>...1...</p>
        <p>...2...</p>
        <p>...3...</p>
        <p>te ewentualne wyniki będą interaktywnymi subkomponentami</p>
      </div>
    </div>
  );
}

export default SearchSummary;
