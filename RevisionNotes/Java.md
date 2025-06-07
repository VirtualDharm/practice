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

package mypack;
import package_name.Class/*;

OuterClass myOuter = new OuterClass(); //nested class
OuterClass.InnerClass myInner = myOuter.new InnerClass();

abstract class Animal/interface Animal: An interface is a completely "abstract class" that is used to group related methods with empty bodies.
Interface methods are by default abstract and public
Interface attributes are by default public, static and final

Why And When To Use Interfaces?
1) To achieve security - hide certain details and only show the important details of an object (interface).
2) Java does not support "multiple inheritance" (a class can only inherit from one superclass). However, it can be achieved with interfaces, because the class can implement multiple interfaces.

import java.util.Scanner;  // Import the Scanner class
class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);  // Create a Scanner object
    System.out.println("Enter username");
    String userName = myObj.nextLine();  // Read user input   }}

import java.util.ArrayList; // import the ArrayList class
ArrayList<String> cars = new ArrayList<String>(); // Create an ArrayList object
cars.add("Volvo");
cars.add(0, "Mazda");
cars.get(0);
cars.set(0, "Opel");
cars.remove(0);
cars.clear();
cars.size();
Collections.sort(cars);(cars, Collections.reverseOrder());

import java.util.LinkedList;
LinkedList<String> cars = new LinkedList<String>();

import java.util.HashMap; // import the HashMap class
HashMap<String, String> capitalCities = new HashMap<String, String>();
capitalCities.put("England", "London");
capitalCities.get("England");
capitalCities.remove("England");
capitalCities.clear();
capitalCities.size();
keySet() method if you only want the keys, and use the values() method if you only want the values

import java.util.HashSet;
HashSet<String> cars = new HashSet<String>();
cars.add("Volvo");
cars.contains("Mazda");

import java.util.Iterator;
Iterator<String> it = cars.iterator();
while(it.hasNext()) { System.out.println(it.next()); }

Java Wrapper Classes(checkout) : https://www.w3schools.com/java/java_wrapper_classes.asp

import java.util.regex.Matcher;
import java.util.regex.Pattern;
Pattern pattern = Pattern.compile("w3schools", Pattern.CASE_INSENSITIVE);
Matcher matcher = pattern.matcher("Visit W3Schools!");
boolean matchFound = matcher.find();

Threads allows a program to operate more efficiently by doing multiple things at the same time.
Threads can be used to perform complicated tasks in the background without interrupting the main program.
public class Main extends Thread {
  public void run() {
    System.out.println("This code is running in a thread");
  }
}
public class Main implements Runnable {
  public void run() {
    System.out.println("This code is running in a thread");
  }
}
Differences between "extending" and "implementing" Threads
The major difference is that when a class extends the Thread class, you cannot extend any other class, but by implementing the Runnable interface, it is possible to extend from another class as well, like: class MyClass extends OtherClass implements Runnable.

When the threads and main program are reading and writing the same variables, the values are unpredictable: concurrency problems.
isAlive()

Lambda Expressions were added in Java 8.

Comparator and Comparable (yeh kya cheez hai)

import java.io.File;
File myObj = new File("filename.txt");
if (myObj.createNewFile()) {
System.out.println("File created: " + myObj.getName());

FileWriter myWriter = new FileWriter("filename.txt");
myWriter.write("Files in Java might be tricky, but it is fun enough!");
myWriter.close();
System.out.println("Successfully wrote to the file.");

File myObj = new File("filename.txt");
Scanner myReader = new Scanner(myObj);
while (myReader.hasNextLine()) {
  String data = myReader.nextLine();
  System.out.println(data);
}
myReader.close();

File myObj = new File("filename.txt"/"C:\\Users\\MyName\\Test"); 
if (myObj.delete()) { 
  System.out.println("Deleted the file: " + myObj.getName());
}

words.split("\\s").length //to get no of words


