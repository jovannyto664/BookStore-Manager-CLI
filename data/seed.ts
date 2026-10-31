import { CAutor, CLivro, CCliente, CEmprestimo } from "../models/Classes";

// =============================================================================
// DADOS INICIAIS (SEED) - Mesmos dados do script.sql
// Esses arrays alimentam a aplicação em memória quando ela inicia.
// =============================================================================

export const autores: CAutor[] = [
    new CAutor(1, "Machado de Assis", "Brasileira", new Date("1839-06-21")),
    new CAutor(2, "Clarice Lispector", "Brasileira", new Date("1920-12-10")),
    new CAutor(3, "George Orwell", "Britânica", new Date("1903-06-25")),
    new CAutor(4, "J.K. Rowling", "Britânica", new Date("1965-07-31")),
    new CAutor(5, "Gabriel García Márquez", "Colombiana", new Date("1927-03-06")),
];

export const livros: CLivro[] = [
    new CLivro(1, "Dom Casmurro", 1, "Romance", 1899, 4, 3),
    new CLivro(2, "Memórias Póstumas de Brás Cubas", 1, "Romance", 1881, 3, 3),
    new CLivro(3, "A Hora da Estrela", 2, "Ficção Literária", 1977, 5, 4),
    new CLivro(4, "1984", 3, "Distopia", 1949, 6, 4),
    new CLivro(5, "A Revolução dos Bichos", 3, "Fábula Política", 1945, 4, 4),
    new CLivro(6, "Harry Potter e a Pedra Filosofal", 4, "Fantasia", 1997, 5, 4),
    new CLivro(7, "Cem Anos de Solidão", 5, "Realismo Mágico", 1967, 3, 3),
];

export const clientes: CCliente[] = [
    new CCliente(1, "Carlos Eduardo Silva", "carlos.silva@email.com", "(11) 98765-4321", new Date("2026-01-15")),
    new CCliente(2, "Mariana Souza Gomes", "mariana.gomes@email.com", "(21) 99876-5432", new Date("2026-02-10")),
    new CCliente(3, "Lucas Fernandes", "lucas.fernandes@email.com", "(31) 97654-3210", new Date("2026-03-05")),
    new CCliente(4, "Beatriz Albuquerque", "beatriz.albuquerque@email.com", "(41) 96543-2109", new Date("2026-04-12")),
    new CCliente(5, "Rafael Martins", "rafael.martins@email.com", "(51) 95432-1098", new Date("2026-05-20")),
];

export const emprestimos: CEmprestimo[] = [
    // Empréstimo devolvido no prazo
    new CEmprestimo(1, 1, 1, new Date("2026-09-01T10:00:00"), new Date("2026-09-15"), new Date("2026-09-12T15:30:00"), "DEVOLVIDO"),
    // Empréstimo devolvido com atraso
    new CEmprestimo(2, 2, 2, new Date("2026-09-05T14:00:00"), new Date("2026-09-19"), new Date("2026-09-22T11:20:00"), "DEVOLVIDO"),
    // Empréstimos ativos (data_devolucao = null)
    new CEmprestimo(3, 1, 3, new Date("2026-10-10T09:30:00"), new Date("2026-10-25"), null, "EMPRESTADO"),
    new CEmprestimo(4, 3, 4, new Date("2026-10-12T16:00:00"), new Date("2026-10-27"), null, "EMPRESTADO"),
    new CEmprestimo(5, 4, 1, new Date("2026-10-15T11:45:00"), new Date("2026-10-30"), null, "EMPRESTADO"),
];
