

public class IntArrayQueue {
    private Integer[] queue;
    private int top=-1;
    private final int DEFAULT_ARRAY_SIZE = 10;
    public IntArrayQueue(){
        queue=new Integer[DEFAULT_ARRAY_SIZE];
    }
    public boolean isEmpty(){
        return top==-1;
    }
    public void clear(){
        queue=new Integer[DEFAULT_ARRAY_SIZE];
        top=-1;
    }
    public Integer peek(){
        if (isEmpty()){
            return null;
        }
        return queue[top];
    }
    public Integer dequeue(){
        if (isEmpty()){
            return null;
        }
        top--;
        return queue[top+1];
    }
    public boolean enqueue(Integer val){

        queue=getShiftedArray(queue);
        queue[0]=val;
        top++;
        return true;

    }

    public Integer[] getShiftedArray(Integer[] arr){
        Integer[] newArr = new Integer[arr.length+1];
        for (int i = 0; i < arr.length; i++) {
            newArr[i+1]=arr[i];
            
        }
        return newArr;
    }
    public Integer[] addSizeAndShift(int amount, Integer[] arr){
        Integer[] newArr = new Integer[arr.length+amount+1];
        for (int i = 0; i < arr.length; i++) {
            newArr[i+1]=arr[i];
        }
        return newArr;
    }


    
}
