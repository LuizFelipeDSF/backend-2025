/*Controller: */
const PaymentController = {

    /* Criar funções para cada operações que será realizada com a entidade.*/

    async createPayment(req, res) {
        try {
          const {data, recibo,valor, observacao} = req.body;
          return res.status(201).json({message: 'Payment created', data: {dataPayment, recibo, valor, observacao}});
        } catch (error) {
          return res.status(500).json({message: 'Internal server error'});
        }
    },

    async getPayments(req, res) {

    },
    async getPayment(req, res) {

    },
};

export default PaymentController;