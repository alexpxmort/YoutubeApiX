import dotnev from 'dotenv';

dotnev.config();

export default{
    server:{
        port:process.env.PORT,
        host:process.env.HOST
    }
}