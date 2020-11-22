const express = require('express')
const router = express.Router()
const db =require('../../models')
const todo = require('../../models/todo')
const Todo = db.Todo

router.get('/new', (req, res) => {
    res.render('new')
})

router.post('/', (req, res) => {
    const UserId = req.user.id
    const name = req.body.name
    return Todo.create({name, UserId})
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    return Todo.findOne({ where : {id: id}})
        .then(todo => {
            res.render('edit', {todo: todo.toJSON()})
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const{ name, isDone} = req.body
    return Todo.findOne({where: {id: id}})
        .then(todo => todo.update({name: name, isDone: isDone === 'on'}))
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    const id =req.params.id
    return Todo.findOne({where: {id: id}})
        .then(todo => todo.destroy())
        .then(() => res.redirect('/'))
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    return Todo.findByPk(id)
        .then(todo => res.render('detail', { todo: todo.toJSON() }))
        .catch(error => console.log(error))
})


module.exports = router