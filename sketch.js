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
  	var second_s = map(second(), 0, 60, 50, 200);

	// change the origin point
	translate(width/2, height/2);

	// scale
	strokeWeight(7);
	if(hour()<12){
		// morning
		stroke(0, 200, 255);
		line(25, 0, 100, 0);
	}else{
		// afternoon
		stroke(100, 0, 255);
		line(25, 0, 100, 0);
	}
	
	// second
	stroke(255, 0, 0);
	strokeWeight(30)
	// arc(0, 0, second_s, second_s, 5/4*PI, 1.5*PI);
	for(i = 0; i < 30; i++){
		strokeWeight(i);
		arc(0, 0, second_s, second_s, i*1.5*PI/30, (i+1)*1.5*PI/30);
	}

	// miniute
	strokeWeight(40);
	stroke(255, 90, 0, 0.4);
	arc(0, 0, 300, 300, -PI, 0);
	
	strokeWeight(40);
	stroke(255, 90, 0, 1);
	arc(0, 0, 300, 300, -PI, minute_s);

	// hour
	strokeWeight(50);
	stroke(255, 150, 0, 0.4);
	arc(0, 0, 430, 430, -PI/2, PI/2);

	strokeWeight(50);
	stroke(255, 150, 0, 1);
	arc(0, 0, 430, 430, -PI/2, hour_s);

}
