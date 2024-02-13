const { loansUseCase } = require("./loans-usecase");
const { customerSchema } = require("../../schemas/CustomerSchema");


const loansController = async (request, response) => {
  const validation = customerSchema.safeParse(request.body);

  if (validation.success) {
    const customer = validation.data;

    const result = {
      customer: customer.name,
      loans: loansUseCase(customer),
    };

    return response.status(200).json(result);
  } else {
    return response
      .status(400)
      .json("The body of the request is outside of what is required");
  }

  return response.status(204);
};

module.exports = { loansController };
