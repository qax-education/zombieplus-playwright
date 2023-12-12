const { Pool } = require('pg')

const DbConfig = {
    user: 'msgnvjct',
    host: 'isabelle.db.elephantsql.com',
    database: 'msgnvjct',
    password: '9Z5JYKodHQPWNVyF70BXUotYty6HsLYj',
    port: 5432
}

export async function executeSQL(sqlScript) {
    try {
        const pool = new Pool(DbConfig)
        const client = await pool.connect()
    
        const result = await client.query(sqlScript)
        console.log(result.rows)
    } catch(error) {
        console.log('Erro ao executar SQL ' + error)
    }
}