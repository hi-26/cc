import java.rmi.*;

public class RMIClient{
    public static void main(String[] args){
        try{
            long start = System.currentTimeMillis();
            Summ s = (Summ) Naming.lookup("rmi://localhost:5000/hello");
            System.out.println(s.sum(12,15));
            long end = System.currentTimeMillis();
            System.out.println("Time taken in ms: "+ (end-start));
        }
        catch(Exception e){
            System.out.println(e);
        }

    }
    
}