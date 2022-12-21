import { SearchForm } from '../components/search/SearchComponent';
import Results from '../components/Results/Results';
import "./SearchCss.css";

function Search() {
  return (
    <div className="Search">
      <div className='SearchBox'>
        <SearchForm/>
      </div>
      <div className='ResultBox'>
        <Results/>
      </div>
    </div>
  );
}

export default Search;
