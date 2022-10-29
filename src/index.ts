import {MikroORM, RequestContext, RequiredEntityData} from "@mikro-orm/core"
import { __prod__ } from "./constants";
import mikroConfig from "./mikro-orm.config";
import { Post } from "./entities/Post";

const main = async()=>{
    const orm = await MikroORM.init(mikroConfig);
    // run things in the `RequestContext` handler
    
    await RequestContext.createAsync(orm.em, async () => {
      // inside this handler the `orm.em` will actually use the contextual fork, created via `RequestContext.createAsync()`
      const post = orm.em.create(Post, {
        title: "my first post",
      } as RequiredEntityData<Post>);
      await orm.em.persistAndFlush(post);
      await orm.em.nativeInsert(Post, { title: "my first post 2" });
    });
}

        main().catch((err)=>{
    console.log(err)
});
