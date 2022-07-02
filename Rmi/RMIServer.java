import java.rmi.*;

public class RMIServer{
    public static void main(String args[]){
        try{
            Summ sumInterface = new SummRemote();
            Naming.rebind("rmi://localhost:5000/hello",sumInterface);
        }catch(Exception e){
            System.out.println(e);
        }

    }
    
}