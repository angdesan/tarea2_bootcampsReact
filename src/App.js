import React, { useState, useRef } from 'react';
import './App.css';
import constantes from './constantes/constantes';
const App = () => {
  
  let dragItem = useRef();
  let dragOverItem = useRef();
  const [list, setList] = useState(constantes.lista);
 
  const dragStart = (e, position) => {
    dragItem.posicion = position;
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.posicion = position;
  };
 /**
  * 
  * @param {*} e evento que genera el drop
  * función que maneja el evento drop realizando una copia de la lista
  * y eliminando el elemento seleccionado y agregandolo en la posicion 
  * donde se encuentre al final del "arrastre"
  */
  const drop = (e) => {
    const copiaListaItem = [...list];
    const dragElement = copiaListaItem[dragItem.posicion];
    copiaListaItem.splice(dragItem.posicion,1);
    copiaListaItem.splice(dragOverItem.posicion,0, dragElement);
    dragItem.posicion = null;
    dragOverItem.posicion = null;
    setList(copiaListaItem);

  };
 
  return (
    <>
    {
    list &&
    list.map((item, index) => (
      <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable> 
          {item}
      </div>
      ))}
    </>
  );
};
export default App;