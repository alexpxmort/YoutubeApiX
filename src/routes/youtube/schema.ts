import { z } from "zod";


const youtubeSchema = z.object({
    params:z.object({
        search:z.string()
    })
})

export { youtubeSchema}