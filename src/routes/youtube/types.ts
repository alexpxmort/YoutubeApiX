
type ThumbNail = {
    url:string;
    width:number;
    height:number;
}

type Run = {
    text:string;
    navigationEndpoint:{
        clickTrackingParams:string;
        commandMetadata:{
            webCommandMetadata:{
                url:string;
                webPageType:string;
                rootVe:number;
                apiUrl:string;
            }
        }
    },
    browseEndpoint:{
        browseEndpoint:string;
        canonicalBaseUrl:string;
    }
}

export type VideoYoutube = {
    id:string;
    type:string;
    thumbnail:{
        thumbnails:ThumbNail[]
    },
    title:string;
    channelTitle:string;
    isLive:boolean;
    shortBylineText:{
        runs:Run[]
    },
    length:{
        accessibility:{
            accessibilityData:{
                label:string;
            }
        },
        simpleText:string;
    }
}