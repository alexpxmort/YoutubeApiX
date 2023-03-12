
import {getCurrentDate, getDaysWeek} from "./helpers/date";
import { search } from "./services/youtube";
import { findVideosByQuery } from "./services/videos";
import app from "@app/index";
import config from "@config/index";
 

app.listen(config.server.port,()=>{
    console.log(`SERVER RUNNING ON PORT ${config.server.port}`)
})
  




