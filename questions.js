const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"What is a class in Java?",
options:[
"A blueprint for creating objects",
"A variable",
"A loop",
"A method"
],
answer:"A blueprint for creating objects",
hint:"Template of object"
},

{
type:"mcq",
question:"What is an object?",
options:[
"Instance of class",
"A loop",
"A method",
"A variable"
],
answer:"Instance of class",
hint:"Created from class"
},

{
type:"mcq",
question:"Which keyword is used to create object?",
options:["new","class","object","create"],
answer:"new",
hint:"Used with constructor"
},

{
type:"mcq",
question:"Which method is entry point of Java program?",
options:["main","start","run","init"],
answer:"main",
hint:"Execution starts here"
},

{
type:"mcq",
question:"Which symbol is used to access object members?",
options:[".","->","::","#"],
answer:".",
hint:"object.method()"
},

{
type:"mcq",
question:"What is a field in class?",
options:[
"A variable inside class",
"A method",
"A loop",
"A keyword"
],
answer:"A variable inside class",
hint:"Stores data"
},

{
type:"mcq",
question:"Can a class have multiple objects?",
options:["Yes","No","Sometimes","Depends"],
answer:"Yes",
hint:"Multiple instances allowed"
},

{
type:"mcq",
question:"Which keyword defines a class?",
options:["class","object","define","new"],
answer:"class",
hint:"class Student {}"
},

{
type:"mcq",
question:"Where are objects stored?",
options:["Heap memory","Stack","CPU","Disk"],
answer:"Heap memory",
hint:"Dynamic memory"
},

{
type:"mcq",
question:"What happens if object is not created?",
options:[
"Cannot access class members",
"Error always",
"Program stops",
"Nothing happens"
],
answer:"Cannot access class members",
hint:"Need instance"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Create a class Student with a variable name and print it using object",

required:["class","student","system.out.println","new"],

hint:"Create class and object",

solution:`class Student {
  String name = "Ravi";

  public static void main(String[] args){
    Student s = new Student();
    System.out.println(s.name);
  }
}`
},

{
type:"code",
question:"Create a class Car with variable model and print it",

required:["class","system.out.println","new"],

hint:"Car c = new Car();",

solution:`class Car {
  String model = "Tesla";

  public static void main(String[] args){
    Car c = new Car();
    System.out.println(c.model);
  }
}`
},

{
type:"code",
question:"Create a class with a method display() and call it using object",

required:["class","void","system.out.println","new"],

hint:"Call method using object",

solution:`class Demo {

  void display(){
    System.out.println("Hello");
  }

  public static void main(String[] args){
    Demo d = new Demo();
    d.display();
  }
}`
},

{
type:"code",
question:"Create a class Employee with name and salary and print values",

required:["class","system.out.println","new"],

hint:"Use two variables",

solution:`class Employee {
  String name = "John";
  int salary = 5000;

  public static void main(String[] args){
    Employee e = new Employee();
    System.out.println(e.name);
    System.out.println(e.salary);
  }
}`
},

{
type:"code",
question:"Create multiple objects of a class and print values",

required:["class","new","system.out.println"],

hint:"Create 2 objects",

solution:`class Person {
  String name = "Default";

  public static void main(String[] args){
    Person p1 = new Person();
    Person p2 = new Person();

    System.out.println(p1.name);
    System.out.println(p2.name);
  }
}`
},

{
type:"code",
question:"Create a class with method to add two numbers and call using object",

required:["class","+","system.out.println","new"],

hint:"Method inside class",

solution:`class Add {

  int add(int a, int b){
    return a + b;
  }

  public static void main(String[] args){
    Add obj = new Add();
    System.out.println(obj.add(5,3));
  }
}`
},

{
type:"code",
question:"Create a class BankAccount with balance and print balance using object",

required:["class","system.out.println","new"],

hint:"balance variable",

solution:`class BankAccount {
  int balance = 1000;

  public static void main(String[] args){
    BankAccount b = new BankAccount();
    System.out.println(b.balance);
  }
}`
}

]