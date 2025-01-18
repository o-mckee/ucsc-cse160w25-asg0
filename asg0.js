var canvas;
var ctx;

// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  canvas = document.getElementById('cnv1');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  ctx.fillRect(0, 0, canvas.width, canvas.height);        // Fill a rectangle with the color


  var v1 = new Vector3([45, 45, 0.0]);
  
  console.log(v1.elements[0]);
  drawVector(v1, 'red');
}

function drawVector(v, color) {
  let cx = canvas.width / 2;
  let cy = canvas.height / 2;

  ctx.strokeStyle = color;

  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + (v.elements[0] * 20), cy - (v.elements[1] * 20));
  ctx.stroke();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function angleBetween(v1, v2) {
  return (Math.acos(Vector3.dot(v1, v2) / (v1.magnitude() * v2.magnitude())) * 180) / Math.PI;
}

function areaTriangle(v1, v2) {
  return (Vector3.cross(v1, v2).magnitude()) / 2;
}

function handleDrawEvent(){
  // clear canvas
  clearCanvas();

  let v1 = document.getElementById("v1x").value;
  let v2 = document.getElementById("v1y").value;
  let v3 = document.getElementById("v2x").value;
  let v4 = document.getElementById("v2y").value;
  var vec1 = new Vector3([v1, v2, 0.0]);
  var vec2 = new Vector3([v3, v4, 0.0]);

  drawVector(vec1, 'red');
  drawVector(vec2, 'blue');
}

function handleDrawOperationEvent(){
  clearCanvas();

  let v1 = document.getElementById("v1x").value;
  let v2 = document.getElementById("v1y").value;
  let v3 = document.getElementById("v2x").value;
  let v4 = document.getElementById("v2y").value;
  var vec1 = new Vector3([v1, v2, 0.0]);
  var vec2 = new Vector3([v3, v4, 0.0]);

  let scalar = document.getElementById("scalar").value;

  drawVector(vec1, 'red');
  drawVector(vec2, 'blue');

  let oper = document.getElementById("operation").value;
  
  if (oper == "add") {

    console.log("addition");
    var vec3 = vec1.add(vec2);
    drawVector(vec3, 'green');

  } else if (oper == "subtract") {

    console.log("subtraction");
    var vec3 = vec1.sub(vec2);
    drawVector(vec3, 'green');

  } else if (oper == "multiply") {

    console.log("multiplication");
    var vec3 = vec1.mul(scalar);
    var vec4 = vec2.mul(scalar);

    drawVector(vec3, 'green');
    drawVector(vec4, 'green');

  } else if (oper == "divide") {

    console.log("division");
    var vec3 = vec1.div(scalar);
    var vec4 = vec2.div(scalar);

    drawVector(vec3, 'green');
    drawVector(vec4, 'green');

  } else if (oper == "magnitude") {

    console.log(vec1.magnitude());
    console.log(vec2.magnitude());

  } else if (oper == "normalize") {

    drawVector(vec1.normalize(), 'green');
    drawVector(vec2.normalize(), 'green');

  } else if (oper == "anglebetween") {

    console.log(angleBetween(vec1, vec2));

  } else if (oper == "area") {

    console.log(areaTriangle(vec1, vec2));

  }

}
