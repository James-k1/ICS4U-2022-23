public class TestLLStack {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        if (!testPush()){
            System.out.println("Test Failed: testPush");
            testFailed++;
        }else{
            testPassed++;
        }
        if (!testPop()){
            System.out.println("Test Failed: testPop");
            testFailed++;
        }else{
            testPassed++;
        }
        if (!testSearch()){
            System.out.println("Test Failed: testSearch");
            testFailed++;
        }else{
            testPassed++;
        }
        System.out.println("Tests Passed: "+testPassed);
        System.out.println("Tests Failed: " + testFailed);
        
    }
    
    public static boolean testPush(){
        IntLLStack list = new IntLLStack();
        list.push(3);

        if (list.peek()!=3){
            return false;
        }
        list.push(4);
        if (list.peek()!=4){
            return false;
        }
        return true;

    }
    public static boolean testPop(){
        IntLLStack list = prepareLLStack();
        if (list.pop()!=10 || list.peek()!=9){
            return false;
        }
        list=new IntLLStack();
        if (list.pop()!=null || list.peek()!=null){
            return false;

        }
        list.push(8);
        if (list.pop()!=8 || list.peek()!=null){
            return false;
        }
        return true;

    }
    public static boolean testSearch(){
        IntLLStack list = prepareLLStack();
        if (list.search(8)!=2||list.search(11)!=-1||list.search(1)!=9){
            return false;
        }
        list=new IntLLStack();
        if (list.search(3)!=-1){
            return false;
        }
        list.push(88);
        if (list.search(88)!=0){
            return false;
        }
        
        return true;



    }

    public static IntLLStack prepareLLStack(){
        IntLLStack list = new IntLLStack();
        for (int i = 1; i <= 10; i++) {
            list.push(i);
        }
        return list;
    }
    
    

    
}
