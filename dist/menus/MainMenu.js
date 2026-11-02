"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
const AutorMenu_1 = require("./AutorMenu");
const ClienteMenu_1 = require("./ClienteMenu");
const EmprestimoMenu_1 = require("./EmprestimoMenu");
const LivroMenu_1 = require("./LivroMenu");
class MainMenu {
    io;
    constructor(io) {
        this.io = io;
    }
    async executar() {
        let executando = true;
        while (executando) {
            this.io.exibir("\n=== BookStore Manager CLI ===");
            this.io.exibir("1. Autores");
            this.io.exibir("2. Livros");
            this.io.exibir("3. Clientes");
            this.io.exibir("4. Empréstimos");
            this.io.exibir("0. Encerrar aplicação");
            const opcao = (await this.io.perguntar("Escolha uma opção: ")).trim();
            switch (opcao) {
                case "1":
                    await (0, AutorMenu_1.executarMenuAutores)(this.io);
                    break;
                case "2":
                    await (0, LivroMenu_1.executarMenuLivros)(this.io);
                    break;
                case "3":
                    await (0, ClienteMenu_1.executarMenuClientes)(this.io);
                    break;
                case "4":
                    await (0, EmprestimoMenu_1.executarMenuEmprestimos)(this.io);
                    break;
                case "0":
                    executando = false;
                    break;
                default:
                    this.io.exibir("Opção inválida.");
            }
        }
        this.io.exibir("Aplicação encerrada.");
    }
}
exports.MainMenu = MainMenu;
//# sourceMappingURL=MainMenu.js.map