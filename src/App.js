
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);
  const [user, setUser] = useState({});
  function cadastrarUsuario(e) {
    e.preventDefault();
    alert('Usuario registrado com sucesso!')
    setUser({ nome: nome, idade: idade, email: email, })
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={cadastrarUsuario}>
        <label>Nome:</label><br />
        <input placeholder='Digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)}></input><br />
        <label>Email:</label><br />
        <input placeholder='Digite seu nome' value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
        <label>Idade:</label><br />
        <input placeholder='Digite seu nome' value={idade} onChange={(e) => setIdade(e.target.value)}></input><br /><br />

        <button type='submit'>Registrar</button>
      </form><br />
      <br />
      <div>
        <span>Bem vindo: {user.nome}</span><br />
        <span>Idade: {user.idade}</span><br />
        <span>Email: {user.email} </span><br />
      </div>
    </div>

  );
}

export default App;
