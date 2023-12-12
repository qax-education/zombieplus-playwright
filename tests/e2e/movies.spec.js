const { test } = require('../support')

const data = require('../support/fixtures/movies.json')
const { executeSQL } = require('../support/database')

test('deve poder cadastrar um novo filme', async ({ page }) => {
    const movie = data.create
    await executeSQL(`DELETE from movies WHERE title = '${movie.title}';`)

    await page.login.visit()
    await page.login.submit('admin@zombieplus.com', 'pwd123')
    await page.movies.isLoggedIn()

    await page.movies.create(movie)
    await page.toast.containText('Cadastro realizado com sucesso!')
})