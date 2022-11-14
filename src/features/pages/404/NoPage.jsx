import { Link } from "react-router-dom";

export const NoPage = () => {
    return (
    <div className="container-fluid text-center">
      <h1>Error 404 - Página no encontrada</h1>
      <Link className="btn btn-danger" to='/'>Volver al inicio</Link>
    </div>)
  };