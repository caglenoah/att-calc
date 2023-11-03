import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import "../css/NewQuery.css";
// import Map from "./Map";

class NewQuery extends Component {
  state = {
    open: false,
    lat: "",
    lng: "",
    Dish_Size: "",
    Frequency: "",
    Elevation_Angle: "",
    Percent_Availability: "",
    Antenna_Efficiency: "",
  };
  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handldeSubmit = (e) => {
    e.prevendDefault();
    const payload = { ...this.State };
    // this.props.userInput.length + 1;
    // delete payload.open
    // this.props.NewQuery(payload)
    // this.setState({open : false})
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        open: false,
        lat: "",
        lng: "",
        Dish_Size: "",
        Frequency: "",
        Elevation_Angle: "",
        Percent_Availability: "",
        Antenna_Efficiency: "",
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>NewQuery</h1>
        </div>
        <div className="map_container">
          This is a Map! cant you tell?{/* <Map /> */}
        </div>
        <div className="textField_container">
          <form onSubmit={this.hanldeSubmit}>
            <TextField
              id="lat-lng"
              name="lat-lng"
              label="lat-lng"
              placeholder="lng"
              value={this.state.description}
              onChage={this.handleTextChange}
              required
            />

            <TextField
              id="lat-lng"
              placeholder="lat"
              value={this.state.description}
              onChange={this.handleTextChange}
              required
            />
            <TextField
              id="Dish_Size"
              placeholder="Dish_Size"
              value={this.state.Dish_Size}
              onChange={this.handleTextChange}
              required
            />
            <TextField
              id="Frequency"
              placeholder="Frequency"
              value={this.state.Frequency}
              onChange={this.handleTextChange}
              required
            />
            <TextField
              id="Elevation_Angle"
              placeholder="Elevation_Angle"
              value={this.state.Elevation_Angle}
              onChange={this.handleTextChange}
              required
            />
            <TextField
              id="Percent_Availability"
              placeholder="Percent_Availability"
              value={this.state.Percent_Availability}
              onchange={this.handleTextChange}
              required
            />
            <TextField
              id="Antenna_Efficiency"
              placeholder="Antenna_Efficiency"
              value={this.state.Antenna_Efficiency}
              onChange={this.habdleTextChange}
              required
            />
            <Button
              variant="contained"
              className="sub_newQuery"
              onClick={this.toggleDialog}
            >
              submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewQuery;
