const functions = require('./functions');

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull : matches only null
// toBeUndefined : matches only undefined
// toBeDefined :  is the opposite of toBeUndefined
// toBeTruthy : matches anything when an if statement is true
// toBeFalsy : matches anything when an if statement is false

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
   beforeEach(() => nameCheck());

   test('User is Joe', () => {
      const user = 'Joe';
      expect(user).toBe('Joe');
   });

   test('User is Jim', () => {
      const user = 'Jim';
      expect(user).toBe('Jim');
   });
});


test('Adds 2 + 2 to equal 4', () => {
   expect(functions.add(2, 2)).toBe(4); 
});

// toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5); 
 });

 // toBeNull
 test('Should be null', () => {
    expect(functions.isNull()).toBeNull(); 
 });

 // toBeFalsy
 test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy(); 
 });

 // toEqual
 test('User should be Shane Cunningham object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Shane', lastName: 'Cunningham'
    }); 
 })

 // Less than and greater than.  Logic called from within test function, not functions.js file.
 test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
 });

 test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
 });

 // Regex
 test('There is no I in team', () => {
     expect('team').not.toMatch(/I/);
 });

 // Arrays
 test('Admin should be in usernames', () => {
     usernames = ['john', 'karen', 'admin'];
     expect(usernames).toContain('admin');
 });

 // Working with async data

 // Promise
//  test('User fetched name should be Leanne Graham', () => {
//      expect.assertions(1);
//      return functions.fetchUser()
//      .then(data => {
//          expect(data.name).toEqual('Leanne Graham');
//      })
//  });

 // Async Await
 test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
});
