import { Livro } from '../entidades/Livro';

const livrosData = [
        { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1', 'Autor 2'] },
        { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 3', 'Autor 4'] },
        { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 5', 'Autor 6'] },
];

export class ControleLivro {
    obterLivros(): Livro[] {
    return livrosData.map((livro) => new Livro(livro.codigo, livro.codEditora, livro.titulo, livro.resumo, livro.autores));
    }

        incluir(livro: Livro): void {
    const novoCodigo = livrosData.reduce((max, l) => (l.codigo > max ? l.codigo : max), 0) + 1;
    livro.codigo = novoCodigo;
    livrosData.push(livro);
    }
        excluir(codigo: number): void {
    const indice = livrosData.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
        livrosData.splice(indice, 1);
    }
    }
}