import java.util.Random;

public class test {
    public static void main(String[] args) {
        
        for (int i = 0; i < 50; i++) {
            System.out.println(random(3425));
        }
    }
    public static double random(long seed) {
		Random generator = new Random(seed);
		double num = generator.nextDouble() * (0.5);
	
		return num;
	}
    
}
