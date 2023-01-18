public class TestArrayQueue {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        if (!testEnqueue()){
            System.out.println("Test Failed: testEnqueue");
            testFailed++;
        }else{
            testPassed++;
        }
        if (!testDequeue()){
            System.out.println("Test Failed: testDequeue");
            testFailed++;
        }else{
            testPassed++;
        }
        if (!testIsEmpty()){
            System.out.println("Test Failed: testIsEmpty");
            testFailed++;
        }else{
            testPassed++;
        }

        System.out.println("Tests Passed: "+testPassed);
        System.out.println("Tests Failed: " + testFailed);
        
    }
    public static boolean testIsEmpty(){
        IntArrayQueue list = new IntArrayQueue();
        if (!list.isEmpty()){
            return false;
        }
        list=prepareArrayQueue();
        list.clear();
        if (!list.isEmpty()){
            return false;
        }
        return true;
    }
    public static boolean testEnqueue(){
        IntArrayQueue list = new IntArrayQueue();
        list.enqueue(1);
        if (list.peek()!=1){
            return false;
        }
        list.enqueue(2);
        list.enqueue(3);
        if (list.peek()!=1){
            return false;
        }
        list=prepareArrayQueue();
        if (list.peek()!=1){
            return false;
        }
        list.dequeue();
        
        list.dequeue();
        if (list.peek()!=3){
            return false;
        }
        for (int i = 0; i <20; i++){
            list.enqueue(i);
        }
        if (list.peek()!=3){
            return false;
        }
        return true;


    }
    public static boolean testDequeue(){
        IntArrayQueue list = new IntArrayQueue();
        Integer val = list.dequeue();
        if (val!=null){
            return false;
        }
        list = prepareArrayQueue();
        val=list.dequeue();
        if (val!=1){
            return false;
        }
        list.dequeue();
        list.dequeue();
        list.dequeue();
        list.dequeue();
        list.dequeue();
        list.dequeue();
        list.dequeue();
        list.dequeue();
        list.dequeue();
        val = list.dequeue();
        if (val!=null){
            return false;
        }

        return true;

    }
    public static IntArrayQueue prepareArrayQueue(){
        IntArrayQueue list = new IntArrayQueue();
        for (int i = 1; i <= 10; i++) {
            list.enqueue(i);
        }
        return list;
    }
    
}
