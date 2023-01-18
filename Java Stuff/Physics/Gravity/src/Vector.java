public class Vector {
    private double mag;
    private double dir;
    public Vector(double mag, double dir){
        this.mag=mag;
        this.dir=dir;
    }
    public void add(Vector v){
        double xComp = mag*Math.cos(dir)+v.getMag()*Math.cos(v.getDir());
        double yComp = mag*Math.sin(dir)+v.getMag()*Math.sin(v.getDir());

        mag = Math.sqrt(Math.pow(xComp , 2)+Math.pow(yComp, 2));
        dir = Math.atan2(yComp, xComp);
        

    }




    public double getMag() {
        return mag;
    }
    public void setMag(double mag) {
        this.mag = mag;
    }
    public double getDir() {
        return dir;
    }
    public void setDir(double dir) {
        this.dir = dir;
    }
    

}