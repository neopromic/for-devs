import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./SignUp.css";


export default function SignUp() {

  return (
  <>
  <Header />
    <div className="h-screen flex items-center justify-center p-4 overflow-hidden">
      <form>
        <div className="form-header">
          <img
            src="/assets/logo.png"
            className="w-8 h-8 object-cover rounded-full"
          />
          <h1>Começando no Fordevs</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="username">Nome de usuário</label>
          <input type="text" id="username" />
        </div>
        <div className="mb-6">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
          <label htmlFor="passwordAgain">Repita a senha</label>
          <input type="password" id="passwordAgain" />
        </div>
        <button
          type="submit"
          className="w-full bg-violet-500 hover:bg-violet-800 transition-all delay-200 p-2 text-violet-50 font-medium rounded-md"
          onClick={(e) => e.preventDefault()}
        >
          Iniciar jornada!
        </button>
        <span className="text-sm font-light my-4">
          Já possui conta? <Link to="/login">Entrar agora!</Link>
        </span>
      </form>
    </div>
    </>
  );
}
