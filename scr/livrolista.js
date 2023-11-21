import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LinhaLivro from '../components/LinhaLivro';
import Menu from '../components/Menu';
import { ControleLivro } from '../classes/controle/ControleLivro';
import styles from '../styles/Home.module.css';

const controleLivro = new ControleLivro();

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo: number) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <div className={styles.container}>
      <Menu />
      <main>
        <h1 className={styles.title}>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              <th>Autores</th>
              <th>Editora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;