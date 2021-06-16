const mongoose = require('mongoose');
var Paciente = require('../models/Paciente');


exports.create = async (req, res) => {
    //validação da requisição

    //novo hospital
    const paciente = await new Paciente({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password: req.body.password,
        contrato: req.body.contrato,
        tel: req.body.tel,
        cpf: req.body.cpf,
        cns: req.body.cns,
        dateNasc: req.body.dateNasc,
        gender: req.body.gender,
        temperature: req.body.temperature,
        ox: req.body.ox,
        pa: req.body.pa,
        description: req.body.description,
        type: req.body.type
    })

    //Salvando na base de dados
    paciente
        .save(paciente)
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            res.status(500).send({ message: "Algum erro ocorreu" });
        })

}


//retornando pacientes
exports.find = async (req, res)=>{
    //retornando um paciente
    if (req.query.email) {
        const id = req.query.email;
        Paciente.findById(email)
        .then(data =>{
            if(!data){
                res.status(404).send({message: "Não foi encontardo paciente com id:" + id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Erro ao consultar o paciente com id: " + id});
        })
    } else {
        //retornando pacientes
        Paciente.find()
        .then(paciente=>{
            console.log(paciente)
            res.send(paciente)
        }).catch(err=>{
            res.status(500).send({message: err.message || "Algum erro ocorreu durante a consulta"});
        })        
    }
    
}

exports.find = (req,res) => {
    Paciente.find()
    .then(paciente=>{
        console.log(paciente)
        res.send(paciente)
    }).catch(err=>{
        res.status(500).send({message: err.message || "Algum erro ocorreu durante a consulta"});
    })        
}

exports.show = (req, res) => {

    const {email} = req.params

    Paciente.findOne({email})

        .then(response => {
            if (response)

                return res.status(200).json(response);

            else return res.status(404).json({ error: 'paciente nao encontrado' })

        })

        .catch(error => {
            return res.status(500).json(error);
        });
}

//atualizando um paciente por id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Os dados a atulalizar não podem estar vazios" })
    }

    const id = req.params.id;
    Paciente.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `O paciente ${id} não pode ser atualizado. Pois o paciente não foi encontrado` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Erro ao atualizar informação do paciente" })
        })
}

//deletando um paciente
exports.delete = (req, res) => {

    const id = req.params.id;

    Paciente.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `O paciente ${id} não pode ser atualizado. Pois o paciente não foi encontrado` })
            } else {
                res.send({
                    message: "paciente deletado com sucesso!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não foi possível deletar paciente com id=" + id
            });
        });

}

exports.findOne = async (req, res) => {
    // try {
    const { email, password } = req.body;

    const paciente = await Paciente.findOne({ email });

    console.log(paciente)

    if (!paciente) {
        console.log(paciente)
        return res.status(400).json({ error: "paciente not found" });
    }

    if (!(await paciente.compareHash(password))) {
        return res.status(400).json({ error: "Invalid password" });
    }

    return res.json({
        paciente,
        token: paciente.generateToken()
    });

}