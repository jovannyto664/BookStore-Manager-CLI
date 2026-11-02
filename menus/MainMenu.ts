import type { ConsoleIO } from "./ConsoleIO"
import { executarMenuAutores } from "./AutorMenu"
import { executarMenuClientes } from "./ClienteMenu"
import { executarMenuEmprestimos } from "./EmprestimoMenu"
import { executarMenuLivros } from "./LivroMenu"

export class MainMenu {
    constructor(private readonly io: ConsoleIO) {}

    async executar(): Promise<void> {
        let executando = true

        while (executando) {
            this.io.exibir("\n=== BookStore Manager CLI ===")
            this.io.exibir("1. Autores")
            this.io.exibir("2. Livros")
            this.io.exibir("3. Clientes")
            this.io.exibir("4. Empréstimos")
            this.io.exibir("0. Encerrar aplicação")

            const opcao = (await this.io.perguntar("Escolha uma opção: ")).trim()

            switch (opcao) {
                case "1":
                    await executarMenuAutores(this.io)
                    break
                case "2":
                    await executarMenuLivros(this.io)
                    break
                case "3":
                    await executarMenuClientes(this.io)
                    break
                case "4":
                    await executarMenuEmprestimos(this.io)
                    break
                case "0":
                    executando = false
                    break
                default:
                    this.io.exibir("Opção inválida.")
            }
        }

        this.io.exibir("Aplicação encerrada.")
    }
}
