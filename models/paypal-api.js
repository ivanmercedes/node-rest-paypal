const axiosClient = require("../helpers/axiosClient");

const payOrderApi = async (order) => {
  return await axiosClient.post("/v2/checkout/orders", order);
};

const captureOrderApi = async (id) => {
  const response = await axiosClient.post(
    `/v2/checkout/orders/${id}/capture`,
    {},
  );
  return response;
};

module.exports = {
  payOrderApi,
  captureOrderApi,
};
