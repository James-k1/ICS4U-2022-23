import java.lang.reflect.Array;
import java.util.ArrayList;

public class TestIntBST {
    public static void main(String[] args) {
        // IntBST bst = new IntBST();
        // bst.add(7);
        // bst.add(8);
        // bst.add(13);
        // bst.add(2);
        // bst.add(1);
        // bst.add(11);
        // bst.add(15);
        // bst.add(9);
        // bst.add(8);
        // bst.add(7);
        // bst.preOrderPrintTraversal();
        int testPassed = 0;
        int testFailed = 0;
        if (!testAdd()){
            System.out.println("Test Failed: testAdd");
            testFailed++;
        }else{
            testPassed++;
        }
        if (!testFind()){
            System.out.println("Test Failed: testFind");
            testFailed++;
        }else{
            testPassed++;
        }
        if (!testRemove()){
            System.out.println("Test Failed: testRemove");
            testFailed++;
        }else{
            testPassed++;
        }
        System.out.println("Tests Passed: "+testPassed);
        System.out.println("Tests Failed: " + testFailed);
        
        

    }


    public static boolean testAdd(){
        IntBST tree = new IntBST();
        if (tree.getRoot()!=null||!tree.isEmpty()){
            return false;
        }

        tree.add(4);
        tree.add(3);
        tree.add(2);
        tree.add(8);
        tree.add(7);
        tree.add(6);
        tree.add(1);
        tree.add(9);
        tree.add(9);
        tree.add(9);
        tree.add(9);
        tree.add(9);
        tree.add(9);
        tree.add(9);
        tree.add(9);

        if (tree.getRoot().getVal()!=4){
            return false;
        }
        IntBSTNode node = tree.getRoot();
        if (node.getLeftLink().getVal()!=3||node.getLeftLink().getLeftLink().getVal()!=2||node.getLeftLink().getLeftLink().getLeftLink().getVal()!=1){
            return false;
        }
        if (node.getRightLink().getVal()!=8||node.getRightLink().getRightLink().getVal()!=9||node.getRightLink().getLeftLink().getVal()!=7||node.getRightLink().getLeftLink().getLeftLink().getVal()!=6){
            return false;
        }
        if (node.getRightLink().getRightLink().getRightLink()!=null){
            return false;
        }

        return true;



    }


    public static boolean testFind(){
        IntBST tree = createList();
        if (tree.find(9).getVal()!=9||tree.find(1)!=tree.getRoot().getLeftLink().getLeftLink().getLeftLink()){
            return false;
        }
        if (tree.find(345938)!=null){
            return false;
        }
        if (tree.findLargest(tree.getRoot()).getVal()!=9||tree.findLargest(tree.getRoot().getLeftLink()).getVal()!=3){
            return false;

        }
        return true;
    }

    public static boolean testRemove(){
        IntBST tree = createLongList();
        //13 1 2 15 9 10 20 8 6 7 14 19 17 3 18 12 4 5 16 11
        if (tree.remove(100)){
            return false;
        }

        if (tree.remove(-2)!=true||tree.getRoot().getLeftLink().getLeftLink().getLeftLink().getLeftLink()!=null){
            return false;
        }

        tree=createLongList();
        if (tree.remove(-1)!=true||tree.getRoot().getLeftLink().getLeftLink().getLeftLink().getVal()!=-2){
            return false;
        }
        tree=createLongList();
        if (tree.remove(6)){
            return false;
        }
        

        return true;


    }
    // private static boolean removeTest() {
    //     IntBST bst = prepareList();
    //     bst.remove(11);
    //    if (!(bst.inOrderPrintTraversal().equals("1 3 6 7 8 9 13 ")))
    //    return false;
    //    bst.remove(1);
    //    if (!(bst.inOrderPrintTraversal().equals("3 6 7 8 9 13 ")))
    //    return false;
    //    bst.remove(13);
    //    if (!(bst.inOrderPrintTraversal().equals("3 6 7 8 9 ")))
    //    return false;
  
    //    return true;
        
    //  }
  
    // public void printTree(IntBST tree){
    //     ArrayList<String> lines = new ArrayList<>();
    //     lines.add

    // }

    private static IntBST prepareList() {
        IntBST bst = new IntBST();
    bst.add(6);
    bst.add(8);
    bst.add(3);
    bst.add(1);
    bst.add(13);
    bst.add(9);
    bst.add(7);
    bst.add(11);
    return bst;

    }



    public static IntBST createLongList(){
        IntBST tree = new IntBST();

        tree.add(13);
        tree.add(1);
        tree.add(2);
        tree.add(15);
        tree.add(9);
        tree.add(10);
        tree.add(20);
        tree.add(8);
        tree.add(6);
        tree.add(7);
        tree.add(14);
        tree.add(19);
        tree.add(17);
        tree.add(3);
        tree.add(18);
        tree.add(12);
        tree.add(4);
        tree.add(5);
        tree.add(16);
        tree.add(11);
        tree.add(0);
        tree.add(-1);
        tree.add(-2);
        return tree;

    }

    public static IntBST createList(){
        IntBST tree = new IntBST();

        tree.add(4);
        tree.add(3);
        tree.add(2);
        tree.add(8);
        tree.add(7);
        tree.add(6);
        tree.add(1);
        tree.add(9);
        return tree;
    }
}
