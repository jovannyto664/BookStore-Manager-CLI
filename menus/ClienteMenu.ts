import { ClienteController } from "../controllers/ClienteController"
import { CCliente } from "../models/Classes"
import type { ConsoleIO } from "./ConsoleIO"
import { executarMenuCrud } from "./CrudMenu"
import { formatarData, pedirData, pedirTexto } from "./FormHelpers"

export async function executarMenuClientes(io: ConsoleIO): Promise<void> {
    const controlador = new ClienteController()

    await executarMenuCrud({
        titulo: "Clientes",
        controlador,
        io,
        formatar: (cliente) =>
            `#${cliente.id} | ${cliente.nome} | ${cliente.email} | ${cliente.telefone} | Cadastro: ${formatarData(cliente.data_cadastro)}`,
        criar: async (id) =>
            new CCliente(
                id,
                await pedirTexto(io, "Nome"),
                await pedirTexto(io, "E-mail"),
                await pedirTexto(io, "Telefone"),
                await pedirData(io, "Data de cadastro")
            ),
        editar: async (cliente) =>
            new CCliente(
                cliente.id,
                await pedirTexto(io, "Nome", cliente.nome),
                await pedirTexto(io, "E-mail", cliente.email),
                await pedirTexto(io, "Telefone", cliente.telefone),
                await pedirData(io, "Data de cadastro", cliente.data_cadastro)
            )
    })
}
