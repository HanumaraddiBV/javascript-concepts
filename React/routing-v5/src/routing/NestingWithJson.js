import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import users from "./users";
export default function NestingWithJson() {
  return (
    <div>
      <h1>Top level router with nesting</h1>
      <ul>
        {users.map((user, ind) => {
          return (
            <li key={ind}>
              <Link to={`/user/${user.name}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
      <Route path="/user/:userName" component={UserPage} />
    </div>
  );
}

class UserPage extends Component {
  render() {
    const { userName } = this.props.match.params;
    const { url, path } = this.props.match;
    const user = users.find(({ name }) => name == userName);
    return (
      <div>
        <div>
          User Name: <strong>{user.name}</strong>
          <p>{user.description}</p>
        </div>
        <hr></hr>
        <div>
          <ul>
            {user.tabs.map((tab, ind) => {
              return (
                <li key={ind}>
                  <Link to={`${url}/tab/${tab.name}`}>{tab.name}</Link>
                </li>
              );
            })}
          </ul>
          <Route path={`${path}/tab/:tabName`} component={TabPage} />
        </div>
      </div>
    );
  }
}

class TabPage extends Component {
  render() {
    console.log(this.props);
    const { userName, tabName } = this.props.match.params;
    const tab = users
      .find(({ name }) => name == userName)
      .tabs.find(({ name }) => name == tabName);

    console.log("tab.content:", tab.content);
    return (
      <div>
        Tab Name: <strong>{tab.name}</strong>
        <h6>Tab content: </h6>
        <ul>
          {Object.keys(tab.content).map((key, index) => {
            return (
              <li key={index}>
                <span>{key} : </span>
                <strong>{tab.content[key]}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
