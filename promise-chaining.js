require('./src/db/mongoose.js');
const User = require('./src/models/user');

User.findByIdAndUpdate('5ff5367c06dd9ccd6f4abb3c', { age: 1} ).then((user) => {
  console.log(user);
  return User.countDocuments({ age: 1 });
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
})