"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleIO_1 = require("../menus/ConsoleIO");
const MainMenu_1 = require("../menus/MainMenu");
async function main() {
    const io = new ConsoleIO_1.ConsoleIO();
    try {
        await new MainMenu_1.MainMenu(io).executar();
    }
    finally {
        io.fechar();
    }
}
void main().catch((erro) => {
    console.error("Erro ao iniciar a aplicação:", erro);
    process.exitCode = 1;
});
//# sourceMappingURL=main.js.map