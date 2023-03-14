import { Request, Response, Router } from "express";
import { getCurrentDate, getDaysWeek } from "@helpers/date";
import { findVideosByQuery } from "@services/videos";
import { search } from "@services/youtube";
import { VideoYoutube } from "./types";
import { youtubeSchema } from "./schema";
import { validate } from "../../helpers/zod";

const router = Router();


let videos:VideoYoutube[] = [];

const padreMario = 'homilia diaria padre mario'
const homilia = 'homilia'



router.get('/:search',async (req:Request,res:Response) => {
   
    const defaultValue = 'Novidades Node 2023';

    if(req.params.search && req.params.search.trim().includes(homilia.trim())){
     const value = await search(`${padreMario}`)
 
     videos = findVideosByQuery(value.items,'Padre Mario Sartori')
         
     const dayVideo = getDaysWeek().find((day) => day.number === getCurrentDate().getDay());
 
console.log(getCurrentDate().getDay())
console.log(videos)
     if(dayVideo!=undefined){
        const videoDiario = videos.find((video) => video.title.includes(dayVideo.name))
 
        return res.json({idVideo:videoDiario?.id})
     }

     res.json({})
     
    }


     const value = await search(req.params.search != 'undefined' ? req.params.search  : defaultValue)
     return res.json({videos:value.items})
    
 })


export default router;
