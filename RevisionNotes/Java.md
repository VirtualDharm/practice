```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```
javac Main.java - to compile code, compile all the files then run main                    
java Main             
const vs final         
$ in names       
In type conversion, a compiler converts a lower data type into a higher data type.(automatic)            
In type casting, a higher data type is converted into a lower data type by the programmer.(manual)  
String[] cars, int[] myNum, int[][] myNumbers,   
public class Main {
  int x = 5;
  public Main(int y) {
    x = y;  // Set the initial value for the class attribute x
  }

  public static void main(String[] args) {
    Main myObj = new Main(3);
    System.out.println(myObj.x);
  }
}
static method, means that it can be accessed without creating an object of the class, unlike public, which can only be accessed by objects     
constructor name must match the class name, and it cannot have a return type (like void)      
         
access modifier : change access
classes : public, default(same package), 
final(class cannot be inherited by other classes ), 
abstract(The class cannot be used to create objects. To access an abstract class, it must be inherited from another class)
attributes, methods and constructors : public, private, default, protected(same package and subclasses), final, static(belongs to the class, rather than an object), 
abstract	(Can only be used in an abstract class, and can only be used on methods. The method does not have a body, for example abstract void run();. The body is provided by the subclass (inherited from)),
transient	(Attributes and methods are skipped when serializing the object containing them),
synchronized  (Methods can only be accessed by one thread at a time),
volatile	(The value of an attribute is not cached thread-locally, and is always read from the "main memory")

Encapsulation : "sensitive" data is hidden from users.
  declare class variables/attributes as private
  provide public get and set methods to access and update the value of a private variable. getName(),setName(String newName)



