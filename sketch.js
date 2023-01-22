function setup() {
	createCanvas(800,600);
	currentMin = minute();
  }
  
  function draw() {
	// change background color based on daytime (6am - 6pm) or nighttime (7pm - 5am)
	if (hour()>6 && hour() < 18) {
	  background(220);
	} else {
	  background(32);
	}
	
	noFill();
	//put clock in the center of canvas
	translate(width/2, height/2);
	//get the correct radians through mapping
	let h = map(hour(), 0, 24, 0, 2*PI)
	let m = map(minute(), 0, 60, 0, 2*PI)
	let s = map(second(), 0, 60, 0, 2*PI)
	//set different diameters for each arc
	let s_d = 625;
	let m_d = 500;
	let h_d = 100;
	
	//the "second" ring
	push();
	rotate(PI / 4);
	//background circle
	strokeWeight(2);
	stroke("white");
	ellipse(0,0,s_d, s_d-550); 
	//the white "halo"
	strokeWeight(9);
	stroke(255,255,255,100);
	// arc(0, 0, s_d, s_d-550, -HALF_PI, s-HALF_PI);
	//this standard arc statement works well for circles, but would result in a very uneven result if used for ellipse, so I changed it to another statment based on the stop "coordinates" instead of "angle"
	let s_endAngle = atan2((s_d-550)/2 * sin(s-HALF_PI), s_d/2 * cos(s-HALF_PI));
	arc(0, 0, s_d, s_d-550, -HALF_PI, s_endAngle);
	strokeWeight(4);
	stroke(113, 128, 172);
	arc(0, 0, s_d, s_d-550, -HALF_PI, s_endAngle);
  
	fill(113, 128, 172)
	circle(s_d/2 * cos(s-HALF_PI), (s_d-550)/2 * sin(s-HALF_PI),15)
	pop();
	
	//do the same for the "minute" ring
	push();
	rotate(PI/1.7);
	strokeWeight(2);
	stroke("white")
	ellipse(0,0,m_d-300, m_d);
	 
	strokeWeight(9);
	stroke(255,255,255,100);
	let m_endAngle = atan2((m_d)/2 * sin(m-PI), (m_d-300)/2 * cos(m-PI));
	// arc(0, 0, m_d-300, m_d, -PI, m-PI);
	arc(0, 0, m_d-300, m_d, -PI, m_endAngle);
  
	strokeWeight(5);
	stroke(168, 208, 219);
	// arc(0, 0, m_d-300, m_d, -PI, m-PI);
	arc(0, 0, m_d-300, m_d, -PI, m_endAngle);
	noStroke();
	fill(255,255,255,120)
	circle((m_d-300)/2 * cos(m-PI) ,(m_d)/2 * sin(m-PI), 25)
	fill(168, 208, 219)
	circle((m_d-300)/2 * cos(m-PI) ,(m_d)/2 * sin(m-PI), 20)
	pop();
  
	
	//repeat for the "hour" ring
	push();
	strokeWeight(2);
	stroke("white")
	circle(0, 0, h_d)
	
	strokeWeight(9);
	stroke(255,255,255,100);
	arc(0, 0, h_d, h_d, -HALF_PI, h-HALF_PI);
	
	strokeWeight(5);
	stroke(242, 184, 128);
	arc(0, 0, h_d, h_d, -HALF_PI, h-HALF_PI);
	fill(242, 184, 128)
	circle(h_d/2 * cos(h-HALF_PI),h_d/2 * sin(h-HALF_PI), 30)
	pop();
	
	//log out the minute
	if (currentMin !== minute()) {
	  print(minute());
	  currentMin = minute();
	}
	
  }