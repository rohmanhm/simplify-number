export declare type Optional<T> = {
    [P in keyof T]?: T[P];
};
export interface ConfigInstance {
    abbrev: string[];
    decimal: number;
}
export declare type OptionInstances = Optional<ConfigInstance>;
export declare class Instance {
    config: ConfigInstance;
    constructor(options?: OptionInstances);
    simplify(num?: number): string;
}
declare function SimplifyNumber(num: number, config?: OptionInstances): string;
export default SimplifyNumber;
