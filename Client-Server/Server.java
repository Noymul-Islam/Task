import java.net.*;
import java.io.*;

public class Server {
   
 public static void main(String [] args) {
      int port =6061;
      try {
            ServerSocket  serverSocket = new ServerSocket(port);
            serverSocket.setSoTimeout(30000);
            System.out.println("Waiting for client on port " + 
            serverSocket.getLocalPort() + "...");
            Socket server = serverSocket.accept();
            
            System.out.println("Now Server Is Connecting to " + server.getRemoteSocketAddress());
            DataInputStream in = new DataInputStream(server.getInputStream());
            
            System.out.println(in.readUTF());
            DataOutputStream out = new DataOutputStream(server.getOutputStream());
            out.writeUTF("Thank you for connecting to " + server.getLocalSocketAddress()
               + "\nGoodbye!");
            server.close();
            
          
      

      } catch (Exception e) {
         e.printStackTrace();
      }
   }


}