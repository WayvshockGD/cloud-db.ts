import { ApiManager, getValueData, values } from "./ApiManager";
import { Requester } from "./Request";
declare class Database {
    key: string;
    requester: Requester;
    ratelimits: Map<string, number>;
    manager: ApiManager;
    constructor(key: string);
    editOrCreate<D>(name: string, value: values): Promise<import("./Request").data<D>>;
    addValues(name: string, value: values): Promise<import("./Request").data<import("./ApiManager").defaultValues>>;
    subTractValues(name: string, value: values): Promise<import("./Request").data<import("./ApiManager").defaultValues>>;
    getValues<D>(name: string): Promise<import("./Request").data<getValueData<getValueData<D>>>>;
    getAllValues(): Promise<import("./Request").data<import("./ApiManager").allData>>;
    deleteKeyValue(name: string): Promise<import("./Request").data<import("./ApiManager").defaultValues>>;
}
export = Database;
