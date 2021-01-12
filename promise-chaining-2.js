require('./src/db/mongoose.js');
const Task = require('./src/models/task');

// Task.findByIdAndDelete('5ff6a73f78386ff8165bea39')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   }).then((result) => {
//     console.log(result);
//   }).catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count
}

deleteTaskAndCount('5ffa9ec9cb349e99077d8100').then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
});