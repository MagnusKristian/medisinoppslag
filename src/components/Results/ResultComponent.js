import React, { Component } from "react";

import { searchFirstName } from "../../Functions/SearchHelper";

import { useState } from "react";
// import "./SearchComponentCss.css";
import Collapsable from "../CollapsableDiv";
import HardCodeCollapsable from "../HardCodeCollapsableDiv";


export const ResultComponent = (props) => {
 
  // const [formValue, setFormValue] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (e)=>{
  //   const {name,value} = e.target;
  //   setFormValue((prevState)=>{
  //     return {
  //       ...prevState,
  //       [name]:value,
  //     };
  //   });
  // };
  // const { username, password } = formValue;

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
      <div className="resultsContainer" style={{border: "1px solid black", width: "100%"}}>
        {props.searchResults.map(data => (
          <div className="card" key={data.id} style={{border: "1px solid black"}}>
            <strong>{data.varenavn}</strong>
            <hr/>
            {/* <Collapsable label="Vis mer" className={"classname"} text={"info"} value={"valueinfo"}/> */}

            {/* <Collapsable className={"classname"} infoText={"varenavn"} infoValue={data.varenavn}/> */}
            <HardCodeCollapsable data={data}/>
            {/* <div className="idAsBase64">idAsBase64: {data.idAsBase64}</div>
            <div className="id">id: {data.id}</div>
            <div className="navnFormStyrke">navnFormStyrke: {data.navnFormStyrke}</div>
            <div className="varenavn">varenavn: {data.varenavn}</div>
            <div className="atcKode">atcKode: {data.atcKode}</div>
            <div className="preparattype">preparattype: {data.preparattype}</div>
            <div className="infoType">infoType: {data.infoType}</div>
            <div className="legemiddelMerkevareId">legemiddelMerkevareId: {data.legemiddelMerkevareId}</div>
            <div className="markedsforingsdato">markedsforingsdato: {data.markedsforingsdato}</div>
            <div className="typeSoknadSlv">typeSoknadSlv: {data.typeSoknadSlv}</div> */}
              
          </div>
        ))}
      </div>
    </>
  );
}