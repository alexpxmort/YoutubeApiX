import * as youtubesearchapi from 'youtube-search-api';
import { VideoYoutube } from '@routes/youtube/types';

const search = async (key:string,withPlaylist: boolean = false, limit: number = 10, options: any[] = []):Promise<{
    items:VideoYoutube[]
}> => {
    return await youtubesearchapi.GetListByKeyword(key,withPlaylist,limit,options);
}

export {search}