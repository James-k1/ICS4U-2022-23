import java.util.ArrayList;
import java.util.Arrays;

public class Body {
    private double[] pos;
    private Vector velocity;
    private ArrayList<Vector> acceleration;
    private double mass;
    private double radius;

    public Body (double[] pos, Vector velocity, ArrayList<Vector> acceleration, double mass, double radius){
        this.pos=pos;
        this.velocity=velocity;
        this.acceleration=acceleration;
        this.mass=mass;
        this.radius=radius;
    }

    public Body (double[] pos, Vector velocity, double mass, double radius){
        this.pos=pos;
        this.velocity=velocity;
        this.acceleration=new ArrayList<Vector>(Arrays.asList(new Vector[] {new Vector(0, 0)}));
        this.mass=mass;
        this.radius=radius;
    }

    public void update(){
        Vector netAcceleration = new Vector(0, 0);
        for (Vector vector : acceleration) {
            netAcceleration.add(vector);
        }
        velocity.add(netAcceleration);

        pos[0]+=velocity.getMag()*Math.cos(velocity.getDir());
        pos[1]+=velocity.getMag()*Math.sin(velocity.getDir());

    }

    public boolean equals(Body b){
        return this==b;
    }
    public double getDistanceTo(Body b){
        return Math.sqrt(Math.pow(pos[0]-b.getPos()[0], 2)+Math.pow(pos[1]-b.getPos()[1], 2));
    }






    public double[] getPos() {
        return pos;
    }
    public void setPos(double[] pos) {
        this.pos = pos;
    }
    public Vector getVelocity() {
        return velocity;
    }
    public void setVelocity(Vector velocity) {
        this.velocity = velocity;
    }
    public Vector getAcceleration() {
        Vector netAcceleration=new Vector(0, 0);
        for (Vector vector : acceleration) {
            netAcceleration.add(vector);
        }
        return netAcceleration;
        
    }
    public void setAcceleration(ArrayList<Vector> acceleration) {
        this.acceleration = acceleration;
    }
    public void setAccelerationAtIndex(int index, Vector v){
        if (index>acceleration.size()){
            return;
        }
        acceleration.set(index, v);
    }
    public double getMass() {
        return mass;
    }
    public void setMass(double mass) {
        this.mass = mass;
    }
    public double getRadius() {
        return radius;
    }
    public void setRadius(double radius) {
        this.radius = radius;
    }
    
    
}
