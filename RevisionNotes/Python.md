<table>
  <thead><tr><th style="background-color: #e0e0e0; padding: 8px;">Type of Revision</th>
  <tbody><tr><td style="padding: 8px;">Oral Revision</td>

```python
guido van rossum 1991

web developement
software development
system scripting
mathematics

# single comment
'''A
B
C''' #multipleline comment

my_variable_name #snake_case
myVariableName #camelCase
MyVariableName #PascalCase

import random
print(random.range(9)) #to get random number between 0-10
str="hello_world"
len(str) #to get length of anything
str[start:end] slicing ex: str[2:5] llo, str[:5]  hello, str[2:] llo_world, str[-5:-2] wor
print(str.replace("H", "J"))
print(str.split(",")) # returns ['Hello', ' World!']
# \single character, \n newline, \t Tab, x**y exponentation(2**3=8)

str="john"
number1=9 #int
number2=9.7 #float
bool=True/False/1/0
list=[1,]
tuple=(1,)
set={"apple",}
dicitionary={"A":"65",}

| Collection     | Ordered | Changeable | Indexed | Allow Duplicates | Example                  |
|----------------|---------|------------|---------|------------------|--------------------------|
| list[]         | Yes     | Yes        | Yes     | Yes              | `[1, 2, 2, 3]`              |
| tuple()        | Yes     | No         | Yes     | Yes              | `(1, 2, 2, 3)`              |
| set{}          | No      | No         | No      | No               | `{1, 2, 3, 0}`              |
| dictionary{}   | Yes     | Yes        | Yes     | No               | `{'key1': 'value1'}`     |

#list
thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon") #insert()
thislist.remove("banana") #remove()
thislist.pop(1) #pop()
del thislist #to delete list
for x in thislist: #loop the list
thislist.sort() #sort list
thislist.reverse() #reverse the list()
mylist = list(thislist) #to copy list
mylist = mylist + thislist #to join list

#tupple
thistuple = ("apple",) 

#set
thisset = {"apple", "banana", "cherry"}
thisset.add("orange") #add() method in set
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical) #update method in set
mylist = ["kiwi", "orange"]
thisset.update(mylist) #iterables can be directly added
thisset.remove("kiwi") #remove method in set
thisset.discard("banana") #wont raise error if "banana" doesn't exist
x = thisset.pop() #removes the last item
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = set1.union(set2) #{'a', 2, 1, 3, 'b', 'c'} union method in set
set3 = set1 | set2 #{'a', 2, 1, 3, 'b', 'c'} join method in set
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set1.intersection_update(set2) #apple it changes original set1
set3 = set1.difference(set2) #or {'banana', 'cherry'} //set1 - set2
set3 = set1.symmetric_difference(set2) #{'google', 'banana', 'microsoft', 'cherry'} or set1 ^ set2
set1.symmetric_difference_update(set2) #{'google', 'banana', 'microsoft', 'cherry'} but modifies sysmmetric

#dict
thisdict.get("model") #.get() to get value in dict
thisdict.keys() #to get all the keys
for x in thisdict: #using loop
  print(x)
thisdict.values() #to get all the values
for x in thisdict: #using loop
  print(thisdict[x])
thisdict.items() #to get keys & values
for x, y in thisdict.items(): #using loop
  print(x, y)
thisdict.pop("model") #removes "model":"mustang"
thisdict.popitem() #removes last item(key:value)
mydict = thisdict.copy() #to copy dict
pass #skips that block
continue #skips that block
break #comes out of that loop
for(intialize;condition;update){
  #statement1
}
#intialize
while condition:
  #statements1
  #update
else: #statements2
range(start,end,increment)
def my_function(fname,lname='E'): #definition with default parameter
  print(fname + " C" + lname)
my_function("A") #calling
my_function("B","G")
def my_function(*kids): #*args makes list[]
  print("The youngest child is " + kids[2])
my_function("Emil", "Tobias", "Linus")
def myFun(**kwargs): #**ka=wargs makes dicitionary{}
    for key, value in kwargs.items():
        print("%s == %s" % (key, value))
myFun(first='Geeks', mid='for', last='Geeks')
x = lambda a, b : a * b #lambda() input:output is a small anonymous function.
print(x(5, 6))
"r"-Read,"a"-Append,"w"-Write,"x"-Create,"t"-Text,"b"-Binary #file handling
f = open("Demo.txt", "r")
print(f.read())
print(f.readline())
```
