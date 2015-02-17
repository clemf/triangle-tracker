var triangleTracker = function(side1, side2, side3) {
  var sideOne = parseFloat(side1);
  var sideTwo = parseFloat(side2);
  var sideThree = parseFloat(side3);

  var newTriangle = { side1: sideOne,
                      side2: sideTwo,
                      side3: sideThree,
                      type: ""
  };

  if( isNan(sidOne) || isNan(sideTwo) || isNan(sideThree)){
    return "ERROR: PLEASE ENTER NUMBER FOR ALL THREE SIDES!";
  }
  if(sideOne+SideTwo<SideThree || sideTwo+sideThree<sideOne || sideOne+sideThree<sideTwo){
    return "ERROR: THESE ARE NOT VALID TRIANGLE DIMENSIONS!";
  }
  if(sideOne<=0 || sideTwo <= 0 || sideThree <= 0){
    return "ERROR: ALL SIDES MUST HAVE A VALUE GREATER THAN ZERO!";
  }
  if(sideOne===sideTwo===sideThree){
    newTriangle.type = "Equilateral";
    return newTriangle;
  }else if(sideOne===sideTwo || sideOne===sideThree || sideTwo===sideThree){
    newTriangle.type = "Isosceles";
    return newTriangle;
  }else {
    newTriangle.type = "Scalene";
    return newTriangle;
  }


};
