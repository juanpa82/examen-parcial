import React from 'react'
import {useState} from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [animalFavorito, setAnimalFavorito] = useState("");
  const [entries, setEntries] = useState([]);

  const handleNombreChange = (event) => setNombre(event.target.value);
  const handleAnimalFavoritoChange = (event) => setAnimalFavorito(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre === "" || animalFavorito === "") {
      alert("Por favor, rellene todos los campos.");
    } else {
        if(nombre.length >= 3 && animalFavorito.length >= 6){
          setEntries([...entries, { nombre, animalFavorito }]);
          setNombre("");
          setAnimalFavorito("");
        } else
          alert("por favor chequea que la informacion sea correcta")
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={handleNombreChange} />
        </label>
        <label>
          Animal favorito:
          <input type="text" value={animalFavorito} onChange={handleAnimalFavoritoChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Animal Favorito</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.nombre}</td>
              <td>{entry.animalFavorito}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    
    )
}

export default Formulario