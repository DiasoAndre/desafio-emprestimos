const { data } = require("./loans");

const loansUseCase = async (customer) => {
  let result = [];
  const loans = data(customer);

  loans.forEach((loan) => {
    const include = loans.find((l) => l.name == loan.name);
    if (!include) {
      if (loan.requirements) {
        result.push({
            name: loan.name,
            interest_rate: loan.interest_rate
        })
      }
    }
  });

  return result
};

module.exports = { loansUseCase };
