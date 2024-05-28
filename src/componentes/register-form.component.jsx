import "../estilos/log-form.style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/config"
import { postUser } from "../API/requests";
const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        const userData = {
          id: user.uid,
          username: username,
          password: password,
          email: email,
          full_name: fullName,
          phone_number: phoneNumber,
          address: address
        };
        postUser(userData);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="form-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="username"
            name="username"
            className="input-form"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="input-form"
            placeholder="Nombre Completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            className="input-form"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            className="input-form"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="input-form"
            placeholder="Número de Teléfono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            id="address"
            name="address"
            className="input-form"
            placeholder="Dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-form">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterForm;