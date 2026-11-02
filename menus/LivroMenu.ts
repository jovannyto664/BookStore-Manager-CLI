import { LivroController } from "../controllers/LivroController"
import { CLivro } from "../models/Classes"
import type { ConsoleIO } from "./ConsoleIO"
import { executarMenuCrud } from "./CrudMenu"
import { pedirNumero, pedirTexto } from "./FormHelpers"

export async function executarMenuLivros(io: ConsoleIO): Promise<void> {
    const controlador = new LivroController()

    await executarMenuCrud({
        titulo: "Livros",
        controlador,
        io,
        formatar: (livro) =>
            `#${livro.id} | ${livro.titulo} | Autor ID: ${livro.autor} | ${livro.genero} | ${livro.ano_publicacao} | Disponíveis: ${livro.quantidade_disponivel}/${livro.quantidade_total}`,
        criar: async (id) =>
            new CLivro(
                id,
                await pedirTexto(io, "Título"),
                await pedirNumero(io, "ID do autor", undefined, 1),
                await pedirTexto(io, "Gênero"),
                await pedirNumero(io, "Ano de publicação", undefined, 0),
                await pedirNumero(io, "Quantidade total", undefined, 0),
                await pedirNumero(io, "Quantidade disponível", undefined, 0)
            ),
        editar: async (livro) =>
            new CLivro(
                livro.id,
                await pedirTexto(io, "Título", livro.titulo),
                await pedirNumero(io, "ID do autor", livro.autor, 1),
                await pedirTexto(io, "Gênero", livro.genero),
                await pedirNumero(io, "Ano de publicação", livro.ano_publicacao, 0),
                await pedirNumero(io, "Quantidade total", livro.quantidade_total, 0),
                await pedirNumero(io, "Quantidade disponível", livro.quantidade_disponivel, 0)
            )
    })
}
