import { api } from "./config/axiosConfig"

const url = 'credit_agreements';

export const CreditAgreementApi = {
  getPaymentOptions: async function (total) {
    const response = await api.request({
      url: url,
      method: "GET",
      params: {
        totalWithTax: total,
      }
    })
    return response.data;
  },
}


export default CreditAgreementApi;