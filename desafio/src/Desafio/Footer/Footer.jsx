import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='imagen-footer'>
          <div className='imagen-senpai'></div>
        </div>
        <div className='links-footer'>
          <h3>Links Importantes</h3>
          <a href="">Cursos</a>
          <a href="">Blog</a>
          <a href="">Conocenos</a>
        </div>
        <div className='derechos'>
          <p>©2022 Senpai Academy. Todos los derechos reservados</p>
        </div>
        <div className='redes-footer'>
          <img src="/imagenes/icon-facebook.svg" alt="" className='icono-redes' />
          <img src="/imagenes/icon-instagram.svg" alt="" className='icono-redes' />
          <img src="/imagenes/icon-twitter.svg" alt="" className='icono-redes' />
        </div>

      </div>
    </div>
  )
}

export default Footer
