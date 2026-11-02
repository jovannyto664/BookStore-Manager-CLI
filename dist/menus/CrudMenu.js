"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarMenuCrud = executarMenuCrud;
async function pedirId(io) {
    const entrada = (await io.perguntar("ID: ")).trim();
    const id = Number(entrada);
    if (entrada.length > 0 && Number.isInteger(id) && id > 0)
        return id;
    io.exibir("Informe um ID inteiro positivo.");
    return undefined;
}
async function executarMenuCrud(config) {
    let executando = true;
    while (executando) {
        config.io.exibir(`\n=== ${config.titulo} ===`);
        config.io.exibir("1. Listar");
        config.io.exibir("2. Consultar por ID");
        config.io.exibir("3. Cadastrar");
        config.io.exibir("4. Atualizar");
        config.io.exibir("5. Remover");
        config.io.exibir("0. Voltar");
        const opcao = (await config.io.perguntar("Escolha uma opção: ")).trim();
        try {
            switch (opcao) {
                case "1": {
                    const registros = await config.controlador.listar();
                    if (registros.length === 0) {
                        config.io.exibir("Nenhum registro encontrado.");
                    }
                    else {
                        for (const registro of registros) {
                            config.io.exibir(config.formatar(registro));
                        }
                    }
                    break;
                }
                case "2": {
                    const id = await pedirId(config.io);
                    if (id === undefined)
                        break;
                    const registro = await config.controlador.buscarPorId(id);
                    config.io.exibir(registro ? config.formatar(registro) : "Registro não encontrado.");
                    break;
                }
                case "3": {
                    const registros = await config.controlador.listar();
                    const id = registros.reduce((maiorId, registro) => Math.max(maiorId, registro.id), 0) + 1;
                    const registro = await config.criar(id);
                    await config.controlador.salvar(registro);
                    config.io.exibir("Registro cadastrado com sucesso.");
                    break;
                }
                case "4": {
                    const id = await pedirId(config.io);
                    if (id === undefined)
                        break;
                    const atual = await config.controlador.buscarPorId(id);
                    if (!atual) {
                        config.io.exibir("Registro não encontrado.");
                        break;
                    }
                    const atualizado = await config.editar(atual);
                    const resultado = await config.controlador.atualizar(atualizado);
                    config.io.exibir(resultado ? "Registro atualizado com sucesso." : "Não foi possível atualizar o registro.");
                    break;
                }
                case "5": {
                    const id = await pedirId(config.io);
                    if (id === undefined)
                        break;
                    const removido = await config.controlador.remover(id);
                    config.io.exibir(removido ? "Registro removido com sucesso." : "Registro não encontrado.");
                    break;
                }
                case "0":
                    executando = false;
                    break;
                default:
                    config.io.exibir("Opção inválida.");
            }
        }
        catch (erro) {
            const mensagem = erro instanceof Error ? erro.message : "Erro inesperado.";
            config.io.exibir(`Não foi possível concluir a operação: ${mensagem}`);
        }
    }
}
//# sourceMappingURL=CrudMenu.js.map