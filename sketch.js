function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	colorMode(RGB, 255, 255, 255, 1);//color mode
	noFill();
}

function draw() {
	// create background
	background(225);

	// time
	var hour_s = map(hour(), 0, 24, -PI/2, PI/2); 
  	var minute_s = map(minute(), 0, 60, -PI, 0);
  	var second_s = map(second(), 0, 60, 100, 200);

	// change the origin point
	translate(width/2, height/2);

	// scale
	strokeWeight(5);
	stroke(200, 100, 90);
	line(50, 0, 100, 0);
	
	// second
	stroke(255, 0, 0);
	for(i = 0; i < 40; i++){
		strokeWeight((20*i)**(1/2));
		arc(0, 0, second_s, second_s, i*1.5*PI/40, (i+1)*1.5*PI/40);
	}

	// miniute
	strokeWeight(38);
	stroke(255, 90, 0, 0.4);
	arc(0, 0, 315, 315, -PI, 0);
	
	strokeWeight(38);
	stroke(255, 90, 0, 1);
	arc(0, 0, 315, 315, -PI, minute_s);

	// hour
	strokeWeight(50);
	stroke(255, 150, 0, 0.4);
	arc(0, 0, 445, 445, -PI/2, PI/2);

	strokeWeight(50);
	stroke(255, 150, 0, 1);
	arc(0, 0, 445, 445, -PI/2, hour_s);
}
