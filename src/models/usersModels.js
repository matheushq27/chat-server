const connection = require('./connection')

const getUsers = async () =>{
    const users = await connection.execute('SELECT * FROM users')
    return users
}

const createUsers = async (users) =>{
    const {name, surname, user, email, password} = users
    const query = 'INSERT INTO users (name, surname, user, email, password) VALUES (?, ?, ?, ?, ?)'
    const resp = await connection.execute(query, [name, surname, user, email, password])
    return resp
}

const deleteCategories = async (id) =>{
    const removeDebt = await connection.execute('DELETE FROM categories WHERE id = ?', [id])
    return removeDebt
}

const updateCategories = async (id, debts) =>{
    const {name, type} = debts
    const query = 'UPDATE categories SET name = ?, type = ? WHERE id = ?'
    const updateDebt = await connection.execute(query, [name, type, id])
    return updateDebt
}



module.exports = {
    getUsers,
    createUsers
}