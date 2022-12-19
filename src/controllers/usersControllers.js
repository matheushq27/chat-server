const usersModel = require('../models/usersModels')

const getUsers = async (req, res) =>{
    const [users] = await usersModel.getUsers()
    return res.status(200).json(users)
}

const createUsers = async (req, res) =>{
    const [users] = await usersModel.createUsers(req.body)
    const idUser = users.insertId
    
    if(idUser)
    {
      const [userInfos] =  await usersModel.getUsersById(idUser)
      return res.status(201).json(userInfos[0])
    }
    return res.status(404).json({})
}

const getUsersById = async (req, res)=>{
    const {id} = req.params
    const user =  await usersModel.getUsersById(id)
    return res.status(201).json(user)
}

const getUsersByUserName = async (req, res)=>{
    const {userName} = req.params
    const [user] =  await usersModel.getUsersByUserName(userName)
    return res.status(201).json(user[0])
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

const login = async (req, res) =>{
    const {user, password} = req.body
    const resp = await usersModel.login(user, password)
    if(resp){
        return res.status(201).json({id: resp.id})
    }
    return res.status(201).json({id: ""})
}

module.exports = {
    getUsers,
    createUsers,
    getUsersByUserName,
    getUsersById,
    login
}