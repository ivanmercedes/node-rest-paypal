const { response } = require("express");
const { payOrderApi, captureOrderApi } = require("../models/paypal-api");

const createOrder = async (req, res = response) => {
  try {

    // Order example
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "220.75",
          },
          description: "Test Payment",
        },
      ],
      application_context: {
        brand_name: "Mi tienda Nodejs",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `${process.env.BASE_URL}:${process.env.PORT}/capture-order`,
        cancel_url: `${process.env.BASE_URL}:${process.env.PORT}/cancel-order`,
      },
    };

    const { data } = await payOrderApi(order);
    return res.json(data);
  } catch (error) {
    return res.status(500).json("Algo salio mal");
  }
};

const captureOrder = async (req, res = response) => {
  const { token, PayerID } = req.query;
  await captureOrderApi(token);
  return res.redirect("/done.html");
};

const cancelOrder = (req, res = response) => {
  return res.redirect("/");
};

module.exports = {
  createOrder,
  captureOrder,
  cancelOrder,
};
