<!-- HOW | WHAT -->

```markdown

Headers (setext style):

markdown
Copy code
Header 1
========

Header 2
--------
Header 1
Header 2
Blockquotes:

markdown
Copy code
> This is
> a blockquote
>
> > Nested
> > Blockquote
This is
a blockquote

Nested
Blockquote

Unordered List:

markdown
Copy code
* Item 1
* Item 2
    * item 3a
    * item 3b
Item 1
Item 2
item 3a
item 3b
Ordered List:

markdown
Copy code
1. Item 1
2. Item 2
    a. item 3a
    b. item 3b
Item 1
Item 2
a. item 3a
b. item 3b
Links:

less
Copy code
[link](http://google.com)

[link][google]
[google]: http://google.com

<http://google.com>
link

[link][google]
[google]: http://google.com

http://google.com

Emphasis:

markdown
Copy code
*italic*
_italic_

**bold**
__bold__

`inline code`
~~struck out~~
italic
italic

bold
bold

inline code
struck out

Horizontal line:

yaml
Copy code
Hyphens
---
Asterisks
***
Underscores
___
Hyphens
Asterisks

Underscores

Code:

javascript
Copy code
console.log("This is a block code")
css
Copy code
.button { border: none; }
css
Copy code
4 space indent makes a code block
inline code
Inline code has back-ticks around it

Tables:

ruby
Copy code
| Left column | Center column | Right column |
|:------------|:-------------:|-------------:|
| Cell 1      |   Centered    |        $1600 |
| Cell 2      |    Cell 3     |          $12 |
Left column	Center column	Right column
Cell 1	Centered	$1600
Cell 2	Cell 3	$12
Images:

scss
Copy code
![GitHub Logo](/images/logo.png)

![Alt Text](url)

[![GitHub Logo](/images/logo.png)](https://github.com/)

[![Alt Text](image_url)](link_url)

Reference style

![alt text][logo]

[logo]: /images/logo.png "Logo Title"
GitHub Logo

Alt Text

GitHub Logo

Alt Text

Reference style

alt text

escape character is \
```