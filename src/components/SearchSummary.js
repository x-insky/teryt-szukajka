import './SearchSummary.scss';

  // wstępnie można zacząc od komponentu funkcyjnego
function SearchSummary ({ searchValue="nic" }) {

  return (
    <div className="search-summary">
      <h3>{ searchValue }</h3>
    </div>
  );
}

export default SearchSummary;
