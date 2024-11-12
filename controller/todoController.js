
const todos = require('../model/todo');

// Get 
const getTodos = async (req, res) => {
  const { page,limit } = req.query;
  
  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);

    // Calculate start and end indices based on page and limit
    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = pageNumber * limitNumber;
  
  try { 
    const todos = await todos.find()
  const paginatedtodos = todos.slice(startIndex, endIndex);
  //res.json(paginatedtodos);
    // res.status(200).send(todos);
    res.status(200).send(paginatedtodos);
      } catch (error) {
        res.status(400).send({ error: error.message });
      }

};


const addTodo = async (req, res) => {
    try { 
        const todo= new todo(req.body)
        await todo.save()
        res.status(200).send({ msg: 'A new todo has been Created',todo:todo});
          } catch (error) {
            res.status(400).send({ error: error.message });
          }
};
// Update a 
const updateTodo = async (req, res) => {
    const {todoID}=req.params
    try { 
        const todo = await todos.findOne({_id:todoID})
       
       await todo.findByIdAndUpdate({_id:todoID},req.body)
       res.status(200).send({ msg:`Todo with Id:${todoID} has been updated`});
       
          } catch (error) {
            res.status(400).send({ error: error.message });
          }
};

// Delete 
const deleteTodo = async (req, res) => {
    const {todoID}=req.params
    try { 
        const todo = await todos.findOne({_id:todoID})
       await todo.findByIdAndDelete({_id:todoID})
       res.status(200).send({ msg:`Todo with Id:${todoID} has been deleted`});
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

};
module.exports = {getTodos,addTodo,updateTodo,deleteTodo};