// public class TestLLQueue {

//     public void testGet(){
//         IntLinkedList list = new IntLinkedList();
//         list.add(1);
//         list.add(2);
//         list.add(3);
//         list.add(4);
//         list.add(5);
//         System.out.println(list);
//         System.out.println( list.remove(4));
//         System.out.println(list);
        
//     }
// }
public class TestLLQueue {
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
        IntLLQueue list = new IntLLQueue();
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
        IntLLQueue list = new IntLLQueue();
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
        IntLLQueue list = new IntLLQueue();
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
    public static IntLLQueue prepareArrayQueue(){
        IntLLQueue list = new IntLLQueue();
        for (int i = 1; i <= 10; i++) {
            list.enqueue(i);
        }
        return list;
    }
    
}

