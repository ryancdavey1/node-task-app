require('./src/db/mongoose.js');
const Task = require('./src/models/task');

Task.findByIdAndDelete('5ff6a73f78386ff8165bea39')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  }).then((result) => {
    console.log(result);
  }).catch((e) => {
    console.log(e);
  });