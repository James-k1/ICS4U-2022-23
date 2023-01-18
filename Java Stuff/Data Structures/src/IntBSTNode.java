public class IntBSTNode {
    private Integer val;
    private IntBSTNode leftLink;
    private IntBSTNode rightLink;

    
    public IntBSTNode(Integer val) {
        this.val = val;
    }
    


    public IntBSTNode(Integer val, IntBSTNode leftLink, IntBSTNode rightLink) {
        this.val = val;
        this.leftLink = leftLink;
        this.rightLink = rightLink;
    }



    public Integer getVal() {
        return val;
    }
    public void setVal(Integer val) {
        this.val = val;
    }
    public IntBSTNode getLeftLink() {
        return leftLink;
    }
    public void setLeftLink(IntBSTNode leftLink) {
        this.leftLink = leftLink;
    }
    public IntBSTNode getRightLink() {
        return rightLink;
    }
    public void setRightLink(IntBSTNode rightLink) {
        this.rightLink = rightLink;
    }
    public boolean hasLeftChild(){
        return leftLink!=null;
    }
    public boolean hasRightChild(){
        return rightLink!=null;
    }



    

    
}
