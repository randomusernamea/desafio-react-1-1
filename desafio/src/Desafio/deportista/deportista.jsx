import React from 'react'
    import { useNavigate } from 'react-router-dom'
    import { useState,} from 'react'
    import deportistas from '../main/deportistas'
    import './deportista.css'
    import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Deportista() {
   
// const [deportistacontent, setdeportistaContent] = useState ([deportistas])
let {idDeportista} = useParams ()
console.log('estos son los parametros', idDeportista)



    const deportista = deportistas.find((deportivo) => {
        return deportivo.id == idDeportista;
    })
 


//  useEffect (() => {
//     deportista()
//  }, [idDeportista]);








  return (
    <div>
    
    
   
    <div className="popUpContainer">
                <div className="popUpBody">
                <div className="popUpHeader">
                    <button>x</button>
                </div>
                <div className="popUpContent">
                    {/* {deportistacontent.map((deportista)=>{ */}
                        
                        
                            <card className="popUpCard">
                             <div className='presentacion'>  
                             <img id='imgDeportistasPopUp' src={deportista.image} alt="imagen" /> 
                                <div id="rest">
                                
                                    <p id="popUpNombre">{deportista.nombre}</p>
                                    <ul>
                                        <li className="popUpStat">Edad: {deportista.edad}</li>
                                        <li className="popUpStat">Altura: {deportista.altura}</li>
                                        <li className="popUpStat">Peso: {deportista.peso}</li>
                                        <li className="popUpStat">Nacionalidad: {deportista.nacionalidad}</li>
                                        <li className="popUpStat">Record personal: {deportista.record}</li>
                                    </ul>
                                </div>
                                <div id="divDesc">
                                    <h5> Descripción  </h5>
                                    <p>{deportista.descripcion}</p>
                                </div>
                            </div>
                          
                            <div className='estadisticas'>
                                <ul id="listaEstadisticas">
                                    <li className="listItemEstadisticas">Energia: {deportista.estadisticas.energia}</li> 
                                    <div className="divStatBarra" style={{marginLeft:`${parseInt(deportista.estadisticas.energia)*3.1+50}px`}}></div>
                                    <li className="listItemEstadisticas">Fuerza: {deportista.estadisticas.fuerza}</li> 
                                    <div className="divStatBarra" style={{marginLeft:`${parseInt(deportista.estadisticas.fuerza)*3.1+50}px`}}></div>
                                    <li className="listItemEstadisticas">Resistencia: {deportista.estadisticas.resistencia}</li>
                                    <div className="divStatBarra" style={{marginLeft:`${parseInt(deportista.estadisticas.resistencia)*3.1+50}px`}}></div>
                                    <li className="listItemEstadisticas">Agilidad: {deportista.estadisticas.agilidad}</li>
                                    <div className="divStatBarra" style={{marginLeft:`${parseInt(deportista.estadisticas.agilidad)*3.1+50}px`}}></div>
                                    <li className="listItemEstadisticas">Aguante: {deportista.estadisticas.aguante}</li>
                                    <div className="divStatBarra" style={{marginLeft:`${parseInt(deportista.estadisticas.aguante)*3.1+50}px`}}></div>
                                    <li className="listItemEstadisticas">Dedicacion: {deportista.estadisticas.dedicacion}</li>
                                    <div className="divStatBarra" style={{marginLeft:`${parseInt(deportista.estadisticas.dedicacion)*3.1+50}px`}}></div>
                                    <li className="listItemEstadisticas">Profesionalismo: {deportista.estadisticas.profesionalismo}</li>
                                    <div className="divStatBarra" style={{marginLeft:`${parseInt(deportista.estadisticas.profesionalismo)*3.1+50}px`}}></div>
                                </ul>
                            </div>
                            </card>
                        
                    {/* })} */}
                </div>
                </div>
              
    
     
            </div> 

            </div>
            )}
 

export default Deportista