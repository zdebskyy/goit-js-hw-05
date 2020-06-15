
const User = function ({name, age, followers}){
    this.name = String (name);
    this.age = Number(age);
    this.followers = Number(followers);

}

User.prototype.getInfo = function() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    
}

const mango = new User({
    name: 'Mango',
    age: 20,
    followers: 20,
  });
  
  mango.getInfo(); // User Mango is 20 years old and has 20 followers
  
  const poly = new User({
    name: 'Poly',
    age: 30,
    followers: 17,
  });
  
  poly.getInfo(); // User Poly is 30 years old and has 17 followers