function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	noFill();
}

function draw() {
	// create background
	background(225);

	//maping value
	var hour_s = map(hour(), 0, 24, 0, 2*PI); 
  	var minute_s = map(minute(), 0, 60, 0, 2*PI);
  	var second_s = map(second(), 0, 60, 0, 2*PI);

	// change the origin point
	translate(width/2, height/2);
	
	push();
	stroke(255,50,0)
	strokeWeight(39);
	rotate(hour_s);
	arc(0, 0, 350, 350, -PI/2 + 2*PI/45 , -PI/2 + 2*PI/45*44);
	pop();

	push();
	stroke(255,150,0)
	strokeWeight(30);
	rotate(minute_s);
	arc(0, 0, 250, 250, -PI/2 + 2*PI/40 , -PI/2 + 2*PI/40*39);
	pop();

	push();
	stroke(255,200,0)
	strokeWeight(20);
	rotate(second_s);
	arc(0, 0, 160, 160, -PI/2 + 2*PI/35 , -PI/2 + 2*PI/35*34);
	pop();
}
