import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;
const login = (req, res) => {
    try{
        userSchema.findOne({email: req.body.email},(error, usuario) => {
            if(!usuario){
                return res.status(401).json({
                    statusCode: 500,
                    message: "Usuário não encontrado",
                    data: {
                        email: req.body.email
                    }
                })
            }

            const validacaoSenha = bcrypt.compareSync(req.body.password, usuario.password)
                if(!validacaoSenha) {
                    return res.status(401).json({
                        statusCode: 401,
                        message: "Não Autorizado"
                    })
                }
            
            const token = jwt.sign({name: usuario.name}, SECRET)

            res.status(200).json({
                statusCode: 200,
                message: "Login Realizado com Sucesso",
                data:{ token }
            })
        });

    } catch(error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        })
    }
}

const verifToken = (req, res, next) => {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.slipt(" ")[1];

    if(!token) {
        return res.status(401).json({
            statusCode: 401,
            message: "Não Autorizado"
        })
    } 
    try {
        jwt.verify(token, SECRET);
        next();

    } catch(error) {
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: "Erro token. Não válido"  
        })
    }

}
export default { 
    login,
    verifToken
}