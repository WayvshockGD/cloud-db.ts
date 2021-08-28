import { values } from "./ApiManager";
import Database from "./Database";
declare type methods = ("PATCH" | "POST" | "GET" | "DELETE");
export interface data<D> {
    body: D;
    statusCode: number;
}
export declare class Requester {
    key: string;
    db: Database;
    constructor(key: string, db: Database);
    make<D>(route: string, method: methods, body?: values): Promise<data<D>>;
}
export {};
