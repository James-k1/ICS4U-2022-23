import javax.crypto.MacSpi;

public class TestIntBST {
    public static void main(String[] args) {
        IntBST bst = new IntBST();
        bst.add(7);
        bst.add(8);
        bst.add(13);
        bst.add(2);
        bst.add(1);
        bst.add(11);
        bst.add(15);
        bst.add(9);
        bst.add(8);
        bst.add(7);
        bst.preOrderPrintTraversal();
        

    }
    
}
