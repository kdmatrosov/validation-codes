declare module 'ru-validation-codes' {
    export function checkINN(value: string | number): boolean;
    export function checkSnils(value: string): boolean;
    export function checkOgrn(value: string | number): boolean;
    export function checkOgrnip(value: string | number): boolean;
    export function checkBik(value: string | number): boolean;
    export function checkSnilsOnlyChecksum(
        value: string | number,
    ): boolean;
}