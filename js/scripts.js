var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";
var bigger = dinosaur.toUpperCase();


var biggerDinosaur = text.replace('Velociraptor', bigger);
console.log(biggerDinosaur.substr(0, (biggerDinosaur.length/2)));