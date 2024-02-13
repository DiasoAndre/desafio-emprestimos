const { Router } = require('express')

const { loansController } = require('./usecases/loans/loans-controller')

const router = Router()

router.get('/', (__, response) => {

    response.status(200).send('Hello World')
})

router.post('/customer-loans', loansController)

module.exports = { router }