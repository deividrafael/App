const mongoose = require('mongoose');
var Hospital = require('../models/Hospital');


exports.create = async (req, res) => {
    //validação da requisição

    //novo hospital
    const hospital = await new Hospital({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password: req.body.password,
        contrato: req.body.contrato,
        tel: req.body.tel

    })

    //Salvando na base de dados
    hospital
        .save(hospital)
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            res.status(500).send({ message: "Algum erro ocorreu" });
        })

}

//retornando hospitais
exports.find = async (req, res)=>{
    //retornando um hospital
    if (req.query.email) {
        const id = req.query.email;
        Hospital.findById(email)
        .then(data =>{
            if(!data){
                res.status(404).send({message: "Não foi encontardo hospital com id:" + id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Erro ao consultar o hospital com id: " + id});
        })
    } else {
        //retornando hospitais
        Hospital.find()
        .then(hospital=>{
            console.log(hospital)
            res.send(hospital)
        }).catch(err=>{
            res.status(500).send({message: err.message || "Algum erro ocorreu durante a consulta"});
        })        
    }
    
}

exports.find = (req,res) => {
    Hospital.find()
    .then(hospital=>{
        console.log(hospital)
        res.send(hospital)
    }).catch(err=>{
        res.status(500).send({message: err.message || "Algum erro ocorreu durante a consulta"});
    })        
}

exports.show = (req, res) => {

    const {email} = req.params

    Hospital.findOne({email})

        .then(response => {
            if (response)

                return res.status(200).json(response);

            else return res.status(404).json({ error: 'hospital nao encontrado' })

        })

        .catch(error => {
            return res.status(500).json(error);
        });
}

//atualizando um hospital por id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Os dados a atulalizar não podem estar vazios" })
    }

    const id = req.params.id;
    Hospital.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `O hospital ${id} não pode ser atualizado. Pois o hospital não foi encontrado` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Erro ao atualizar informação do hospital" })
        })
}

//deletando um hospital
exports.delete = (req, res) => {

    const id = req.params.id;

    Hospital.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `O hospital ${id} não pode ser atualizado. Pois o hospital não foi encontrado` })
            } else {
                res.send({
                    message: "hospital deletado com sucesso!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Não foi possível deletar hospital com id=" + id
            });
        });

}

exports.findOne = async (req, res) => {
    // try {
    const { email, password } = req.body;

    const hospital = await Hospital.findOne({ email });

    console.log(hospital)

    if (!hospital) {
        console.log(hospital)
        return res.status(400).json({ error: "hospital not found" });
    }

    if (!(await hospital.compareHash(password))) {
        return res.status(400).json({ error: "Invalid password" });
    }

    return res.json({
        hospital,
        token: hospital.generateToken()
    });

}