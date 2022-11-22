import React from 'react'
import { useState, useEffect } from 'react'
import deportistas from './deportistas'
import './main.css'

function Main() {
  const[modalcontent, setModalContent] = useState ([])
  const[modaltoggle, setModalToggle] = useState (false)

  
  const changeContent = (deportista) => {
     setModalContent([deportista]); 
     setModalToggle(!modaltoggle)
  }


  return (
    <div className='mainContainer'> 
       <div className='contentContainer'>
        {deportistas.map((deportista) => {
                return(
                    <div className="content_card">
                        <img src={`./images${deportista.imgFile}`} alt="" />
                        <h1>{deportista.nombre}</h1>
                        <p>{deportista.especialidad}</p>
                        <button onClick={()=> changeContent(deportista) }>VER MAS</button>
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
                        <div className="popUpCard">
                        <p>{modal.nombre}</p>
                        <p>Edad: {modal.edad}</p>
                        <p>Altura: {modal.altura}</p>
                        <p>Peso: {modal.peso}</p>
                        <p>Nacionalidad: {modal.nacionalidad}</p>
                        <p>Record personal: {modal.record}</p>
                        </div>
                    )
                })}
            </div>
            </div>
          


        </div>)}





    </div>
    
  )
}

export default Main



















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
