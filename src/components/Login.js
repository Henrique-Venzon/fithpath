import React from "react";
import "../Login.css"; // Importando o CSS específico
import gymImage from "../assets/gym.jpg";

const Login = () => {
  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" placeholder="Digite seu usuário" />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" />

        <button type="submit">Entrar</button>
        <p>
          Não tem cadastro? <a href="#">Cadastrar-se!</a>
        </p>
      </form>

      <div className="image">
        <img src={gymImage} alt="Academia"/>
      </div>
      <footer>
        <p>FitPath</p>
      </footer>
    </div>
  );
};

export default Login;
