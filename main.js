//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
    this.status = status;
    this.color = color;
    this.hungry = hungry;
    this.owner = owner;
}

var sadie = new Dog('normal', 'black', false, undefined);
var moonshine = new Dog('normal', 'black', true, undefined);
var atticus = new Dog('normal', 'black', true, undefined);

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {

    this.cool = cool;

}

Human.prototype.feed = function (dog) {
    return dog.hungry = false;
}

Human.prototype.pet = function (dog) {
    return dog.status = 'happy';
}


var mason = new Human(false);
var julia = new Human(true);
// Instances of Human
// Needed: mason, julia
