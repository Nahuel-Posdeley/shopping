import Axios  from "axios";
import React , { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from '../../reducers/User/userSlice';
import './style.css';

const Index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data;
            const userToLog = users.find(user => user.email === email && user.username === password)
            console.log(userToLog)
                if(userToLog !== undefined){
                    console.log('Inicio')
                    dispatch(setUser({
                        email: userToLog.email,
                        name: userToLog.name,
                        fullName: userToLog.username,
                        token: Date.now()
                    }))
                    navigate('/home')
                }else{
                    console.log('incorrecto')
                }
            }
        )
    } 

  return (
    <div className="section">
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" type="email">
            Email Address
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>

        <div className="form-group">
          <label className="form-label" type="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
  )
}

export default Index