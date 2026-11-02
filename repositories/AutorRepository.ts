import { autores } from "../data/seed";
import type { CAutor } from "../models/Classes";

export class AutorRepository {
    async listar(): Promise<CAutor[]> {
        return [...autores];
    }
    async buscarPorId(id: number): Promise<CAutor | undefined> {
        return autores.find((autor) => autor.id === id);
    }
    async salvar(autor: CAutor): Promise<CAutor> {
        autores.push(autor);
        return autor;
    }
    async atualizar(autor: CAutor): Promise<CAutor | undefined> {
        const indice = autores.findIndex((autorAtual) => autorAtual.id === autor.id);
        if (indice === -1) return undefined;
        autores[indice] = autor;
        return autor;
    }
    async remover(id: number): Promise<boolean> {
        const indice = autores.findIndex((autor) => autor.id === id);
        if (indice === -1) return false;
        autores.splice(indice, 1);
        return true;
    }
}