import java.util.ArrayList;
import java.util.Random;

import processing.core.PApplet;

public class Runner extends PApplet {
    private int screenWidth = 500;
    private int screenHeight = 500;
	private long seed = 33393; //3426 41723 3644
	private Random generator = new Random(seed);
	private final double G = 3; //G was 6 and mass was 5 for stability
	// private ArrayList<Vector> acceleration = new ArrayList<>();
	private ArrayList<Body> objects = new ArrayList<>();
    public void settings() {
		size(screenWidth, screenHeight);
	}
	public void setup(){
		// acceleration.add(new Vector(0, 0));


		for (int i = 0; i < 10; i++) {
			objects.add(new Body(new double[] {screenWidth*random(),screenHeight*random()},new Vector(0, 3*Math.PI/2),10,10));
		}
	
	}
	public static void main(String[] passedArgs) {
		String[] appletArgs = new String[] { "Runner" };
		PApplet.main(appletArgs);
    }

	public void draw(){
		background(0);	
		drawObjects(objects);
		applyGravity(objects);
		for (Body object : objects) {
			object.update();
		}

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
			circle((float)pos[0], (float)pos[1], (float)limit(0,100,body.getMass()));
			Vector velocity = body.getVelocity();

			stroke(255,0,0);


			line((float)pos[0], (float)pos[1], (float)(pos[0]+(velocity.getMag()*10)*Math.cos(velocity.getDir())), (float)(pos[1]+(velocity.getMag()*10)*Math.sin(velocity.getDir())));
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

    

