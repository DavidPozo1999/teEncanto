import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../estilos/log-form.style.css";
import {auth} from "../firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth";
const LoggingForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <>
      <div className="form-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" id="email" name="email" className="input-form" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" className="input-form" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <input type="submit" value="Enviar Formulario" className="submit-form" />
          <div className="link-register">
            <p>No tienes cuenta. Registrate aquí</p>
            <Link to="/registro">¡Unete a TeAdopto!</Link>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default LoggingForm;