import { livros } from "../data/seed";
import type { CLivro } from "../models/Classes";

export class LivroRepository {
    async listar(): Promise<CLivro[]> {
        return [...livros];
    }
    async buscarPorId(id: number): Promise<CLivro | undefined> {
        return livros.find((livro) => livro.id === id);
    }
    async salvar(livro: CLivro): Promise<CLivro> {
        livros.push(livro);
        return livro;
    }
    async atualizar(livro: CLivro): Promise<CLivro | undefined> {
        const indice = livros.findIndex((livroAtual) => livroAtual.id === livro.id);
        if (indice === -1) return undefined;
        livros[indice] = livro;
        return livro;
    }
    async remover(id: number): Promise<boolean> {
        const indice = livros.findIndex((livro) => livro.id === id);
        if (indice === -1) return false;
        livros.splice(indice, 1);
        return true;
    }
}