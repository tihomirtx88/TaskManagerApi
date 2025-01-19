const getAllTasks = (req, res) =>{
    res.send('All tasks');
};

const createTasks = (req, res) =>{
    res.send('Create tasks');
};

const getTask = (req, res) =>{
    res.send('Get tasks');
};

const deleteTask = (req, res) =>{
    res.send('Delete tasks');
};

const updateTask = (req, res) =>{
    res.send('Update tasks');
};

module.exports = {
    getAllTasks, 
    createTasks, 
    getTask,
    deleteTask,
    updateTask
};