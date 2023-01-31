const Joker = require('../models/joker.models');

const obtenerBromas = (req, res) => {
    Joker.find(req.body)
    .then((resultado)=>{
        res.json(resultado);
    }).catch((error)=>{
        console.log(error);
    });
}

const obtenerBromasId = (req, res) => {
    Joker.find({_id: req.params.id},req.body)
    .then((resultado)=> {
        console.log(req.body);
        res.json(resultado);
    }).catch((error)=>{
        console.log(error);
    });
}


    const crearBroma = (req, res) => {
    Joker.create(req.body)
    .then((resultado)=>{
        console.log(req.body);
        res.json({user: resultado});
    }).catch((error)=>{
        console.log(error)
    });
}


const editarBroma = (req, res) => {
    Joker.updateOne({_id: req.params.id}, req.body)
    .then((resultado) => {
        console.log(req.body);
        res.json(resultado);
    }).catch( (error) => {
        console.log(error);
    });

}

const eliminarBroma = (req, res) => {
    Joker.deleteOne({_id: req.params.id})
        .then( ( resultado ) => {
            res.json(resultado);
        })
        .catch( ( error ) => {
            console.log(error);
        })
}


module.exports = {
    obtenerBromas,
    obtenerBromasId,
    crearBroma,
    editarBroma,
    eliminarBroma
}

