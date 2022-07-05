import axios from "axios";

import React, { Component } from "react";
import { connect } from "react-redux";
const API_FOR_USER = "https://jsonplaceholder.typicode.com/users";

const init = {
  loading: false,
  data: [],
  error: "",
};

//action types
const IS_LOADING = "IS_LOADING ";
const IS_DATA = "IS_DATA";
const IS_ERROR = "IS_ERROR";

//action creator

const getUserData = () => (dispatch) => {
  //first we have to show loading until data is fetch
  dispatch({ type: IS_LOADING });

  axios
    .get(API_FOR_USER)

    .then((res) => {
      // console.log('res:', res)
      const data = res.data;
      console.log('data:', data)
      
      dispatch({ type: IS_DATA, payload: data });
    })
    .catch((err) => {
      dispatch({
        type: IS_ERROR,
        payload: err.message || "Something is broke",
      });
    });
};

//reducer

export const thunkReducer = (state = init, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, loading: true };
    case IS_DATA:
      return { ...state, data: action.payload, loading: false, error: "" };
    case IS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

class ReduxThunkEx extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    if (this.props.loading) {
      return <div>Loading</div>;
    }

    if (this.props.error) {
      return <div style={{ color: "red" }}>ERROR: {this.props.error}</div>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Active?</th>
            <th>Posts</th>
            <th>Messages</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.active ? "Yes" : "No"}</td>
              <td>{u.website}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  getUserData,
  //   console.log('getUserData:', getUserData)
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunkEx);
