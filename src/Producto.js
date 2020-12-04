import './Producto.css'
import React from 'react'
import { logRoles } from '@testing-library/react';

function Producto({url, nombre, precio}) {
    return (
        <div className='card'>
            <img className='product-img' src={url}></img>
            <a className='product-name' >{nombre}</a>
            <h3 className='price'>Precio: {precio}</h3>
        </div>
    );
}

export default Producto;




