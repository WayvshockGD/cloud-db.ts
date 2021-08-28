import Database from "./Database";
import { data } from "./Request";

export type values = (string | object | number);

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
    }[]
}

export class ApiManager {
    public db: Database;

    public constructor(db: Database) {
        this.db = db;
    }

    public editOrCreate<D>(key: string, value: values): Promise<data<D>> {
        return this.db.requester.make<D>(`/set?name=${key}`, "POST", value);
    }

    public getValues<D>(key: string): Promise<data<getValueData<D>>> {
        return this.db.requester.make<getValueData<D>>(`/get?name=${key}`, "GET");
    }

    public getAll(): Promise<data<allData>> {
        return this.db.requester.make<allData>("/all", "GET");
    }

    public add(key: string, value: values) {
        return this.db.requester.make<defaultValues>(`/add?name=${key}`, "PATCH", value);
    }

    public subtract(key: string, value: values) {
        return this.db.requester.make<defaultValues>(`/subtract?name=${key}`, "PATCH", value);
    }

    public deleteValue(key: string) {
        return this.db.requester.make<defaultValues>(`/delete?name=${key}`, "DELETE");
    }
}