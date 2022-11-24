import React from 'react'
import { useState, useEffect } from 'react'
import deportistas from './deportistas'
import './main.css'

function MainComp() {
  const[modalcontent, setModalContent] = useState ([])
  const[modaltoggle, setModalToggle] = useState (false)
  const[personas, setPersonas] = useState(deportistas)
  const[search, setSearch] = useState ('')
  const[button, setButton] = useState ('')





  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

 






  const onChangeCard = () => {
    
    const resultado = deportistas.filter((deportista)=>{
        return deportista.nombre.toLowerCase().includes(search.toLowerCase())
        })
    setPersonas(resultado);
}
    


       

  const changeContent = (deportista) => {
     setModalContent([deportista]); 
     setModalToggle(!modaltoggle)
  }


  return (



     <>
    <div className='buscador'> 
         <label htmlFor="search"></label>
        <input className='searching' value = {search} onChange={onChangeSearch} type="text" />
        <button className='botonsito'  onClick={onChangeCard}>BUSCAR</button>
    </div>    
    <div className='mainContainer'> 
         
       <div className='contentContainer'>
        {personas.map((deportista) => {
                return(
                    <div className="content_card visible"> 
                        <div className='nameImgEspecialidad'>
                        <h1>{deportista.nombre}</h1>
                        <img className='imgDeportistas' src={deportista.image} alt="imagen" />
                        <h1>{deportista.especialidad}</h1>
                        </div>
                        <div className='contenedorButton'>
                        <button className='buttonVerMas' onClick={()=> changeContent(deportista) }>VER MAS</button>
                        </div>
                    </div>
                );
            })
        }
       </div>
        {modaltoggle && ( <div className="popUpContainer">
            <div className="popUpBody">
            <div className="popUpHeader">
                <button onClick={changeContent}>x</button>
            </div>
            <div className="popUpContent">
                {modalcontent.map((modal)=>{
                    
                    return(
                        <card className="popUpCard"> 
                         <div className='presentacion'>
                        <p>{modal.nombre}</p>
                        <p>Edad: {modal.edad}</p>
                        <p>Altura: {modal.altura}</p>
                        <p>Peso: {modal.peso}</p>
                        <p>Nacionalidad: {modal.nacionalidad}</p>
                        <p>Record personal: {modal.record}</p>
                        <h5> Descripción  </h5>
                            <p>{modal.descripcion}</p>
                        </div>
                        {/* <div className='descripcion'> */}
                            {/* <h5> Descripción  </h5>
                            <p>{modal.descripcion}</p> */}
                        {/* </div>  */}
                        <div className='estadisticas'>
                            <p>Energia: {modal.estadisticas.energia}</p> <br />

                            <p>Fuerza: {modal.estadisticas.fuerza}</p> <br />
                            <p>Resistencia: {modal.estadisticas.resistencia}</p><br />
                            <p>Agilidad: {modal.estadisticas.agilidad}</p><br />
                            <p>Aguante: {modal.estadisticas.aguante}</p><br />
                            <p>Dedicacion: {modal.estadisticas.dedicacion}</p><br />
                            <p>Profesionalismo: {modal.estadisticas.profesionalismo}</p> 
                        </div>
                        </card>
                    )
                })}
            </div>
            </div>
          


        </div>)}





    </div>
  
 
</>
 )
} 
    


export default MainComp



















