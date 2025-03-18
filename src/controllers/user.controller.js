import {z} from "zod";

const PaymentSchema = z.object({
    nome: z.string().nome().min(6),
    email: z.string().email(),
    senha: z.string().senha().min(8)
});

const UserController = {

    /* Criar funções para cada operações que será realizada com a entidade.*/

    async createUser(req, res) {
        try {
          const {nome, email, senha} = req.body;
          UserSchema.parse({nome, email, senha});
          return res.status(201).json({message: 'User created', data: {dataUser, nome, email, senha}});
        } catch (error) {
          if(error instanceof z.ZodError){
            return res.status(400).json({message: "Validation error", details: error.erros});
          }
          return res.status(500).json({message: 'Internal server error'});
        }
    },
};

export default PaymentController;