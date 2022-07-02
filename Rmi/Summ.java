import java.rmi.*;
public interface Summ extends Remote{
    public int sum(int num1,int num2) throws RemoteException;

}