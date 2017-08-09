declare module "zero-fill" {
    const zeroFill: (format: number) => (n: number) => string;
    
    export = zeroFill;
}