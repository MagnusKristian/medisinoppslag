import { useState } from "react";
import Results from "../Results/Results";
// import "./SearchComponentCss.css";
import { searchApi } from '../../Functions/SearchHelper';



export const SearchForm = (props) => {
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  let searchInfo = {apiKey: "",searchWord:"x",checkbox1:false,checkbox2:false,checkbox3:false,checkbox4:false,resultAmmount:1};
  const [searchValue, setSearchValue] = useState({apiKey: "",searchWord:"x",checkbox1:false,checkbox2:false,checkbox3:false,checkbox4:false,resultAmmount:1});



  // const [formValue, setFormValue] = useState({
  //   username: "",
  //   password: "",
  // });

  const handleChange = (e)=>{
    e.preventDefault();
    console.log(e.target.value);

    // const {name,value} = e.target;
    // setFormValue((prevState)=>{
    //   return {
    //     ...prevState,
    //     [name]:value,
    //   };
    // });
  };
  // const { username, password } = formValue;

  //this.handleSubmit = this.handleSubmit.bind(this);

  

  // const handleChange = (e) => { 
  //   setUsername(e.target.value);
  //   console.log(e.target.value);
  // }

  // const sortInput = (formInfo) => { 
  //   let lapiKey = formInfo["apiKey"].value;
  //   let lsearchWord = formInfo["searchWord"];
  //   let lcheckbox1 = formInfo["checkbox1"];
  //   let lcheckbox2 = formInfo["checkbox2"];
  //   let lcheckbox3 = formInfo["checkbox3"];
  //   let lcheckbox4 = formInfo["checkbox4"];
  //   let lammount = formInfo["ammount"];
  //   console.log("lapiKey: "+lapiKey.value);

  //   setSearchValue({
  //     apiKey: lapiKey,
  //     searchWord: lsearchWord,
  //     checkbox1: lcheckbox1,
  //     checkbox2: lcheckbox2,
  //     checkbox3: lcheckbox3,
  //     checkbox4: lcheckbox4,
  //     resultAmmount: lammount,
  //   });
  //   console.log("searchValue.apiKey: "+searchValue.apiKey);
  //   console.log("searchValue.searchWord: "+searchValue.searchWord);
  //   console.log("searchValue.checkbox1: "+searchValue.checkbox1);
  //   console.log("searchValue.resultAmmount: "+searchValue.resultAmmount);
  // }





  const submitSearch = (searchParameters) => { 
    console.log("Submitting search");
    console.log("searchParameters: "+searchParameters);
    
    props.setSearchResults(searchApi(searchParameters));


  }





  const handleSubmit = (e) => { 
    e.preventDefault();
    // sortInput(e.target);

    setSearchValue({
      apiKey: e.target["apiKey"].value,
      searchWord: e.target["search1"].value,
      checkbox1: e.target["checkbox1"].value,
      checkbox2: e.target["checkbox2"].value,
      checkbox3: e.target["checkbox3"].value,
      checkbox4: e.target["checkbox4"].value,
      resultAmmount: e.target["ammount"].value,
    });

    submitSearch(searchValue);
  }


  return (
    <>
      <div className="SearchPanel">
        <div className="SearchForm">
          <form onSubmit={handleSubmit}>
            {/* <label >Search</label> */}
            <div className="SearchDiv" style={{fontSize:"large"}}>z </div>
            {/* <input type="text" id="SearchInput" name="Search" placeholder="Enter Text here" onChange={handleChange}/> */}
            <br/>
            {/* <input type="number"></input>
            <input type="range"></input> */}<label htmlFor="apiKey" >Enter api Key here: </label>
            <input type="text" id="apiKey" name="apiKey" placeholder="Enter api Key here" onChange={handleChange} autoFocus></input><br/><br/><br/>
            <label htmlFor="search1" >Search with text: </label>
            <input type="search" id="search1" name="search1" placeholder="Enter search text" onChange={handleChange} autoFocus></input><br/>
            <br/>
            <div className="checkboxContainer">
            <label htmlFor="checkbox1" >checkbox1:</label>
            <input type="checkbox" id="checkbox1" name="checkbox1" onChange={handleChange}></input>
            <br/>
            <label htmlFor="checkbox2" >checkbox2:</label>
            <input type="checkbox" id="checkbox2" name="checkbox2" onChange={handleChange}></input>
            <br/>
            <label htmlFor="checkbox3" >checkbox3:</label>
            <input type="checkbox" id="checkbox3" name="checkbox3" onChange={handleChange}></input>
            <br/>
            <label htmlFor="checkbox4" >checkbox4:</label>
            <input type="checkbox" id="checkbox4" name="checkbox4" onChange={handleChange}></input>
            </div>
            <br/>

            <label htmlFor="ammount">Choose how many results: </label>
            <select id="ammount" name="ammount">
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <br/>
            <button>Search</button>
          </form> 
        </div>
      </div>
      <hr/>
    </>
    
  )
}