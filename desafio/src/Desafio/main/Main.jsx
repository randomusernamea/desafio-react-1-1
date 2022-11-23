import React from 'react'
import { useState, useEffect } from 'react'
import deportistas from './deportistas'
import './main.css'

function MainComp() {
  const[modalcontent, setModalContent] = useState ([])
  const[modaltoggle, setModalToggle] = useState (false)
//   const[search, setSearch] = useState ('')
//   const[button, setButton] = useState ('')

  
  const changeContent = (deportista) => {
     setModalContent([deportista]); 
     setModalToggle(!modaltoggle)
  }


  return (

    
    <div className='mainContainer'> 
         {/* <label htmlFor="search"></label>
        <input onChange={onChangeSearch} type="text" />
        <button onClick={onChangeCard}>BUSCAR</button> */}
       <div className='contentContainer'>
        {deportistas.map((deportista) => {
                return(
                    <div className="content_card">
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
                        </div>
                        <div className='descripcion'>
                            <h5> Descripción  </h5>
                            <p>{modal.descripcion}</p>
                        </div> 
                        <div className='estadisticas'>
                            {/* <p>{modal.estadisticas[0]}</p> */}
                            {/* <p>{modal.energia}</p>
                            <p>{modal.fuerza}</p>
                            <p>{modal.resistencia}</p>
                            <p>{modal.agilidad}</p>
                            <p>{modal.aguante}</p>
                            <p>{modal. dedicacion}</p>
                            <p>{modal.profesionalismo}</p> */}
                        </div>
                        </card>
                    )
                })}
            </div>
            </div>
          


        </div>)}





    </div>
    
  )
}

export default MainComp



















// const [buscar, setBuscar] = useState ('')

    // const onChangeBuscar = (e) =>{
    //     setBuscar(e.target.value)
    // }

    // const busqueda = (e) =>{
    //     e.preventDefault()
    // }




    // {/* <contenedor>
          //  <form onSubmit={busqueda}>
              //  <label htmlFor="buscador"></label>
               // <input type="text" onChange={onChangeBuscar} />
               // <button onClick={onClickButton} ></button>


         //   </form> 
      //  </contenedor> */}
