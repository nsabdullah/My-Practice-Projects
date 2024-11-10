/*









let Cumilla = document.querySelectorAll(".details-of-cumilla");

let car = [
  {
    Name: "Bus",
    Description: "It is bus. Which can carry people. Everyday we need it. This technology is very important for us",
    Value: "The car value is more than another car"
  },
  {
    Name: "CNG",
    Description: "It is Cng. Which can carry people. Everyday we need it. This technology is very important for us",
    Value: "The CNG value is more ethan another car"
  },
  {
    Name: "RIKSHAW",
    Description: "It is RIKSHAW. Which can carry people. Everyday we need it. This technology is very important for us",
    Value: "The RIKSHAW value is more ethan another car"
  },
  {
    Name: "BAN",
    Description: "It is BAN. Which can carry people. Everyday we need it. This technology is very important for us",
    Value: "The BAN value is more ethan another car"
  },
  {
    Name: "HONDA",
    Description: "It is HONDA. Which can carry us. Everyday we need it. This technology is very important for us",
    Value: "The HONDA value is more ethan another car"
  },
  {
    Name: "MICRO",
    Description: "It is MICRO. Which can carry us. Everyday we need it. This technology is very important for us",
    Value: "The MICRO value is more ethan another car"
  },
 {
    Name: "CYCAL",
    Description: "It is CYCAL. Which can carry us. Everyday we need it. This technology is very important for us",
    Value: "The CYCAL value is more ethan another car"
  }
];




car.forEach(function(opp){
  forloop(opp);
});


function forloop(Car){
  let forloop =   `<div class="Car">
        <h4>${Car.Name}</h4>
        <h5>${Car.Description}</h5>
        <h6>${Car.Value}</h6>
       </div>`;
       Cumilla.innerHTML += forloop;
};


*/

let Cumilla = document.querySelector(".details-of-cumilla");

let car = [
  {
    Name: "Bus",
    Description:
      "It is bus. Which can carry people. Everyday we need it. This technology is very important for us",
    Value: "The car value is more than another car",
  },
  {
    Name: "CNG",
    Description:
      "It is CNG. Which can carry people. Everyday we need it. This technology is very important for us",
    Value: "The CNG value is more than another car",
  },
  {
    Name: "RIKSHAW",
    Description:
      "It is RIKSHAW. Which can carry people. Everyday we need it. This technology is very important for us",
    Value: "The RIKSHAW value is more than another car",
  },
  {
    Name: "BAN",
    Description:
      "It is BAN. Which can carry people. Everyday we need it. This technology is very important for us",
    Value: "The BAN value is more than another car",
  },
  {
    Name: "HONDA",
    Description:
      "It is HONDA. Which can carry us. Everyday we need it. This technology is very important for us",
    Value: "The HONDA value is more than another car",
  },
  {
    Name: "MICRO",
    Description:
      "It is MICRO. Which can carry us. Everyday we need it. This technology is very important for us",
    Value: "The MICRO value is more than another car",
  },
  {
    Name: "CYCAL",
    Description:
      "It is CYCAL. Which can carry us. Everyday we need it. This technology is very important for us",
    Value: "The CYCAL value is more than another car",
  },
];

car.forEach(function (opp) {
  forloop(opp);
});

function forloop(Car) {
  let forloop = `<div class="Car">
        <h4>${Car.Name}</h4>
        <h5>${Car.Description}</h5>
        <h6>${Car.Value}</h6>
       </div>`;
  Cumilla.innerHTML += forloop;
}
