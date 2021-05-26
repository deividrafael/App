var Userdb = require('../models/Users');
//const authMiddleware = require("../middlewares/auth");


//criando e salvando usuários
exports.create = async (req, res) => {
    //validação da requisição


    //novo usuário
    const user = await new Userdb({
        email: req.body.email,
        password: req.body.password
    })

    //Salvando an abase de dados
    user
        .save(user)
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            res.status(500).send({ message: "Algum erro ocorreu" });
        })

}



//retornando usuários
exports.find = (req, res) => {
    //retornando um usuário
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Não foi encontardo usuário com id:" + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Erro ao consultar o usuário com id: " + id });
            })
    } else {
        //retornando usuários
        Userdb.find()
            .then(user => {
                console.log(user)
                res.send(user)
            }).catch(err => {
                res.status(500).send({ message: err.message || "Algum erro ocorreu durante a consulta" });
            })
    }

}


exports.show = (req, res) => {

    Userdb.findById(req.params.id)

        .then(response => {
            if (response)
                return res.status(200).json(response);

            else return res.status(404).json({ error: 'usuario nao encontrado' })

        })

        .catch(error => {
            return res.status(500).json(error);
        });
}


//atualizando um usuario por id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Os dados a atulalizar não podem estar vazios" })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `O usuário ${id} não pode ser atualizado. Pois o usuário não foi encontrado` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Erro ao atualizar informação do usuário" })
        })
}

//deletando um usuário
exports.delete = (req, res) => {

    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `O usuário ${id} não pode ser atualizado. Pois o usuário não foi encontrado` })
            } else {
                res.send({
                    message: "Usuario deletado com sucesso!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não foi possível deletar usuario com id=" + id
            });
        });

}

exports.find = async (req, res) => {
    // try {
    const { email, password } = req.body;

    const user = await Userdb.findOne({ email });

    console.log(user)

    if (!user) {
        console.log(user)
        return res.status(400).json({ error: "User not found" });
    }

    if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: "Invalid password" });
    }

    return res.json({
        user,
        token: user.generateToken()
    });

}





