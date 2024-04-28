const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async (req, res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(erro) {
        res.status(400).json({message:error.message});
    }
};

exports.createUser = async (req, res) => {
    const user = new UserActivation(req.body);
    try {
        const saveUser = await user.save();
        res.status(201).json(savedUser);
    }catch(error){
        res.status(400).json({message:error.message})
    }
};

exports.updateUser =async (req,res) => {
    try{
        const updateUser = await UserActivation.findByIdandUpdate(req.params.id, res.body, {new:true});
        res.status(200).json(updateUser);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};

exports.deleteUser = async (req,res) => {
    try{
        await UserActivation.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Usuário deletado com sucessso "});
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

exports.rotaAutenticada = async (req,res) =>{
    res.status(200).json({
        statusCode: 200,
        message: "Rota Autenticada"
    })
}
