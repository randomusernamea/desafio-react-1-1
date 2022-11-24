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
                         <img id='imgDeportistasPopUp' src={modal.image} alt="imagen" /> 
                            <div id="rest">
                            
                                <p id="popUpNombre">{modal.nombre}</p>
                                <ul>
                                    <li className="popUpStat">Edad: {modal.edad}</li>
                                    <li className="popUpStat">Altura: {modal.altura}</li>
                                    <li className="popUpStat">Peso: {modal.peso}</li>
                                    <li className="popUpStat">Nacionalidad: {modal.nacionalidad}</li>
                                    <li className="popUpStat">Record personal: {modal.record}</li>
                                </ul>
                            </div>
                            <div id="divDesc">
                                <h5> Descripción  </h5>
                                <p>{modal.descripcion}</p>
                            </div>
                        </div>
                        {/* <div className='descripcion'> */}
                            {/* <h5> Descripción  </h5>
                            <p>{modal.descripcion}</p> */}
                        {/* </div>  */}
                        <div className='estadisticas'>
                            <ul id="listaEstadisticas">
                                <li className="listItemEstadisticas">Energia: {modal.estadisticas.energia}</li> 
                                <div className="divStatBarra" style={{marginLeft:`${parseInt(modal.estadisticas.energia)*3.1+50}px`}}></div>
                                <li className="listItemEstadisticas">Fuerza: {modal.estadisticas.fuerza}</li> 
                                <div className="divStatBarra" style={{marginLeft:`${parseInt(modal.estadisticas.fuerza)*3.1+50}px`}}></div>
                                <li className="listItemEstadisticas">Resistencia: {modal.estadisticas.resistencia}</li>
                                <div className="divStatBarra" style={{marginLeft:`${parseInt(modal.estadisticas.resistencia)*3.1+50}px`}}></div>
                                <li className="listItemEstadisticas">Agilidad: {modal.estadisticas.agilidad}</li>
                                <div className="divStatBarra" style={{marginLeft:`${parseInt(modal.estadisticas.agilidad)*3.1+50}px`}}></div>
                                <li className="listItemEstadisticas">Aguante: {modal.estadisticas.aguante}</li>
                                <div className="divStatBarra" style={{marginLeft:`${parseInt(modal.estadisticas.aguante)*3.1+50}px`}}></div>
                                <li className="listItemEstadisticas">Dedicacion: {modal.estadisticas.dedicacion}</li>
                                <div className="divStatBarra" style={{marginLeft:`${parseInt(modal.estadisticas.dedicacion)*3.1+50}px`}}></div>
                                <li className="listItemEstadisticas">Profesionalismo: {modal.estadisticas.profesionalismo}</li>
                                <div className="divStatBarra" style={{marginLeft:`${parseInt(modal.estadisticas.profesionalismo)*3.1+50}px`}}></div>
                            </ul>
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



















