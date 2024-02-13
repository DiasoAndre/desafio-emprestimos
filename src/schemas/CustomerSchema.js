const { z } = require('zod')

const customerSchema = z.object({
    age: z.string(),
    cpf: z.string(),
    name: z.string(),
    income: z.number(),
    location: z.string()
})

module.exports = { customerSchema }