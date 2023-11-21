import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from '../classes/controle/ControleLivro';
import { ControleEditora } from '../classes/controle/ControleEditora';

const LivroDados: React.FC = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : 0);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const autoresArray = autores.split('\n').map((autor) => autor.trim());

    const novoLivro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autoresArray,
    };

    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h1>Cadastro de Livro</h1>
      <form onSubmit={incluir}>
        <div>
          <label>Título:</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Resumo:</label>
          <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
        </div>
        <div>
          <label>Autores:</label>
          <textarea value={autores} onChange={(e) => setAutores(e.target.value)} />
        </div>
        <div>
          <label>Editora:</label>
          <select value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Incluir</button>
      </form>
    </main>
  );
};