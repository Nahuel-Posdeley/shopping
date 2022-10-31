import React from 'react'
import { FcSearch } from 'react-icons/fc';
import './style.css'
const ErrSearch = () => {
  return (
    <div className='container__err__search'>
      <p>Ups... no encontramos nada para esta búsqueda :(</p>
      <FcSearch size={130} />  
    </div>
  )
}

export default ErrSearch
