[{
  id: '',
  name: '',
  room: ''
}]

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    let user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    let user = this.users.filter((user) => user.id === id)[0]; //find user with this id

    if (user){                                              //remove if it exists
      this.users = this.users.filter((user) => user.id !== id); // updates array
    }

    return user;    //returns user object or undefined if none was found
  }

  getUser (id){
    return this.users.filter((user) => user.id === id)[0];
  }
  
  getUserList (room) {
    let users = this.users.filter((user) => user.room === room); // will return users with true for given room
    let namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};

//ES6 class creation

// class Person {
//     constructor (name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     getUserDescription () {
//       return `${this.name} is ${this.age} year(s) old.`;
//     }
// }
//
// let me = new Person('Jane', 30);
//
// let description = me.getUserDescription();
//
// console.log(description);
