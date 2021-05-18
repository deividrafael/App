var Userdb = require('../models/Users');

//criando e salvando usuários
exports.create = (req, res)=>{
    //validação da requisição
    if(!req.body){
        res.status(400).send({message: "Conteúdo não pode estar vazio!"});
        return;
    }

    //novo usuário
    const user = new Userdb({
        email: req.body.email,
        password: req.body.password 
    })

    //Salvando an abase de dados
    user
     .save(user)
     .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message: err.message || "Algum erro ocorreu"});
    })

}

//retornando usuários
exports.find = (req, res)=>{
    //retornando um usuário
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: "Não foi encontardo usuário com id:" + id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Erro ao consultar o usuário com id: " + id});
        })
    } else {
        //retornando usuários
        Userdb.find()
        .then(user=>{
            console.log(user)
            res.send(user)
        }).catch(err=>{
            res.status(500).send({message: err.message || "Algum erro ocorreu durante a consulta"});
        })        
    }
    
}


exports.show = (req, res) =>{

    Userdb.findById (req.params.id)
    
    .then(response => {
     if (response)
       return res.status(200).json(response);
    
    else return res.status(404).json({error : 'usuario nao encontrado'})

    }    )

    .catch(error => { 
        return res.status(500).json(error);
    });
}


//atualizando um usuario por id
exports.update = (req, res)=>{
 if(!req.body){
     return res
        .status(400)
        .send({message: "Os dados a atulalizar não podem estar vazios"})
 }

 const id = req.params.id;
 Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({message: `O usuário ${id} não pode ser atualizado. Pois o usuário não foi encontrado`})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "Erro ao atualizar informação do usuário"})
    })
}

//deletando um usuário
exports.delete = (req, res)=>{

const id = req.params.id;

Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: `O usuário ${id} não pode ser atualizado. Pois o usuário não foi encontrado`})
        }else{
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