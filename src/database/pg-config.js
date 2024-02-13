const { Pool } = require('pg')

export const data = {
    dbPool: null,
    async conn() 
    {
        dotenv.config()

        this.dbPool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DATABASE,
            password : process.env.DB_PASSW,
            port : process.env.DB_PORT
        })

        try {
            const client = await this.dbPool.connect()
            client.release()
            console.log('PostgreSQL autenticado com Sucesso!!')
        } catch (error) {
            console.log(`Erro ao autenticar com PostgreSQL.`)
            console.log(`\taddress:${process.env.DB_HOST}\n\tport:${process.env.DB_PORT}`)
            console.log(`\tuser:${process.env.DB_USER}\n\tpassword:${process.env.DB_PASSW}`)
            throw error
        }   
    }
}