import React , { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { setUser } from '../../reducers/User/userSlice';
import './style.css';

const Index = ({
  setStateLogin,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation,setValidation] = useState(false)
    const { dataRegistration } = useSelector(state => state.registration)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();

            const userToLog = dataRegistration.find(user => user.email === email && user.password === password)
            console.log(userToLog)
                if(userToLog !== undefined){
                    console.log('Inicio')
                    dispatch(setUser({
                        name: userToLog.name,
                        email: userToLog.email,
                        password: userToLog.password,
                        token: Date.now()
                    }))
                    navigate('/home')
                    swal(
                      `¡Bienvenido(a) ${userToLog.name}!`,
                      'Sesión iniciada correctamente.',
                      'success'
                    )
                    setStateLogin(true)
                }else{
                  setValidation(true)
                    setStateLogin(false)
                }        
    } 

  return (
    <div className="section">
    <div className="login">
      <h1>Iniciar sesión</h1>
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
            Contraseña
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          {validation && <p style={{color: 'red',fontSize: 12}}>Correo electronico o contraseña que ingresaste no son validados</p>}
        </div>
        <button
          type="submit"
        >
          Iniciar sesion
        </button>
        <Link className="btn__registration" to='/registration'>Registrarse</Link>
      </form>
    </div>
  </div>
  )
}

export default Index