const usersModel = require('../models/usersModels')

const getUsers = async (req, res) =>{
    const [users] = await usersModel.getUsers()
    return res.status(200).json(users)
}

const createUsers = async (req, res) =>{
    const [users] = await usersModel.createUsers(req.body)
    return res.status(201).json(users)
}

const deleteCategories = async (req, res) =>{
    const {id} = req.params
    await usersModel.deleteCategories(id)
    return res.status(204).json({message: "Deletado com sucesso!"})
}

const updateCategories = async (req, res) =>{
    
    const {id} = req.params
    await usersModel.updateCategories(id, req.body)
    return res.status(204).json({message: "Atualizado com sucesso!"})
}

module.exports = {
    getUsers,
    createUsers
}