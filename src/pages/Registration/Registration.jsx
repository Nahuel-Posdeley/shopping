import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { setRegistration } from '../../reducers/UserRegistration/registrationSlice';

const Registration = () => {
  const [name ,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation,setValidation] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    if(![email,password].includes('')){
      dispatch(setRegistration({
        name: name,
        email: email,
        password: password,
        token: Date.now()
    }))
     swal(
       `¡Registrado!`,
       'Registrado correctamente.',
       'success'
     )
     setName('')
     setEmail('')
     setPassword('')
    }else{
      setValidation(true)
    }
        
} 
  return (
    <div className="section">
    <div className="login">
      <h1>Crear una cuenta</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label className="form-label" type="email">
            Nombre
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            placeholder='Ingrese su nombre'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
        </div>
        <div className="form-group">
          <label className="form-label" type="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder='Ingrese su email'
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
            placeholder='Ingrese su contraseña'
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        {validation && <p style={{color: 'red',fontSize: 12}}>Todos los campos son obligatorios</p>}
        <button
          type="submit"
        >
          Registrarse
        </button>
        <Link className="btn__registration" to='/'>¿Ya tienes una cuenta?</Link>
      </form>
    </div>
  </div>
  )
}

export default Registration;
