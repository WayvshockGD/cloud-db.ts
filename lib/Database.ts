import { ApiManager, getValueData, values } from "./ApiManager";
import { Requester } from "./Request";

class Database {
    public key: string;
    public requester: Requester;
    public ratelimits: Map<string, number>;
    public manager: ApiManager;

    public constructor(key: string) {
        if (!key) throw new Error("Key is not defined in the contructor.");

        this.key = key;
        this.manager = new ApiManager(this);
        this.requester = new Requester(key, this);
        this.ratelimits = new Map();
    }


    public editOrCreate<D>(name: string, value: values) {
        return this.manager.editOrCreate<D>(name, value);
    }

    public addValues(name: string, value: values) {
        return this.manager.add(name, value);
    }

    public subTractValues(name: string, value: values) {
        return this.manager.subtract(name, value);
    }

    public getValues<D>(name: string) {
        return this.manager.getValues<getValueData<D>>(name);
    }

    public getAllValues() {
        return this.manager.getAll();
    }

    public deleteKeyValue(name: string) {
        return this.manager.deleteValue(name);
    }
}

export = Database;