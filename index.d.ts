declare module 'ru-validation-codes' {
  export declare function checkINN(value: string | number): boolean;
  export declare function checkSnils(value: string): boolean;
  export declare function checkOgrn(value: string | number): boolean;
  export declare function checkOgrnip(value: string | number): boolean;
  export declare function checkBik(value: string | number): boolean;
  export declare function checkSnilsOnlyChecksum(
    value: string | number,
  ): boolean;
}
