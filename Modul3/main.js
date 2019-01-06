var person = { 
  name: {
    first : 'Bob', 
    last : 'Smith'
  },
  name1: {
    firstname : 'Mihai',
    lastname: 'Georgescu'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.' 
          + 'He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.'
          );
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  }
};

var ref = document.getElementById('submit');

ref.addEventListener("click", (ev)=>{
  ev.preventDefault();
  
  const myDataName = document.getElementById('data').value;

  const myDataValue = document.getElementById('dataValue').value ;

  person[myDataName] = myDataValue;

  console.dir(person);


});