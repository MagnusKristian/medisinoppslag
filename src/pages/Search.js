import { SearchForm } from '../components/search/SearchForm';
import Results from '../components/Results/Results';
import "./SearchCss.css";
import UserCards from "../components/UserCards/UserCards";
import "../components/UserCards/UserCardsCss.css";
import ResultCards from '../components/Results/ResultCards';
import {ResultComponent} from '../components/Results/ResultComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { AlternateResults } from '../components/Results/AlternateResults';


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

  useEffect(() => {
    console.log("SearchResults in search: "+searchResults);
  },[searchResults]);
  
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

      {/* using resultComponent.. */}
      {/* <ResultComponent searchResults={searchResults}/> */}

      <AlternateResults searchResults={searchResults}/>


        {/* <Results/> */}
      {/* <UserCards/> */}
      {/* <ResultCards/> */}

      </div>
    </div>
  );
}

export default Search;
