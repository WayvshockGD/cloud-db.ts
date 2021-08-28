import { values } from "./ApiManager";
import fetch, { RequestInit } from "node-fetch";
import Database from "./Database";

type methods = ("PATCH" | "POST" | "GET" | "DELETE");

export interface data<D> {
    body: D;
    statusCode: number;
}

export class Requester {
    public key: string;
    public db: Database;

    constructor(key: string, db: Database) {
        this.key = key;
        this.db = db;
    }

    public async make<D>(route: string, method: methods, body?: values): Promise<data<D>> {

        if (this.db.ratelimits.size > 0) {
            throw console.log("Ratelimit");
        };

        let opt: RequestInit = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.key
            },
            method,
        }

        if (body) opt.body = JSON.stringify({ value: body });

        let result = await fetch(`https://cloud-db.ml${route}`, opt);

        let res: D = await result.json();

        return new Promise<data<D>>((promise, reject) => {
            this.db.ratelimits.set("Ratelimit", 1);
            promise({ body: res, statusCode: result.status });
        })
    }
}