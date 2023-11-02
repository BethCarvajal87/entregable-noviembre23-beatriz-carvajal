import React, { useState } from 'react';

const Card = () => {
    const [nombre, setNombre] = useState('');
    const [mascota, setMascota] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre.length < 3 || mascota.length < 6) {
            alert('Por favor chequea que la información sea correcta');
        } else {
            alert('Hola ' + nombre + ', un gusto saludarte a ti y a ' + mascota);
        }
    };

    return (
        <div className="card-container">
            <h4>Cual es el nombre de tu mascota</h4>
            <form onSubmit={handleSubmit} className="form">
                <label>Nombre:</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    onBlur={(e) => setNombre(e.target.value.trim())}
                />
                <br />
                <label>Nombre de tu mascota:</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Ingrese el nombre de tu mascota"
                    value={mascota}
                    onChange={(e) => setMascota(e.target.value)}
                />
                <br />
                <input type="submit" className="submit-button" />
            </form>
        </div>
    );
};

export default Card;
