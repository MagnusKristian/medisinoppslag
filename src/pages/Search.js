import { SearchForm } from '../components/search/SearchComponent';
import Results from '../components/Results/Results';
import "./SearchCss.css";

import UserCards from "../components/UserCards/UserCards";
import "../components/UserCards/UserCardsCss.css";

import ResultCards from '../components/Results/ResultCards';



function Search() {
  return (
    <div className="Search">
      <div className='SearchBox'>
        <SearchForm/>
      </div>

      <br/>
      <hr style={{width:"100%"}}/>
      <br/>

      <div className='ResultBox'>
        HERE ARE YOUR RESULTS: 
      <br/>

        {/* <Results/> */}
      <UserCards/>
      {/* <ResultCards/> */}

      </div>
    </div>
  );
}

export default Search;
