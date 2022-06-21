import React, { Component } from "react";
import UserContext, { UserConsumer } from "./UserContext";

export default class UserDisplayComponent extends Component {
  static contextType = UserContext;
  render() {
    return (
      <UserConsumer>
        {(props) => {
    
          const {userList,productList} = props;

          return (
            <div>
              <div>
                {userList.map((user) => {
                  return (
                    <div key={user.id}>
                      <h1>Name: {user.name.firstname}</h1>
                      <h2>Email: {user.email}</h2>
                    </div>
                  );
                })}
              </div>
              <h1>--------------------------------------------------------------------</h1>
              <div>
                {productList.map((ele) => {
                  return (
                    <div key={ele.id}>
                      <h1>{ele.title}</h1>
                      <img src={ele.image} alt="image" />
                      <p>{ele.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
