import { SearchForm } from '../components/search/SearchComponent';
import Results from '../components/Results/Results';
import "./SearchCss.css";
import UserCards from "../components/UserCards/UserCards";
import "../components/UserCards/UserCardsCss.css";
import ResultCards from '../components/Results/ResultCards';
import {ResultComponent} from '../components/Results/ResultComponent';
import { useState } from 'react';


function Search() {
  const [searchResults, setSearchResults] = useState(
    [{
      "idAsBase64": "idAsBase64",
      "id": "id",
      "navnFormStyrke": "navnFormStyrke",
      "varenavn": "varenavn",
      "atcKode": "atcKode",
      "preparattype": "preparattype",
      "infoType": "infoType",
      "legemiddelMerkevareId": "legemiddelMerkevareId",
      "markedsforingsdato": ["markedsforingsdato"],
      "typeSoknadSlv": "typeSoknadSlv"
    }]
  );

  
  return (
    <div className="Search">
      <div className='SearchBox'>
        {/* <SearchForm/> */}
      </div>

      <br/>
      <hr style={{width:"100%"}}/>
      <br/>
      <SearchForm setSearchResults={setSearchResults}/>

      <div className='ResultBox'>
      <hr/>
        {/* <p>HERE ARE YOUR RESULTS: id:{console.log(searchResults[0].id)}</p> */}
      <br/>
      <ResultComponent searchResults={searchResults}/>



        {/* <Results/> */}
      {/* <UserCards/> */}
      {/* <ResultCards/> */}

      </div>
    </div>
  );
}

export default Search;
