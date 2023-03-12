import { Request, Response, Router } from "express";
import { getCurrentDate, getDaysWeek } from "@helpers/date";
import { findVideosByQuery } from "@services/videos";
import { search } from "@services/youtube";
import { VideoYoutube } from "./types";

const router = Router();


let videos:unknown[] = [];

const padreMario = 'homilia diaria padre mario'
const homilia = 'homilia'



router.get('/:search',async (req:Request,res:Response) => {
   
    if(req.params.search.trim().includes(homilia.trim())){
     const value = await search(`${padreMario}`)
 
     console.log(value)
     videos = findVideosByQuery(value.items,'Padre Mario Sartori')
         
     const dayVideo = getDaysWeek().find((day) => day.number === getCurrentDate().getDay());
 
     const videoDiario = (videos as VideoYoutube[]).find((video) => video.title.includes(dayVideo?.name ?? ``))
 
     return res.json({idVideo:videoDiario?.id})
    }

     const value = await search(req.params.search)
     return res.json({videos:value.items})
    
 })


export default router;