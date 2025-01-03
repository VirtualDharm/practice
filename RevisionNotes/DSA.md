***India meh 50Lakhs developers hai***

###### some difference between js & py & java
```python
Math.floor((l+r)/2) vs (l+r)//2
.length() vs len()
== in js vs === in py
prefer this: i+=2
[x for x in nums if x>=0] in py for filter()
sort() returns none in py
for i in range(1,len(nums)): in py , for (String i : cars) {} in java 
Math.max vs max
true/false vs True/False
array.charCodeAt(0)&String.fromCharCode(65)/Array.from("ABCDEFG") vs ord('a')&chr(97)
shift is come, unshift is go
slice(to cut) array.slice(1, 3) vs splice(to add) array.splice(2, 0, "Lemon")
let in vs let of ka diff, in for index/of for value
ascii code=123 is '{'
s = s.trim();
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
text.indexOf("locate",15);
let x = 9.656;
x.toFixed(2);
arr.includes('var');
Math.ceil(4.2):5 rounded up Math.floor(4.9):4 rounded down
set.methods : .has(),.add(),.values();
map.methods : .has("apples"),.get("apples"),.set("apples", 500),.size,.delete("apples"),.clear(),
groupBy() 
```

###### DSA
in leetcode whenever we need subarrays, it is a sliding window problem
Recursion + Memoization = Dyanmic programming          
recursion is used to add a range of numbers together by breaking it down into the simple task. Should have breakeven cond.          
10+(9+(8+sum(7)))         
bactracking hai toh dfs

###### concepts
abstraction: hiding unnecessary details(what we do as an SDE)
encapsulation: capsule ki tara
inheritance: can take use of feilds & methods
polymorphism: to perform certain actions in different ways:- 
Overloading: Same method name with different parameters in the same class. 
Overriding: Child class redefines a method already defined in its parent class.

docker is lunch box: dal/chwaal(main code), watermelon(libraries), salad(dependencies)
mono vs micro services: primary class teachers(all in one) vs professors(very limited)
kafka/redis: external ram ke jaisa hai, example live location updation of delivery partners
Data sharding: closet ko divide kr dete, tere kapde yaha ni aane chahiye mere waha ni aayenge, 
database ko sections meh divide krke, micro service architecture pe daal denge
CDN(edge servers): inh meh most watched ki copy loaded hoti hai, jisse 4 sec ka load, 100ms rh jaata hai. low latency, high quality, better ux

```markdown
# Header 1
## Header 2

# Blockquotes:
> This is a blockquote
>> Nested Blockquote

# Lists:
* Item 1
* Item 2
    * Item 3a
    * Item 3b
1. Item 1
2. Item 2
    a. Item 3a
    b. Item 3b

# Links:
[link](http://google.com)
<http://google.com>

# Emphasis:
*italic*
**bold**
`inline code`
~~struck out~~

# Tables:
| Left | Center | Right |
|:-----|:------:|------:|
| Cell1|Centered| $1600 |
| Cell2| Cell3  |   $12 |

# Images:
![GitHub Logo](/images/logo.png)
escape character is \
```
# Instabyte.io