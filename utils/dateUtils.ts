export function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

export function formatarDataHora(data: Date): string {
    return data.toLocaleString("pt-BR", { timeZone: "UTC" });
}

export function validarFormatoDataISO(entrada: string): boolean {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entrada)) return false;
    const data = new Date(`${entrada}T00:00:00`);
    return !Number.isNaN(data.getTime()) && data.toISOString().slice(0, 10) === entrada;
}
