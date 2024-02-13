const { Pool } = require('pg')
const { config } = require('dotenv')

const data = {
    dbPool: null,
    async conn() 
    {
        config()

        this.dbPool = new Pool({
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DATABASE,
            password : process.env.POSTGRES_PASSWORD,
            port : process.env.POSTGRES_PORT
        })

        try {
            const client = await this.dbPool.connect()
            client.release()
            console.log('PostgreSQL autenticado com Sucesso!!')
        } catch (error) {
            console.log(`Erro ao autenticar com PostgreSQL.`)
            console.log(`\taddress:${process.env.POSTGRES_HOST}\n\tport:${process.env.POSTGRES_PORT}`)
            console.log(`\tuser:${process.env.POSTGRES_USER}\n\tpassword:${process.env.POSTGRES_PASSWORD}`)
            throw error
        }   
    }
}

module.exports = { data }