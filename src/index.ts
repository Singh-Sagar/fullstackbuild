import {MikroORM} from "@mikro-orm/core";
import {PostgreSqlDriver} from "@mikro-orm/postgresql";
import { __prod__ } from "./constants";
        
const main = async () => {
          const orm = await MikroORM.init({
            entities:[],
            dbName: 'lireddit',
            driver: PostgreSqlDriver,
            debug: !__prod__
          });
        };
        
        main();
main()
