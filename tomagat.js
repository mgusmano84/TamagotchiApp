
//constuctor

function DigitalPal (hungry, sleepy, bored, age){
	this.Hungry= hungry;
	this.Sleepy= sleepy;
	this.Bored= bored;
	this.Age= age;
}

DigitalPal.prototype.feed = function() {
	if (this.Hungry === true) {
		console.log("That was yummy!")
	}
	else {
		console.log("No Thanks, I'm full")
	}
}

DigitalPal.prototype.sleep = function() {
	if (this.Sleepy == true) {
		console.log("Zzzzzzzz");
		this.Sleepy = false;
		this.Bored = true;
		this.increaseAge();
	}	
	else {
		console.log("No way! I'm not tired.")
	}
}

DigitalPal.prototype.play = function () {
	if (this.Bored =true) {
		console.log("Yay! Let's play!");
		this.Bored = false;
		this.Hungry = true; 
	}
	else console.log("Not right now. Later?");
	}	
}

DigitalPal.prototype.increaseAge= function () {
	this.age++;
	 console.log("Happy Birthday to me! I am " + this.age +
        " old!");

}


var dog = new DigitalPal(false, false, true, 0, false);

dog.outside = false;

dog.bark= function (){
	console.log("Woof! Woof!");
}
dog.goOutside = function () {
	if (this.outside === false) {
		console.log("Yay! I love the outdoors!")
		this.outside = true;
		this.bark()
	}
	else {
		console.log("We're already outside though...");
	}
}

dog.goInside = function () {
	if (this.outside === true) {
		console.log("Do we have to?");
		this.outside = false;
	}
	else {
		console.log("I'm already inside...");
	}
}

var cat = new DigitalPal(false, false, true, 0);

cat.HouseCondition = 100;



console.log(dog);
console.log(cat);