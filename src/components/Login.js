import React, {useState} from 'react';
import Forget from './Forget';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e)  => {
        e.preventDefault();

        const newEntry = {username: username, password: password};
        setAllEntry([...allEntry, newEntry]);

        console.log(allEntry);
    }
  return ( 
    <>
      <section class='login' id='login'>
         <div class='head'>
         <h1 class='company'>Welcome</h1>
         </div>
         <p class='msg'>Please Login to have access</p>
         
         <form action="" onSubmit={submitForm}>
         <div>
            <label htmlFor="username">Username</label>
                 <input type="text" placeholder="Username" class="text" name="username" id="username" autoComplete="off"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
            />
         </div>

        <div>
             <label htmlFor="password">Password</label>
                 <input type="password" placeholder="Password" class="password" name="password" id="password" autoComplete="off"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit" class='btnlogin' id='do-login'>Login</button>
        <Forget></Forget>
         </form>
         {/* <footer>Copyright &copy; thepowerhouse.com </footer> */}
       </section>
    </>
  )
}

export default Login