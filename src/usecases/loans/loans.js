const data = (customer) =>  [
  {
    name: "PERSONAL",
    requirements:
      customer.income > 3000 ||
      (customer.income > 3000 && customer.income < 5000) ||
      customer.age < 30,
    interest_rate: 4,
  },
  {
    name: "CONSIGNMENT",
    requirements: customer.income >= 5000,
    interest_rate: 3,
  },
  {
    name: "GUARANTEED",
    requirements:
      customer.income <= 3000 ||
      (customer.income > 3000 &&
        customer.income < 5000 &&
        customer.age < 30 &&
        customer.location == "SP"),
    interest_rate: 2,
  },
];

module.exports = { data }