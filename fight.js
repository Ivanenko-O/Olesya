function Animal(hp, nameAnimal, strength, resistance) {
	this.hp = hp;
	this.nameAnimal = nameAnimal;
	this.strength = strength;
	this.resistance = resistance;
}

Animal.prototype.fight = function (enemy) {
  var hit_power= randInterval(this.strength - 5,this.strength + 5);

  if (Math.round(Math.random()*10) == 1 ){
  	hit_power *= 1.7;
  	console.log(this.nameAnimal + " made critical Hit!!!");
  }

   enemy.resist(Math.round(hit_power)/**/);
 
 //console.log(this.nameAnimal + this.hp +"fight" + Fkill); //  в будущем тут этого не будет. все будет в resist
}

// here should be all my computing
Animal.prototype.resist = function(hit_power) {

	 console.log(this.nameAnimal + "["+this.hp+"/100] got hit on " + (hit_power- this.resistance) + " points. hp left [" + (this.hp -= hit_power - this.resistance) +"/100]" );
	 
	 //console.log("hp left [" + this.hp +"/100]");
}

function Snake() {
	Animal.apply(this,arguments);
}
Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Animal;
 

 function Ratatu() {
	Animal.apply(this,arguments);
}
Ratatu.prototype = Object.create(Animal.prototype);
Ratatu.prototype.constructor = Animal;



function randInterval (min, max) {
	rand = Math.round(Math.random()*(max-min)+min);
	return rand;
}

//new Snake(100, "egor", 78, 40).fight();
var snake = new Snake(100, "Snake", 20, 4);
var rat = new Ratatu(100, "Cookrat", 10, 4);


	rat.fight(snake);
	snake.fight(rat);

	rat.fight(snake);
	snake.fight(rat);


	rat.fight(snake);
	snake.fight(rat);



 //dont hiss - I want train to use timer
var timer = setInterval(function() {
	//console.log("step");
}, 1000);
 

//setTimeout(function() {
//clearInterval(timer);
//console.log("go");
//}, 4000);


