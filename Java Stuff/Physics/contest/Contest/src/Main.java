import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        // int p = 0;
        // int o = 0;
        // boolean valid = false;
        // while(!valid){
        // try {
        // p = sc.nextInt();
        // if (p>=0){
        // valid=true;
        // }
        // } catch (Exception e) {
        // // TODO: handle exception
        // }
        // }
        // valid=false;
        // while(!valid){
        // try {
        // o = sc.nextInt();
        // if (o>=0){
        // valid=true;
        // }
        // } catch (Exception e) {
        // // TODO: handle exception
        // }
        // }
        // int score = p*50 - 10*o;
        // if (p>o){
        // score+=500;

        // }
        // System.out.println(score);
        // int n = 0;
        // boolean valid = false;
        // while(!valid){
        // try {
        // n = sc.nextInt();
        // if (n>=0){
        // valid=true;
        // }
        // } catch (Exception e) {
        // // TODO: handle exception
        // }
        // }
        // int spice = 0;
        // for (int i = 0; i < n; i++) {
        // valid = true;
        // while(valid){
        // valid = false;
        // String str = sc.nextLine();
        // if (str.equals("Poblano")){
        // spice+=1500;
        // }else if(str.equals("Mirasol")){
        // spice+=6000;
        // }else if(str.equals("Serrano")){
        // spice+=15500;
        // }else if(str.equals("Cayenne")){
        // spice+=40000;
        // }else if(str.equals("Thai")){
        // spice+=75000;
        // }else if(str.equals("Habanero")){
        // spice+=125000;
        // }else {
        // valid=true;
        // }
        // }

        // }
        // System.out.println(spice);
        // int people = 0;
        // boolean valid = false;
        // while(!valid){
        // try {
        // people = Integer.parseInt(sc.nextLine());
        // if (people>=0){
        // valid=true;
        // }
        // } catch (Exception e) {
        // // TODO: handle exception
        // }
        // }
        // String[] days = new String[people];

        // for (int i = 0; i < days.length; i++) {

        // String day = sc.nextLine();
        // days[i]=day;
        // }

        // int[] num = new int[days[0].length()];
        // for (int i = 0; i < days[0].length(); i++) {
        // for (int j = 0; j < days.length; j++) {
        // if (days[j].substring(i,i+1).equals("Y")){
        // num[i]++;
        // }
        // }
        // }
        // int max = 0;
        // for (int i : num) {
        // if (i>max){
        // max=i;
        // }
        // }

        // String str = "";
        // for (int i = 0; i < num.length; i++) {
        // if (num[i]==max){
        // str+=(i+1)+",";
        // }
        // }
        // str = str.substring(0,str.length()-1);
        // System.out.println(str);

        // int columns = 0;
        // boolean valid = false;
        // while(!valid){
        // try {
        // columns = Integer.parseInt(sc.nextLine());
        // if (columns>=0){
        // valid=true;
        // }
        // } catch (Exception e) {
        // // TODO: handle exception
        // }
        // }
        // int[][] thing = new int[2][columns];
        // String columnOne = sc.nextLine();
        // int index = 0;
        // for (int i = 0; i < columnOne.length(); i++) {
        // if
        // ((columnOne.charAt(i)+"").equals("1")||(columnOne.charAt(i)+"").equals("0")){
        // thing[0][index]=Integer.parseInt(columnOne.charAt(i)+"");
        // index++;

        // }
        // }

        // String columnTwo = sc.nextLine();
        // index = 0;
        // for (int i = 0; i < columnTwo.length(); i++) {
        // if
        // ((columnTwo.charAt(i)+"").equals("1")||(columnTwo.charAt(i)+"").equals("0")){
        // thing[1][index]=Integer.parseInt(columnTwo.charAt(i)+"");
        // index++;

        // }
        // }

        // int tape = 0;
        // for (int i = 0; i < 2; i++) {
        // for (int j = 0; j < columns; j++) {
        // // System.out.println(thing[i][j]);
        // if (thing[i][j]==1){
        // int add = 3;
        // if (j+1 < thing[i].length && thing[i][j+1] == 1){
        // add--;
        // }
        // if (j-1 >= 0 && thing[i][j-1] == 1){
        // add--;
        // }
        // if (i==0 && j%2==0 && thing[1][j]==1){
        // add--;
        // }else if (i==1 && j%2==0 && thing[0][j]==1){
        // add--;
        // }

        // tape+=add;

        // }
        // }
        // }
        // System.out.println(tape);

        // question 4
        
        Scanner sc = new Scanner(System.in);

        String search = sc.nextLine();

        int numInputs = Integer.parseInt(sc.nextLine());

        int notGarbage = Integer.parseInt(sc.nextLine());

        String[][] thing = new String[numInputs][notGarbage];

        for (int i = 0; i < numInputs; i++) {
            thing[i] = sc.nextLine().split(" ");
        }

        ArrayList<fuckyou> fuck = new ArrayList<>();

        for (int i = 0; i < numInputs; i++)
        {
            for (int j = 0; j < notGarbage; j++)
            {
                if (thing[i][j].equals(search.substring(0,1)))
                {
                    fuck.add(new fuckyou(i ,j));
                }
            }
        }

        for (int i = 0; i < fuck.size(); i++)
        {
            // horizontal
            if (fuck.get(i).x + search.length() < notGarbage)
            {
                
            }


        }

        sc.close();
    }
}

class fuckyou {
    public int x;
    public int y;

    fuckyou(int x, int y)
    {
        this.x = x;
        this.y = y;
    }
}