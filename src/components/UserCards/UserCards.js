import React, { Component } from "react";
import "./UserCardsCss.css";
import { one } from "../../Functions/SearchHelper";
import { two } from "../../Functions/SearchHelper";

import { searchFirstName } from "../../Functions/SearchHelper";

import { SearchForm } from "../search/SearchComponent";



class UserCards extends Component {
  state = {
    data: [],
    per: 9,
    page: 1,
    total_pages: null
  };

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };



  // loadData = () => {
  //   const endpoint = `https://api-qa.helsedirektoratet.no/antall-innlagte/innlagte/nasjonalt`;
  //   fetch(endpoint)
  //   .then(response => {
  //     console.log(response.status);
  //     console.log(response.text());
  // })
      
  // };

  
  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }
  logData() {
    console.log("Logging data:");
    console.log(this.state.data);
    console.log("Data logged.");
  
    // this.loadData();
  }
  search(searchWord, data) {
    console.log("sup dawg");
    searchFirstName(searchWord, data);
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    alert('You searched for: ' + e.target[0].value);
    console.log(e.target[0].value);
    console.log(e.target.SearchInput.value+"...");

    console.log("---Searchword? = "+`${e.target[0].value}`+"---");
    this.search(e.target[0].value,this.state.data);
  }

  render() {
    return (
      <>
      <button
          onClick={e => {
            this.logData();
          }}
        >
          Log Data
        </button>

          {/* <SearchForm/> */}
          <form onSubmit={this.handleSubmit}>
            <label >Search</label>
            <div className="SearchDiv" style={{fontSize:"large"}}> </div>
            <input type="text" id="SearchInput" name="Search" placeholder="Enter Text here" />
            <button>Search</button>
          </form> 

        {/* <button
          onClick={e => {
            this.search(this.state.data);
          }}
        >
          Search first name
        </button> */}

        <div className="row">
          {this.state.data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
      </>
    );
  }
}

export default UserCards;
