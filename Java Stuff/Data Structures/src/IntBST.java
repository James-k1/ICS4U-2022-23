public class IntBST {
    private IntBSTNode root;
    public IntBST(){
        this.root=null;
    }
    public IntBSTNode add(Integer val){
        if (root==null){
            root=new IntBSTNode(val);
            return root;
        }
        return addRecursive(root,val);
    }
    public IntBSTNode find(Integer val){
        return findRecursive(root, val);
    }

    public IntBSTNode findRecursive(IntBSTNode root, Integer val) {
        
        if (val<root.getVal()){
            if (root.hasLeftChild()){
                return findRecursive(root.getLeftLink(), val);
            }
            return null;

        }else if (val>root.getVal()){
            if (root.hasRightChild()){
                return findRecursive(root.getRightLink(), val);
            }
            return null;

        }
        return root;
        
    }
    public void preOrderPrintTraversal(){
        preOrderPrintTraversal(root);
    }
    public void postOrderPrintTraversal(){
        postOrderPrintTraversal(root);
    }
    public void inOrderPrintTraversal(){
        inOrderPrintTraversal(root);
    }

    public void preOrderPrintTraversal(IntBSTNode root){
        System.out.println(root.getVal());
        if(root.hasLeftChild()){
            preOrderPrintTraversal(root.getLeftLink());
        }
        if (root.hasRightChild()){
            preOrderPrintTraversal(root.getRightLink());

        }

    }
    public void postOrderPrintTraversal(IntBSTNode root){
        
        if(root.hasLeftChild()){
            postOrderPrintTraversal(root.getLeftLink());
        }
        if (root.hasRightChild()){
            postOrderPrintTraversal(root.getRightLink());

        }
        System.out.println(root.getVal());
        
    }
    public void inOrderPrintTraversal(IntBSTNode root){
        
        if(root.hasLeftChild()){
            inOrderPrintTraversal(root.getLeftLink());
        }
        System.out.println(root.getVal());
        if (root.hasRightChild()){
            inOrderPrintTraversal(root.getRightLink());

        }
        
    }
    /**
     * 
     * @param root root of the subtree we are adding val to
     * @param val integer we are adding to the BST (no duplicates)
     * @return reference to the IntBSTNode we inserted
     */
    public IntBSTNode addRecursive(IntBSTNode root, Integer val) {
        if (val<root.getVal()){
            if (root.hasLeftChild()){
                return addRecursive(root.getLeftLink(), val);
            }else{
                IntBSTNode child = new IntBSTNode(val);
                root.setLeftLink(child);
                return child; 
            }

        }else if (val>root.getVal()){
            if (root.hasRightChild()){
                return addRecursive(root.getRightLink(), val);
            }else{
                IntBSTNode child = new IntBSTNode(val);
                root.setRightLink(child);
                return child; 
            }

        }
        return root;
    }
    private IntBSTNode findLargest(IntBSTNode root){
        while (root.hasRightChild()){
            root=root.getRightLink();
        }
        return root;
    }
    private IntBSTNode findLargestRecursive(IntBSTNode root){
        if (root.hasRightChild() && root.getRightLink().hasRightChild()){
            return findLargest(root.getRightLink());
        }else if (root.hasRightChild()){
            return root.getRightLink();
        }
        return root;
    }
    public boolean remove(Integer val){

        IntBSTNode parent = findParent(val, root);
        



    }
    private IntBSTNode findParent(Integer val, IntBSTNode root){

        if (root.hasLeftChild() && root.getLeftLink().getVal()==val){
            return root;
        }
        if (root.hasRightChild() && root.getRightLink().getVal()==val){
            return root;
        }
        if (root.getVal()>val&&root.hasLeftChild()){
            return findParent(val, root.getLeftLink());

        }
        if (root.getVal()<val&&root.hasRightChild()){
            return findParent(val, root.getRightLink());
        }

        return null;
    }

    
}
