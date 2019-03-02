export function isArrayAndNotEmpty(valueToCheck: any): boolean {
    return Array.isArray(valueToCheck) && valueToCheck.length > 0;
}
