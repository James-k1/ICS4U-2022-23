public class IntLLStack {
    private IntLinkedList stack;
    public IntLLStack(){
        stack=new IntLinkedList();

    }
    public void push(Integer i){
        stack.addFront(i);
    }
    public Integer peek(){
        IntNode head = stack.getHead();
        return head!=null? head.getData() : null;
    }
    public Integer pop(){
        return stack.removeFront();
    }
    public boolean isEmpty(){
        return stack.isEmpty();
    }
    public int search(Integer i){
        IntNode curr = stack.getHead();
        int count = 0;
        while(curr!=null){
            if (curr.getData()==i){
                return count;
            }
            curr=curr.getLink();
            count++;
        }
        return -1;
    }
    
}
