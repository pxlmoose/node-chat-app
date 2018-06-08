const expect = require('expect');
const {Users} = require('./users');



describe('Users', () => {
  let users;
  beforeEach(() => {        //this will create seed data for each test
    users = new Users();
    users.users = [{
      id: '1',
      name: 'John',
      room: 'rooom'
    }, {
      id: '2',
      name: 'Jane',
      room: 'rooom'
    }, {
      id: '3',
      name: 'Meg',
      room: 'wroom'
    }];
  });

  it('should add new user', () =>{
    let users = new Users();
    let user = {
      id: '123',
      name: 'Jane',
      room: 'The Room'
    };
    let resUsers = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for rooom', () => {
    let userList = users.getUserList('rooom');

    expect(userList).toEqual(['John', 'Jane']);
  });

  it('should return names for wroom', () => {
    let userList = users.getUserList('wroom');

    expect(userList).toEqual(['Meg']);
  });

  it('should remove one user', () => {
    let userId = '3';
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    let userId = '5';
    let user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let userId = '2';
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  })

  it('should not find user', () => {
    let userId = '5';
    let user = users.getUser(userId);

    expect(user).toNotExist();
  })
});
