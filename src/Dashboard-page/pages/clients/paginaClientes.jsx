import React from 'react'
import Sidebar from '../../components/sidebar'
// import ClienteForm from '../../components/clienteForm'
import AddClient from './index'
function paginaClientes() {
  return (
    <>
      <Sidebar/>
      <p>Mi pagina de clientes</p> 
     <AddClient/>
    </>
  )
}

export default paginaClientes
