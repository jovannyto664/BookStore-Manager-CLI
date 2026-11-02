"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleIO = void 0;
const node_process_1 = require("node:process");
const promises_1 = require("node:readline/promises");
class ConsoleIO {
    terminal;
    constructor() {
        this.terminal = (0, promises_1.createInterface)({ input: node_process_1.stdin, output: node_process_1.stdout });
    }
    perguntar(mensagem) {
        return this.terminal.question(mensagem);
    }
    exibir(mensagem) {
        console.log(mensagem);
    }
    fechar() {
        this.terminal.close();
    }
}
exports.ConsoleIO = ConsoleIO;
//# sourceMappingURL=ConsoleIO.js.map