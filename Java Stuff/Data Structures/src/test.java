public class test {
    private static IntLinkedList linkedList = new IntLinkedList();
    public static void main(String[] args) {
        // testAddNode();
        testRemoveNode();

    }
    private static void testAddNode(){
        IntLinkedList list = new IntLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);

        System.out.println(list);
        list.addFront(4);
        list.addFront(5);

        System.out.println(list);
        list.addIndex(2, 6);
        System.out.println(list);

        //564123
    }
    
    private static void testRemoveNode(){
        IntLinkedList list = new IntLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println(list);
        System.out.println( list.remove(4));
        System.out.println(list);
        

    }
}
