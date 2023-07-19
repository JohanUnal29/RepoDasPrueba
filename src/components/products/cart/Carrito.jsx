import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import './Carrito.css';

const Carrito = () => {

    const { carrito, } = useContext(CartContext);

    return (
    
            carrito.map((prod) => (
                <tbody>
                    <tr>
                        <td>{prod.title}</td>
                        <td><img src={prod.thumbnails} alt={prod.title} className="imagen-miniatura" /></td>
                        <td>{prod.cantidad}</td>
                        <td>${prod.price}</td>
                        <td>${prod.price* prod.cantidad}</td>
                    </tr>
                </tbody>
            ))

    )
}

export default Carrito