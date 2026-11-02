import { ConsoleIO } from "../menus/ConsoleIO"
import { MainMenu } from "../menus/MainMenu"

async function main(): Promise<void> {
    const io = new ConsoleIO()

    try {
        await new MainMenu(io).executar()
    } finally {
        io.fechar()
    }
}

void main().catch((erro: unknown) => {
    console.error("Erro ao iniciar a aplicação:", erro)
    process.exitCode = 1
})