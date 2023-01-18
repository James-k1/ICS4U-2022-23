public class IntLLQueue {
    private IntLinkedList data;
    
    public IntLLQueue(){
        data=new IntLinkedList();
    }
    public boolean isEmpty(){
        return data.isEmpty();
    }
    public void clear(){
        data=new IntLinkedList();
    }
    public boolean enqueue(Integer val){
        return data.add(val);
    }
    public Integer dequeue(){
        return data.removeFront();
    }
    public Integer peek(){
        return data.getHead().getData();
    }
}
