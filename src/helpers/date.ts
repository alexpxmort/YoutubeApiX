
export type DayWeek = {
    name:string;
    number:number;
}

const DAYS_WEEK:DayWeek[] = [
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
        name:'Sábado',
        number:6
    },
    {
        name:'Domingo',
        number:0
    },
]

const getCurrentDate =  ():Date => {
    return new Date();
}

const getDaysWeek = ():Array<DayWeek> => {
    return DAYS_WEEK;
}



export {getCurrentDate,getDaysWeek}