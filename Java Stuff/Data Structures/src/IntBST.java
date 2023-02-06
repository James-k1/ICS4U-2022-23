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
    public boolean isEmpty(){
        return root==null;
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
    public String inOrderPrintTraversal(){
        String str = "";
        return inOrderPrintTraversal(root, str);

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
    public String inOrderPrintTraversal(IntBSTNode root, String str){
        
        if(root.hasLeftChild()){
            inOrderPrintTraversal(root.getLeftLink(),str);
        }
        str += root.getVal();
        if (root.hasRightChild()){
            inOrderPrintTraversal(root.getRightLink(),str);

        }
        return str;
        
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
   
    // public IntBSTNode findLargest(IntBSTNode root){
    //     while (root.hasRightChild()){
    //         root=root.getRightLink();
    //     }
    //     return root;
    // }
    public IntBSTNode findLargest(IntBSTNode root){
        if (root.getRightLink()==null){
            return root;
        }
        return findLargest(root.getRightLink());
    }

    private IntBSTNode findSmallest(IntBSTNode root) {
        if (root.getLeftLink()==null){
            return root;
        }
        return findSmallest(root.getLeftLink());

    }

    // private IntBSTNode findLargestRecursive(IntBSTNode root){
    //     if (root.hasRightChild() && root.getRightLink().hasRightChild()){
    //         return findLargest(root.getRightLink());
    //     }else if (root.hasRightChild()){
    //         return root.getRightLink();
    //     }
    //     return root;
    // }
    public boolean remove(Integer val){
        if (val==root.getVal()){
            if (!root.hasLeftChild()&&!root.hasLeftChild()){
                root=null;
                return true;

            }
            if (!root.hasLeftChild()&&root.hasRightChild()){
                root=root.getRightLink();
                return true;
            }
            if(root.hasLeftChild()&&!root.hasRightChild()){
                root=root.getLeftLink();
                return true;
            }
            if (root.hasLeftChild()&&root.hasRightChild()){

                IntBSTNode leftLink = root.getLeftLink();
                findSmallest(root.getRightLink()).setLeftLink(leftLink);
                root=root.getRightLink();
                
            }
        }

        IntBSTNode parent = findParent(val, root);
        if (parent==null){
            return false;
        }

        // if (parent.getLeftLink().getVal()!=val||parent.getRightLink().getVal()!=val){
        //     System.out.println("you fucked up findParent");
        // }

        if (parent.hasLeftChild() && parent.getLeftLink().getVal()==val){
            IntBSTNode child = parent.getLeftLink();
            if (!child.hasLeftChild()&&!child.hasRightChild()){
                parent.setLeftLink(null);
                return true;
            }
            if (!child.hasLeftChild()&&child.hasRightChild()){
                parent.setLeftLink(child.getRightLink());
                return true;
            }
            if (child.hasLeftChild()&&!child.hasRightChild()){
                parent.setLeftLink(child.getLeftLink());
                return true;
            }
            if (child.hasLeftChild()&&child.hasRightChild()){
                IntBSTNode rightLink = child.getRightLink();
                parent.setLeftLink(child.getLeftLink());
                findLargest(parent.getLeftLink()).setRightLink(rightLink);
                // child.getLeftLink().setRightLink(child.getRightLink());
            }
            System.out.println("cry");

        }
        if (parent.hasRightChild() && parent.getRightLink().getVal()==val){
            IntBSTNode child = parent.getRightLink();
            if (!child.hasLeftChild()&&!child.hasRightChild()){
                parent.setRightLink(null);
                return true;
            }
            if (!child.hasLeftChild()&&child.hasRightChild()){
                parent.setRightLink(child.getRightLink());
                return true;
            }
            if (child.hasLeftChild()&&!child.hasRightChild()){
                parent.setRightLink(child.getLeftLink());
                return true;
            }
            if (child.hasLeftChild()&&child.hasRightChild()){
                IntBSTNode leftLink = child.getLeftLink();
                parent.setRightLink(child.getRightLink());
                findSmallest(parent.getRightLink()).setLeftLink(leftLink);
                return true;
                
                
            }
            System.out.println("cry");


        }
        
        //should never get here
        return false;


    }


    public IntBSTNode findParent(Integer val, IntBSTNode root){
        if (val==root.getVal()){
            return null;
        }

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
    public IntBSTNode getRoot(){
        return root;
    }

    
}
