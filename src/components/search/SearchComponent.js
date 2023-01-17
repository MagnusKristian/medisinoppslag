import { useState } from "react";
import Results from "../Results/Results";
// import "./SearchComponentCss.css";


export const SearchForm = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [searchValue, setSearchValue] = useState();


  //const [username, setUsername] = useState();
  //const [password, setPassword] = useState();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e)=>{
    e.preventDefault();
    console.log(e.target.value)

    // const {name,value} = e.target;
    // setFormValue((prevState)=>{
    //   return {
    //     ...prevState,
    //     [name]:value,
    //   };
    // });
  };
  const { username, password } = formValue;

  //this.handleSubmit = this.handleSubmit.bind(this);

  

  // const handleChange = (e) => { 
  //   setUsername(e.target.value);
  //   console.log(e.target.value);
  // }

 

  const handleSubmit = (e) => { 
    e.preventDefault();
    alert('You searched for: ' + e.target[0].value);
    console.log(e.target[0].value);
    console.log(e.target.SearchInput.value+"...");
  }
  return (
    <>
      <div className="SearchPanel">
        <div className="SearchForm">
          <form onSubmit={handleSubmit}>
            {/* <label >Search</label> */}
            <div className="SearchDiv" style={{fontSize:"large"}}>{username} </div>
            {/* <input type="text" id="SearchInput" name="Search" placeholder="Enter Text here" onChange={handleChange}/> */}
            <br/>
            {/* <input type="number"></input>
            <input type="range"></input> */}
            <label htmlFor="search1" >Search with text:</label>
            <input type="search" id="Search1" name="Search1" placeholder="Enter search text" onChange={handleChange} autoFocus></input><br/>
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
            <br/>
            </div>
            <br/>

            
            <label htmlFor="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
            <button>Search</button>
          </form> 
          ........
        </div>
      </div>
    </>
    
  )
}