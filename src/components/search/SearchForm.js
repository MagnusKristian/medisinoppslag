import { useEffect, useState } from "react";
import Results from "../Results/Results";
// import "./SearchComponentCss.css";
import { searchApi } from '../../Functions/SearchHelper';



export const SearchForm = (props) => {
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // let searchInfo = {apiKey: "",searchWord:"x",checkbox1:false,checkbox2:false,checkbox3:false,checkbox4:false,resultAmmount:1};
  const [searchValue, setSearchValue] = useState({per: "3",page: "1",apiKey: "",searchWord:"x",checkbox1:false,checkbox2:false,checkbox3:false,checkbox4:false,resultAmmount:1});



  // const [formValue, setFormValue] = useState({
  //   username: "",
  //   password: "",
  // });

  const handleChange = (e)=>{
    // console.log("handleChange.type of thing: "+e.target.type);
    console.log("handleChange: ");

    if(e.target.type == "checkbox"){
      console.log("it is a checkbox...........");
      setSearchValue({[e.target.name]: e.target.checked});
    console.log({[e.target.name]: e.target.checked});

    }else{
    setSearchValue({[e.target.name]: e.target.value});
    console.log({[e.target.name]: e.target.value});
    }

    // setSearchValue({
    //   apiKey: e.target["apiKey"].value,
    //   searchWord: e.target["search1"].value,
    //   checkbox1: e.target["checkbox1"].value,
    //   checkbox2: e.target["checkbox2"].value,
    //   checkbox3: e.target["checkbox3"].value,
    //   checkbox4: e.target["checkbox4"].value,
    //   resultAmmount: e.target["pAmmount"].value,
    // });



    


    // console.log("state.searchvalue.resultammount: "+searchValue["resultAmmount"]);






    // e.preventDefault();
    // console.log("handleChange target&value");

    // console.log(e.target);
    // console.log(e.target.value);

    // const {name,value} = e.target;
    // setFormValue((prevState)=>{
    //   return {
    //     ...prevState,
    //     [name]:value,
    //   };
    // });
  };
  




  const submitSearch = (searchParameters,setSearchValue) => { 
    console.log("Submitting search");
    console.log("searchParameters: "+searchParameters);
    console.log("searchParameters apiKey: "+searchParameters["apiKey"]);
    console.log("searchParameters searchWord: "+searchParameters["searchWord"]);
    console.log("searchParameters checkbox1: "+searchParameters["checkbox1"]);
    console.log("searchParameters checkbox2: "+searchParameters["checkbox2"]);
    console.log("searchParameters checkbox3: "+searchParameters["checkbox3"]);
    console.log("searchParameters checkbox4: "+searchParameters["checkbox4"]);
    console.log("searchParameters resultAmmount: "+searchParameters["resultAmmount"]);

    
    props.setSearchResults(searchApi(searchParameters,setSearchValue));


  }

  



  const handleSubmit = (e) => { 
    e.preventDefault();
    // sortInput(e.target);

    // console.log("handlesubmit.apiKey: "+e.target["apiKey"].value);
    // console.log("handlesubmit.search1: "+e.target["search1"].value);
    // console.log("handlesubmit.checkbox1: "+e.target["checkbox1"].value);
    // console.log("handlesubmit.checkbox1: "+e.target["checkbox2"].value);
    // console.log("handlesubmit.checkbox1: "+e.target["checkbox3"].value);
    // console.log("handlesubmit.checkbox1: "+e.target["checkbox4"].value);
    // console.log("handlesubmit.pAmmount: "+e.target["pAmmount"].value);

    // let values = {
    //   apiKey: e.target["apiKey"].value,
    //   searchWord: e.target["search1"].value,
    //   checkbox1: e.target["checkbox1"].value,
    //   checkbox2: e.target["checkbox2"].value,
    //   checkbox3: e.target["checkbox3"].value,
    //   checkbox4: e.target["checkbox4"].value,
    //   resultAmmount: e.target["pAmmount"].value,
    // };

    setSearchValue({
      apiKey: e.target["apiKey"].value,
      searchWord: e.target["search1"].value,
      checkbox1: e.target["checkbox1"].value,
      checkbox2: e.target["checkbox2"].value,
      checkbox3: e.target["checkbox3"].value,
      checkbox4: e.target["checkbox4"].value,
      resultAmmount: e.target["resultAmmount"].value,
    });
    console.log("state.searchvalue.resultammount: "+searchValue["resultAmmount"])

    submitSearch(searchValue,setSearchValue);
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
            <input type="password" id="apiKey" name="apiKey" placeholder="Enter api Key here" onChange={handleChange} autoFocus></input><br/><br/><br/>
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

            <label htmlFor="resultAmmount">Choose how many results: </label>
            <select id="resultAmmount" name="resultAmmount" onChange={handleChange} required>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            <br/>
            <button type="submit">Search</button>
          </form> 
        </div>
      </div>
      <hr/>
    </>
    
  )
}