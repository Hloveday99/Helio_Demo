import React from 'react';
import {Link} from 'react-router-dom'
import { LoggedInContext} from "./LoggedInContext"
 
function Home(props) {

    let {users, loggedIn} = React.useContext(LoggedInContext)

    const isloggedIn = () => {
        
        if (loggedIn) {
            return (<h3>Logged In</h3>)
        } else {
            return (<h3>Not Logged In</h3>)
        }
    }
    return (
        <div>
            {
                users.map(user => {
                    return <li key={user.username}>{user.username}</li>
                })
            }
            <br></br>
            <Link to="signup">Sign Up</Link>
            <br></br>
            <Link to="login">Login</Link>
            <br></br>
            <Link to="Forgotpw">Forgot Password</Link>
            <br></br>
            <Link to="admin">Edit Users</Link>
            {/* terniary statement */}
            {isloggedIn()}

        </div>
    );
}

 
export default Home;