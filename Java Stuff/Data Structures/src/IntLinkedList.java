public class IntLinkedList {
    private IntNode head;
    private int manyItems;
    //UNGA BUNGA
    public IntLinkedList (){
        head=null;
        manyItems=0;
    }

    public boolean add(Integer data){
        IntNode temp = new IntNode(data);
        if (head==null){
            head=temp;
        }else{
            IntNode curr = head;
            while (curr.getLink()!=null){
                curr=curr.getLink();
            }
            curr.setLink(temp);
        }
        manyItems++;
        return true;

    }
    public boolean addFront(Integer data){
        head = new IntNode(data,head);
        // IntNode temp = head;
        // head=new IntNode(data);
        // head.setLink(temp);
        manyItems++;
        return true;

    }
    public boolean addIndex(int index, Integer data) throws IndexOutOfBoundsException{
        if (index>manyItems){
            throw new IndexOutOfBoundsException("out of bounds");
        }
        
        IntNode currNode = head;
        if (index==0){
            addFront(data);
        }

        for (int i = 0; i < index-1; i++) {
            currNode=currNode.getLink();
        }
        
        currNode.setLink(new IntNode(data,currNode.getLink()));
        manyItems++;
        return true;

    }
    public Integer remove(Integer data){
        if (isEmpty()){
            return null;
        }
        if (head != null && head.getData()==data){
            head=head.getLink();
            manyItems--;
            return data;
        }else{
            // IntNode prevNode = head;
            IntNode curr = head.getLink();
            while(curr.getLink()!=null && curr.getLink().getData()!=data){
                curr=curr.getLink();
            }
            if (curr.getLink()!=null){
                curr.setLink(curr.getLink().getLink());
            }else{
                return null;
       

            }

        }

        manyItems--;
        return data;
    }
    
    public int size(){
        return manyItems;
    }
    public boolean isEmpty(){
        return head==null;
    }
    public String toString(){
        String result = "{";
        IntNode curr = head;
        while(curr!=null){
            result+=curr.getData()+", ";
            curr=curr.getLink();

        }
        if (!isEmpty()){
            result=result.substring(0,result.length()-2);
        }
        result+="}";
        return result;
    }

    
}
