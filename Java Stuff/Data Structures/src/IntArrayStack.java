public class IntArrayStack {
    

    private int top=-1;
    private final int DEFAULT_SIZE=10;
    private Integer[] stack;
    public IntArrayStack(int startingSize){
        stack=new Integer[startingSize];
    }
    public IntArrayStack(){
        stack=new Integer[DEFAULT_SIZE];
    }

    public void push(Integer i){
        if (top>=stack.length){
            stack = addSize(stack.length+10,stack);
        }
        top++;
        stack[top]=i;

    }
    public Integer pop(){
        if(!isEmpty()){
            Integer temp = stack[top];
            top--;

            return temp;

        }
        return null;
    }

    public Integer peek(){
        if (!isEmpty()){
            return stack[top];
        }
        return null;
    }
    public Integer search(Integer i){
        if (!isEmpty()){
            for (int j = top; j >= 0; j--) {
                if (stack[j]==i){
                    return top-j;
                }
            }
        }

        return -1;
    }



    public Integer[] addSize(int amount, Integer[] arr){
        // int newSize = stack.length+amount;
        Integer[] temp = new Integer[arr.length+amount];
        for (int i = 0; i < arr.length; i++) {
            temp[i]=arr[i];
        }
        return temp;
    }
    public boolean isEmpty(){
        return top<=-1;
    }

    
}
