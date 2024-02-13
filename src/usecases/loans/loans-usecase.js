const { data } = require("./loans");

const loansUseCase = (customer) => {
  const result = [];
  const customerLoans = data(customer);

  customerLoans.forEach((loan) => {
    console.log(loan)
    if (loan.requirements) {
      result.push({
        type: loan.name,
        interest_rate: loan.interest_rate,
      });
    }
  });

  return result;
};

module.exports = { loansUseCase };
