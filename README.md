# Cloud DB.ts

Hi welcome to my first api wrapper,

links:
- API Url: https://cloud-db.ml/
- Server Invite: https://discord.gg/nEtTMS934g
- Javascript version (this one works well with js as well) https://www.npmjs.com/package/cloud-db.js

Features:
- Promised based
- Full typescript support

Example:

Javascript
```js
let { Database } = require("cloud-db.ts");

let db = new Database("key");

db.editOrCreate("key", "value");

db.deleteKeyValue("key");

db.getAllValues();

db.getValues("key");

db.addValues("key", "value");

db.subTractValues("key", "value");
```

Typescript
```js
import { Database } from "cloud-db.ts";

let db = new Database("key");

db.editOrCreate("key", "value");

db.deleteKeyValue("key");

db.getAllValues();

db.getValues("key");

db.addValues("key", "value");

db.subTractValues("key", "value");
```