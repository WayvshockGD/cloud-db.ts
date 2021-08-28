import Database from "./Database";
import { data } from "./Request";
export declare type values = (string | object | number);
export interface defaultValues {
    success: true | false;
    message: string;
}
export interface getValueData<D> {
    success: true | false;
    message: string;
    name?: string;
    value?: values;
}
export interface allData {
    success: true | false;
    message: string;
    data: {
        name: string;
        value: values;
    }[];
}
export declare class ApiManager {
    db: Database;
    constructor(db: Database);
    editOrCreate<D>(key: string, value: values): Promise<data<D>>;
    getValues<D>(key: string): Promise<data<getValueData<D>>>;
    getAll(): Promise<data<allData>>;
    add(key: string, value: values): Promise<data<defaultValues>>;
    subtract(key: string, value: values): Promise<data<defaultValues>>;
    deleteValue(key: string): Promise<data<defaultValues>>;
}
