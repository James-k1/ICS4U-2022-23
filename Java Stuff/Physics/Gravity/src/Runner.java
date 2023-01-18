import java.util.ArrayList;
import java.util.Random;

import processing.core.PApplet;

public class Runner extends PApplet {
	private boolean held=false;
    private int screenWidth = 1200;
    private int screenHeight = 800;
	private double xShift = 0;
	private double yShift = 0;
	private double inc = 0.01;
	private double shiftInc = 20;
	private double zoom = 1;
	private long seed=0; 
	private Random generator;
	private final double G = 10; //G was 6 and mass was 5 for stability
	// private ArrayList<Vector> acceleration = new ArrayList<>();
	private ArrayList<Body> objects = new ArrayList<>();
    public void settings() {
		size(screenWidth, screenHeight);
	}
	public void setup(){
		background(0);	
		if (seed==0){
			seed = (long)Math.round(Math.random()*9999);
		}
		generator= new Random(seed);
		System.out.println("Seed: " + seed);


		// for (int i = 0; i < 100; i++) {
		// 	double mass=20*random();
		// 	objects.add(new Body(new double[] {-screenWidth/2 + screenWidth*random(),-screenHeight/2 + screenHeight*random()},new Vector(3*random(), 2*Math.PI*random()),mass,mass));
		// }
		
		int amount = 7; //17
		double angleInc = (Math.PI * 2) / amount;
		double angle = 0;
		double radius = 550;
		for (int i = 0; i < amount; i++) {
			objects.add(new Body(new double[] {radius  * Math.cos(angle), radius  * Math.sin(angle)}, new Vector(1 , angle - Math.PI/2), 10,10,500));
			
			angle += angleInc;

		}



		amount = 7; //17
		angleInc = (Math.PI * 2) / amount;
		angle = 0;
		radius=350; //200 350
		for (int i = 0; i < amount; i++) {
			objects.add(new Body(new double[] {radius  * Math.cos(angle), radius  * Math.sin(angle)}, new Vector(0.7 , angle +  Math.PI/2), 10,10,500)); //-
			
			angle += angleInc;

		}
		
	
	}
	public static void main(String[] passedArgs) {
		String[] appletArgs = new String[] { "Runner" };
		PApplet.main(appletArgs);
    }

	public void draw(){
		if (mousePressed && mouseButton==LEFT){
			zoom+=inc;
		}
		if (mousePressed && mouseButton==RIGHT){
			zoom-=inc;
		}
		if (keyPressed && keyCode==LEFT){
			xShift+=shiftInc;
		}
		if (keyPressed && keyCode==RIGHT){
			xShift-=shiftInc;
		}
		if (keyPressed && keyCode==UP){
			yShift+=shiftInc;
		}
		if (keyPressed && keyCode==DOWN){
			yShift-=shiftInc;
		}
		if(keyPressed && !held && key=='r'){
			held=true;
			objects.clear();
			seed = (long)Math.round(Math.random()*9999);
			zoom=1;
			xShift=0;
			yShift=0;
			generator= new Random(seed);
			System.out.println("Seed: " + seed);
	
	
			for (int i = 0; i < 100; i++) {
				double mass=20*random();
				objects.add(new Body(new double[] {-screenWidth/2 + screenWidth*random(),-screenHeight/2 + screenHeight*random()},new Vector(3*random(), 2*Math.PI*random()),mass,mass,500));
			}
		}
		
		
		translate((float)(screenWidth/2+xShift),(float)(screenHeight+yShift)/2);
		scale((float)0.5);
		scale((float)zoom);
		

		// background(0);	
		drawObjects(objects);
		applyGravity(objects);
		for (Body object : objects) {
			object.update();
		}

	}
	public void keyReleased() {
		held = false;
	}
	public void applyGravity(ArrayList<Body> objects){
		
		for (Body body : objects) {
			Vector netAcceleration = new Vector(0, 0);
			for (Body body2 : objects) {
				if (!body.equals(body2)){
					netAcceleration.add(new Vector((G*body2.getMass())/Math.pow(body.getDistanceTo(body2), 2),Math.atan2(body2.getPos()[1]-body.getPos()[1], body2.getPos()[0]-body.getPos()[0])));
				}
			}
			body.setAccelerationAtIndex(0, netAcceleration);
		}

	}
	

	public void drawObjects(ArrayList<Body> objects){
		for (Body body : objects) {
			double[] pos = body.getPos();
			stroke(255);
			circle((float)pos[0], (float)pos[1], (float)limit(0,100,body.getRadius()));
			Vector velocity = body.getVelocity();

			stroke(255,0,0);
			strokeWeight((float)4);
			fill(255);

			line((float)pos[0], (float)pos[1], (float)(pos[0]+(velocity.getMag()*10)*Math.cos(velocity.getDir())), (float)(pos[1]+(velocity.getMag()*10)*	Math.sin(velocity.getDir())));
			stroke(0);
		}
	}
	public double limit(double min, double max, double value){
		return Math.max(min,Math.min(value,max));
	}
	public double random() {
	
		return generator.nextDouble();
	
		
	}

  

}

    

