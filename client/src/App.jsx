import React from "react";
import Dropdowns from "./components/Dropdowns.jsx";
import Search from "./components/Search.jsx";
import axios from "axios";
import SearchResult from "./components/SearchResult.jsx";
import OneBeer from "./components/OneBeer.jsx";
import SearchBreweries from "./components/SearchBreweries.jsx";
import BreweryResult from "./components/BreweryResult.jsx";
import FavoriteResult from "./components/FavoriteResult.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    this.onOneBeerHandler = this.onOneBeerHandler.bind(this);
    this.onDropdownHandler = this.onDropdownHandler.bind(this);
    this.handleChangeAbv = this.handleChangeAbv.bind(this);
    this.handleChangeBrew = this.handleChangeBrew.bind(this);
    this.onChangeBrewery = this.onChangeBrewery.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.onSubmitBrewery = this.onSubmitBrewery.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.onClickFav = this.onClickFav.bind(this);
    this.onFavDelete = this.onFavDelete.bind(this);

    this.state = {
      searchKey: "",
      searchResult: [],
      oneBeer: {},
      oneBeerClicked: false,
      category: "British Origin Ales",
      ABV: "0,5",
      showBrew: "N",
      searchBrew: "N",
      breweryKey: "",
      location: "N",
      brewResult: [],
      favorite: [],
      favClicked: false
    };
  }

  componentDidMount() {
    axios
      .get(`/favorite`)
      .then(response => {
        this.setState({
          favorite: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    axios
      .get(`/favorite`)
      .then(response => {
        this.setState({
          favorite: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleFavorite(e) {
    console.log(e);
    let obj = {};
    obj.id = e.id;
    obj.name = e.name;
    obj.style = e.style;
    obj.abv = e.abv;
    obj.labels = e.labels;
    axios
      .post("/favorite", obj)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onClickFav() {
    this.setState({
      favClicked: true,
      oneBeerClicked: false
    });
  }

  onFavDelete(e) {
    axios
      .delete("/deleteFav", { data: { id: e.id } })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChangeAbv(event) {
    this.setState({ ABV: event.target.value });
  }

  handleChangeBrew(event) {
    event.target.checked
      ? this.setState({
          showBrew: "Y"
        })
      : this.setState({
          showBrew: "N"
        });
  }

  handleChangeLocation(event) {
    let locBrew;
    event.target.name === "showLoc"
      ? (locBrew = "location")
      : (locBrew = "searchBrew");
    event.target.checked
      ? this.setState({
          [locBrew]: "Y"
        })
      : this.setState({
          [locBrew]: "N"
        });
  }

  onChangeHandler(e) {
    this.setState({
      searchKey: e.target.value
    });
  }

  onChangeBrewery(e) {
    this.setState({
      breweryKey: e.target.value
    });
  }

  onSubmitSearch(e) {
    e.preventDefault();
    let q = this.state.searchKey;
    axios
      .get(`/search/${q}/${this.state.searchBrew}`)
      .then(response => {
        this.setState({
          favClicked: false,
          searchResult: response.data,
          oneBeerClicked: false,
          searchBrew: "N",
          brewResult: []
        });
      })
      .catch(error => {
        console.log(error);
      });
    e.target.reset();
  }

  onSubmitBrewery(e) {
    e.preventDefault();
    axios
      .get(`/breweries/${this.state.breweryKey}/${this.state.location}`)
      .then(response => {
        this.setState({
          favClicked: false,
          brewResult: response.data,
          oneBeerClicked: false,
          location: "N",
          searchResult: []
        });
      })
      .catch(error => {
        console.log(error);
        console.log("we are in the .catch");
      });
    e.target.reset();
  }

  onDropdownHandler(e) {
    e.preventDefault();
    axios
      .get(`/beer/${this.state.ABV}/${this.state.showBrew}`)
      .then(response => {
        this.setState({
          favClicked: false,
          searchResult: response.data,
          oneBeerClicked: false,
          showBrew: "N"
        });
      })
      .catch(error => {
        console.log(error);
        console.log("we are in the .catch");
      });
  }

  onOneBeerHandler(e) {
    let chosen = e;
    this.setState(prevState => {
      return {
        oneBeer: chosen,
        oneBeerClicked: !prevState.oneBeerClicked
      };
    });
  }

  render() {
    return (
      <div>
        <div id="firstPage">
          <div id="header">
            <h1>Beer You,</h1>
            <h4>Find Your Favorite Beers Here</h4>
            <h6 onClick={this.onClickFav} id="favButton">
              Click to See Your Favorite Beers
            </h6>
          </div>
          <div id="searches">
            <Search
              onChangeHandler={this.onChangeHandler}
              onSubmitSearch={this.onSubmitSearch}
              handleSearchBrew={this.handleChangeLocation}
            />
            <Dropdowns
              onDropdownHandler={this.onDropdownHandler}
              handleChangeAbv={this.handleChangeAbv}
              handleChangeBrew={this.handleChangeBrew}
            />
            <SearchBreweries
              onChangeBrewery={this.onChangeBrewery}
              handleChangeLocation={this.handleChangeLocation}
              onSubmitBrewery={this.onSubmitBrewery}
            />
          </div>
        </div>
        {this.state.oneBeerClicked ? (
          <div id="centerOneBeer">
            <OneBeer oneBeer={this.state.oneBeer} />
          </div>
        ) : this.state.favClicked ? (
          <FavoriteResult
            searchResult={this.state.favorite}
            searchKey={this.state.searchKey}
            onOneBeerHandler={this.onOneBeerHandler}
            handleFavorite={this.onFavDelete}
          />
        ) : this.state.searchResult.length ? (
          <SearchResult
            searchResult={this.state.searchResult}
            searchKey={this.state.searchKey}
            onOneBeerHandler={this.onOneBeerHandler}
            handleFavorite={this.handleFavorite}
            favorite={this.state.favorite}
            handleDelete={this.onFavDelete}
          />
        ) : this.state.brewResult.length ? (
          <BreweryResult
            brewResult={this.state.brewResult}
            breweryKey={this.state.breweryKey}
          />
        ) : (
          <div id="imgContainer">
            <img
              src="https://s3.us-east-2.amazonaws.com/yonbundle/cute.gif"
              id="homeImg"
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
