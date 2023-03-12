import { VideoYoutube } from "@routes/youtube/types"

const findVideosByQuery = (arr:VideoYoutube[],query = 'Padre Mario Sartori') => {
    return arr.filter((video:VideoYoutube) => video.channelTitle?.includes(query) )
}
export {findVideosByQuery}