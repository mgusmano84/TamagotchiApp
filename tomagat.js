
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

DigitalPal.prototype.play = function() {
	if (this.Bored =true) {
		console.log("Yay! Let's play!");
		this.Bored = false;
		this.Hungry = true; 
	}
	else {console.log("Not right now. Later?");
	}	
}

// DigitalPal.prototype.increaseAge = function() {
// 	this.Age++;
// 	 console.log("Happy Birthday to me! I am " + this.Age +
//         " old!");

// }


var dog = new DigitalPal(false, false, true, 0);

dog.outside = false;

//functions within each var
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

cat.destroyFurniture = function () {
	 if (this.houseQuality - 10 > 0) {
        this.houseQuality -= 10;
        this.bored = false;
        this.sleepy = true;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    } else {
        console.log("I've already destroyed it all!");
    }
}

cat.buyNewFurniture = function () {
	this.HouseCondition +=50;
	console.log("Are you sure about that?");
}


//calls what's in each var
console.log(dog);
console.log(cat);