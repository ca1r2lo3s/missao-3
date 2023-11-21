import { Editora } from '../entidades/Editora';
const editorasData = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' },
    { codEditora: 3, nome: 'Editora C' },
  ];
  
  export class ControleEditora {
    getNomeEditora(codEditora: number): string {
      const editora = editorasData.find((e) => e.codEditora === codEditora);
      return editora ? editora.nome : '';
    }
  
    getEditoras(): Editora[] {
      return editorasData.map((e) => new Editora(e.codEditora, e.nome));
    }
  }