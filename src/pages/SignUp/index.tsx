import { Link } from "react-router-dom";
import Header from "../../components/ui/Header";
import "./SignUp.css";
import { useState } from "react";
import {auth} from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); 
  const signUp = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => console.error(error))
  }
  return (
    <>
      <Header />
      <div className="h-screen flex items-center justify-center p-4 overflow-hidden">
        <form className="max-w-xl" onSubmit={signUp}>
          <div className="form-header">
            <img
              src="/assets/logo.png"
              className="w-8 h-8 object-cover rounded-full"
            />
            <h1>Começando no Fordevs</h1>
          </div>
          <div className="mb-6">
            <label htmlFor="username">Nome de usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-500 hover:bg-violet-800 transition-all delay-200 p-2 text-violet-50 font-medium rounded-md mb-4"
          >
            Iniciar jornada!
          </button>
          <span className="text-sm">
            Já possui conta? <Link to="/login" className="text-violet-500 font-bold">Entrar agora!</Link>
          </span>
        </form>
      </div>
    </>
  );
}
