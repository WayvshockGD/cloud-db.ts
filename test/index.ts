import { Client } from "eris";
import { Database } from "cloud-db.ts";


let client = new Client("");
let db = new Database("");

client.on("messageCreate", (message) => {
    if (message.content === "!ratelimit") {
        db.addValues("that", "this").catch(r => { 
            if (r) {
                console.log(r);
            }
        });
    }
});

client.on("ready", () => console.log("Ready!"));

client.connect();