import { useState } from "react";
import Results from "../Results/Results";
import "./SearchComponentCss.css";


export const SearchForm = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  //const [username, setUsername] = useState();
  //const [password, setPassword] = useState();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormValue((prevState)=>{
      return {
        ...prevState,
        [name]:value,
      };
    });
  };
  const { username, password } = formValue;

  //this.handleSubmit = this.handleSubmit.bind(this);

  const signIn = () => { 
    setCount1(count1 + 1);
  }
  

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
            <label >Search</label>
            <div className="SearchDiv" style={{fontSize:"large"}}>{username} </div>
            <input type="text" id="SearchInput" name="Search" placeholder="Enter Text here" onChange={handleChange}/>
            <button>Search</button>
          </form> 
          asdasd4t34t4
        </div>
      </div>
    </>
    
  )
}