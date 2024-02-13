# Loans Challenge >> backend-br

Attempt to resolve this [Challenge](https://github.com/backend-br/desafios/blob/master/loans/PROBLEM.md)

The service receives a call to determine which types of loans the customer should receive

**[POST]** `{{host}}/customer-loans`

```json
{
  "age": 26,
  "cpf": "275.484.389-23",
  "name": "Vuxaywua Zukiagou",
  "income": 7000.00,
  "location": "SP"
}
```

The service returns a response containing the customer's name and the loans he has access to

``` json
{
    "customer": "<customer-name>",
    "loans": [
        "type": "loan-type",
        "interest_rate": "<rate>"
    ]
}
```