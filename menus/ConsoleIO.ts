import { stdin, stdout } from "node:process"
import { createInterface, type Interface as ReadlineInterface } from "node:readline/promises"

export class ConsoleIO {
    private readonly terminal: ReadlineInterface

    constructor() {
        this.terminal = createInterface({ input: stdin, output: stdout })
    }

    perguntar(mensagem: string): Promise<string> {
        return this.terminal.question(mensagem)
    }

    exibir(mensagem: string): void {
        console.log(mensagem)
    }

    fechar(): void {
        this.terminal.close()
    }
}
