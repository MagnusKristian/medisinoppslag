import { SearchForm } from '../components/search/SearchForm';
import "./SearchCss.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { AlternateResults } from '../components/Results/AlternateResults';


function Search() {
  const [searchResults, setSearchResults] = useState(
    [{
      "testThing": "TEST-THING",
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
      </div>
      <br/>
      <hr style={{width:"100%"}}/>
      <br/>
      <SearchForm setSearchResults={setSearchResults}/>
      <div className='ResultBox'>
      <hr/>
      <AlternateResults searchResults={searchResults}/>
      </div>
    </div>
  );
}

export default Search;
