const Task=require('../models/Tasks')


const getAllTasks=(req,res)=>{
    res.send('all items')
}
const createTasks=async (req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json(req.body)
}
const getTask=(req,res)=>{
    res.send('get single task')
}
const updateTask=(req,res)=>{
    res.send('update task')
}
const deleteTask=(req,res)=>{
    res.send('delete task')
}
module.exports={
    getAllTasks,createTasks,getTask,updateTask,deleteTask
}