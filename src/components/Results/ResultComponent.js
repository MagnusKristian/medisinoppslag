import React, { Component } from "react";

import { searchFirstName } from "../../Functions/SearchHelper";

import { useState } from "react";
// import "./SearchComponentCss.css";


export const ResultComponent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  //const [username, setUsername] = useState();
  //const [password, setPassword] = useState();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  // const handleChange = (e)=>{
  //   const {name,value} = e.target;
  //   setFormValue((prevState)=>{
  //     return {
  //       ...prevState,
  //       [name]:value,
  //     };
  //   });
  // };
  const { username, password } = formValue;

  //this.handleSubmit = this.handleSubmit.bind(this);

  // const signIn = () => { 
  //   setCount1(count1 + 1);
  // }
  

  // const handleChange = (e) => { 
  //   setUsername(e.target.value);
  //   console.log(e.target.value);
  // }
  // const handleSubmit = (e) => { 
  //   e.preventDefault();
  //   alert('You searched for: ' + e.target[0].value);
  //   console.log(e.target[0].value);
  //   console.log(e.target.SearchInput.value+"...");
  // }












  

  let uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // loadData = () => {

    // const MY_KEY = process.env.REACT_APP_API_KEY;

  //   const { per, page, data } = this.state;
  //   const endpoint = `https://randomuser.me/api/?results=${100}&nat=us`;
  //   fetch(endpoint)
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({
  //         data: [...data, ...json.results],
  //         scrolling: false,
  //         total_pages: json.info.results
  //       });
  //     });
  // };



  // loadData = () => {
  //   const endpoint = `https://api-qa.helsedirektoratet.no/antall-innlagte/innlagte/nasjonalt`;
  //   fetch(endpoint)
  //   .then(response => {
  //     console.log(response.status);
  //     console.log(response.text());
  // })
      
  // };

  

 
  let search = (searchWord, data)=> {
    console.log("sup dawg");
    searchFirstName(searchWord, data);
  }

  let handleSubmit = (e) => { 
    e.preventDefault();
    alert('You searched for: ' + e.target[0].value);
    console.log(e.target[0].value);
    console.log(e.target.SearchInput.value+"...");

    console.log("---Searchword? = "+`${e.target[0].value}`+"---");
    this.search(e.target[0].value,this.state.data);
  }

 

  return (
      <>
        <div className="row">
          {/* {this.state.data.map(data => ( */}
            {/* <div className="cardContainer" key={data.id.value}> */}
            <div className="cardContainer">
              <div className="card">
                  <div className="avatar">
                    <img
                      // src={data.picture.large}
                      className="cardImage"
                      alt=""
                    />
                  </div>
                  {/* <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5> */}
                  <p className="card-text">
                    {/* {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)} */}
                    <br />
                    {/* <span className="phone">{data.phone}</span> */}
                  </p>
              </div>
            </div>
          {/* ))} */}
        </div>
        <button
          className="btn"
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
      </>
    );
}