import { Link } from "react-router-dom";
import Header from "../../components/ui/Header";
import "./SignIn.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/utils/api/auth/config/index"
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault()
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => console.error(error))
  }

  return (
    <>
      <Header />
      <section>
        <form className="max-w-md w-full" onSubmit={signIn}>
          <div className="form-header">
            <img
              src="/assets/logo.png"
              className="w-8 h-8 object-cover rounded-full"
            />
            <h1>Bem-vindo de volta</h1>
          </div>
          <div className="mb-4">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
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
            Entrar
          </button>
          <Button asChild variant={"link"}>
            
            <Link to={"/signup"}>
              Novo por aqui? Iniciar jornada!
            </Link>
          </Button>
        </form>
      </section>
    </>
  );
}
