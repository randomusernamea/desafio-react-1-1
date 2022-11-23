import React from 'react'
import { useState, useEffect } from 'react'
import deportistas from './deportistas'
import './main.css'

function MainComp() {
  const[modalcontent, setModalContent] = useState ([])
  const[modaltoggle, setModalToggle] = useState (false)
  const[search, setSearch] = useState ('')
  const[button, setButton] = useState ('')




  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }







  const onChangeCard = () => {
    let texto = {search};





//   cards.forEach (showOrHide(element, texto)) 





}

// const showOrHide (card, text) {
    //     if (texto === card.name) {
        // card.class = show 
//     } else {
    // card.class = hidden
    //
// }


  

  
  const changeContent = (deportista) => {
     setModalContent([deportista]); 
     setModalToggle(!modaltoggle)
  }


  return (

    
    <div className='mainContainer'> 
         <label htmlFor="search"></label>
        <input value = {search} onChange={onChangeSearch} type="text" />
        <button   onClick={onChangeCard}>BUSCAR</button>
       <div className='contentContainer'>
        {deportistas.map((deportista) => {
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
