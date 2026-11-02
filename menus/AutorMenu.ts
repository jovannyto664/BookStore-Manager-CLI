import { AutorController } from "../controllers/Autorcontroller"
import { CAutor } from "../models/Classes"
import type { ConsoleIO } from "./ConsoleIO"
import { executarMenuCrud } from "./CrudMenu"
import { formatarData, pedirData, pedirTexto } from "./FormHelpers"

export async function executarMenuAutores(io: ConsoleIO): Promise<void> {
    const controlador = new AutorController()

    await executarMenuCrud({
        titulo: "Autores",
        controlador,
        io,
        formatar: (autor) =>
            `#${autor.id} | ${autor.nome} | ${autor.nacionalidade} | Nascimento: ${formatarData(autor.data_nascimento)}`,
        criar: async (id) =>
            new CAutor(
                id,
                await pedirTexto(io, "Nome"),
                await pedirTexto(io, "Nacionalidade"),
                await pedirData(io, "Data de nascimento")
            ),
        editar: async (autor) =>
            new CAutor(
                autor.id,
                await pedirTexto(io, "Nome", autor.nome),
                await pedirTexto(io, "Nacionalidade", autor.nacionalidade),
                await pedirData(io, "Data de nascimento", autor.data_nascimento)
            )
    })
}
