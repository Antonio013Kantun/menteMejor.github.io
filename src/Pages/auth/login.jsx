import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-black">Bienvenido</h1>
        <p className="text-xl text-black">Inicia sesión para continuar</p>
        <span>
          <Link to={"/"}>Regresar al inicio</Link>
        </span>
      </div>

      <div className="flex flex-row items-center justify-center mt-8">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1615486364134-62a4c72c822d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Imagen"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-1/2 pl-8">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-black mb-2">Correo electrónico</label>
              <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
                <box-icon name='envelope' type='solid' color="grey"></box-icon>
                <input className="border-none outline-none rounded-md bg-white text-black p-2" type="email" placeholder="Correo electrónico" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-black mb-2">Contraseña</label>
              <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
                <box-icon name='lock' type='solid' color="grey"></box-icon>
                <input className="border-none outline-none rounded-md bg-white text-black p-2" type="password" placeholder="Contraseña" />
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-black text-white rounded-md py-2 mt-2 w-full">
                Iniciar sesión
              </button>
            </div>
          </form>

          <p className="mt-4 font-bold text-black">
            No tienes cuenta?{" "}
            <Link to={"/register"} className="text-blue-700">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
