//command to run the project npx tsc index.ts
console.log("Hello TypeScript!");
//Implicit Types
var helloWorld = "Hello, World!";
//Explicit types
var firstName = "Vanni";
var age = 30;
var x = ["hello", 10];
//Enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antartica"] = 5] = "Antartica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
//usage
var region = Continents.Africa; //2
