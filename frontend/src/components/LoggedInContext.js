import React from "react";
import { uriBase, apiVer } from "../config";

const LoggedInContext = React.createContext();

// or you could do it "const loggedInProvider = () => {"

const LoggedInProvider = (props) => {
  let [users, setUsers] = React.useState([]);
  let [loggedIn, setLoggedIn] = React.useState(false);
  let [token, setToken] = React.useState('')

  // toDo
  // function to update password
  

  
  // function to check user
  const checkUser = (userName, password) => {
    let rtnValue = false;
// if user exists then set new password
    fetch(`${uriBase}/${apiVer}/login`, 
    {
      method: "POST",
      headers: {
        "content-Type": "application/json"
    },
      body: JSON.stringify({ userName, password }),
    })
      .then((httpResponse) => {
        if (!httpResponse.ok) {
          throw new Error("Login Error");
        }

        // convert json from endpoint into a js object
        return httpResponse.json()
      })
      .then(response => {

        console.log(Response)
        if (response.hasOwnProperty('authenticated')) {

              setLoggedIn(response.authenticated)

              if (response.authenticated === true) {
                setToken(response.token)
              }
              rtnValue = response.authenticated
        }
      })
      .catch(error => {
        console.log(error.message)
      });

    return rtnValue;
  };


  return (
    <LoggedInContext.Provider
      value={{users, loggedIn, checkUser, setUsers, token}}
    >
      {props.children}
    </LoggedInContext.Provider>
  );
};
const LoggedInConsumer = LoggedInContext.Consumer;
export { LoggedInContext, LoggedInProvider, LoggedInConsumer };
