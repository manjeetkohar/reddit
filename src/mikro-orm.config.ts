import { MikroORM } from "@mikro-orm/postgresql";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from 'path';
export default{
    migrations:{
        path: path.join(__dirname,'./migrations'),
        glob: '!(*.d).{js,ts}',
    },
    entities:[Post],
        dbName: 'lireddit',
        type: 'postgresql',
        password: "#Ray4215f",
        user:"postgres",
        debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];