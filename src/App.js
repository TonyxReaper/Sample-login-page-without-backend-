import React , { useState } from "react"; 
import  ReactDOM  from "react-dom";

import "./styles.css";

function App() {
   

  const[ errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

//User Login sambple without backend    
const database = [{username:"user1",password:"pass1"},{username:"user2",password:"pass2"}];

const errors = {uname:"invalid username",pass:"invalid password"};

const handleSubmit = (event) => {
  
  //prevent from page loading 
  event.preventDefault();

  var {uname,pass} = document.forms[0];

  //find user login info 
  const userData = database.find((user)=> user.username === uname.value);

  // compare user info  
  if( userData){
    if(userData.password !== pass.value){
      //invalid passowrd 
      setErrorMessages({name:"pass",message: errors.pass})
    } else {
      setIsSubmitted(true);
    }
  } else {
    //username not found 
    setErrorMessages({name:"uname",message:errors.uname});
  }

};
//JSX code for error MEssage
const renderErrorMessage = (name) => name === errorMessages.name && ( <div className="error">{errorMessages.message}</div>);


// JSX code for Login Form  

const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username</label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password</label>
        <input type="text" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit"/>
      </div>

    </form>
  </div>

);

return(
  <div className="app">
    <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div> User is successfully logged in</div> : renderForm }
    </div>
  </div>

);


}
export default App;