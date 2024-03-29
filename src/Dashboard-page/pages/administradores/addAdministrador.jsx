import axios from "axios";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export default function AddAdministrador() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    contrasena: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!formulario.email.includes("@")) {
      setEmailError("El email debe contener un arroba (@)");
      return;
    } else {
      setEmailError("");
    }

    const administrador = JSON.stringify(formulario);
    console.log(administrador);
    axios
      .post("http://localhost:3001/administradores", administrador, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        console.log("Administrador agregado");
      })
      .catch(function () {
        console.error("Error");
      });

    //go to products page
    window.location.href = "/administrador";
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="md:w-1/3 lg:w-2/1">
      <table className="w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left">Insertar administrador</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-6">
              <Form>
                <Form.Group className="mb-3" controlId="nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre del administrador" name="nombre"  onChange={handleChange}/>
                </Form.Group>

                {emailError && (
                      <p className="text-red-500 mt-1 text-sm">{emailError}</p>
                    )}

                    
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Correo" name="email"  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imagen">
                  <Form.Label>Contrasena</Form.Label>
                  <Form.Control type="password" placeholder="contrasena" name="contrasena"  onChange={handleChange} />
                </Form.Group>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Agregar
                  </button>
                </div>
              </Form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> 
  );
}
