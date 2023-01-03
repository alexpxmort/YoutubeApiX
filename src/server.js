const youtubesearchapi = require("youtube-search-api");
const express = require('express')
const cors = require('cors');


const findVideosByQuery = (arr,query = 'Padre Mario Sartori') => {
    return arr.filter((val) => val.channelTitle?.includes(query) )
}


const currentDate = new Date();


const arrDays = [
    {
        name:'Segunda-feira',
        number:1
    },
    {
        name:'Terça-feira',
        number:2
    },
    {
        name:'Quarta-feira',
        number:3
    },
    {
        name:'Quinta-feira',
        number:4
    },
    {
        name:'Sexta-feira',
        number:5
    },
    {
        name:'Domingo',
        number:0
    },
    {
        name:'Sabado',
        number:0
    }
]

let videos = [];

const padreMario = 'homilia diaria padre mario'
const homilia = 'homilia'


const app = express()

app.use(cors())

app.get('/youtube/:search',async (req,res) => {
   
   if(req.params.search.trim().includes(homilia.trim())){
    const value = await youtubesearchapi.GetListByKeyword(`${padreMario}`,false,10,[])

    videos = findVideosByQuery(value.items,'Padre Mario Sartori')
        
    const video = arrDays.find((val) => val.number === currentDate.getDay());

    const videoDiario = videos.find((val) => val.title.includes(video.name))

    return res.json({idVideo:videoDiario.id})
   }else{
    const value = await youtubesearchapi.GetListByKeyword(req.params.search,false,10,[])
    return res.json({videos:value.items})
   }
})


app.listen(process.env.PORT || 5000,()=> {
     console.log(`API youtube rodando`)
})