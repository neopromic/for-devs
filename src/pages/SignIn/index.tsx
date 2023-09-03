import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./SignIn.css";

export default function SignIn() {
  return (
    <>
    <Header />
    <section>
      <form>
        <div className="form-header">
          <img
            src="/assets/logo.png"
            className="w-8 h-8 object-cover rounded-full"
          />
          <h1>Bem-vindo de volta</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="username">Nome de usuário</label>
          <input type="text" id="username" />
        </div>
        <div className="mb-6">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
        </div>
        <button 
        type="submit"
        className="w-full bg-violet-500 hover:bg-violet-800 transition-all delay-200 p-2 text-violet-50 font-medium rounded-md"
        onClick={(e) => (
          e.preventDefault() 
          
        )}>Entrar</button>
        <span className="text-sm font-light my-4">Novo por aqui? <Link to="/signup">Crie uma conta!</Link></span>
      </form>
    </section>
    </>
  );
}
