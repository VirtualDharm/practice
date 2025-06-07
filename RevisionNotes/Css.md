<!-- css.md -->
## CSS Sprites:
Combine multiple images into one single larger image.   
This would only require one server request resulting in a faster loading time.               
Without CSS sprites, each image will send out individual server requests.
#home {
  width: 46px;
  height: 44px;
  background: url(img_navsprites.gif) 0 0;
}
#next {
  width: 43px;
  height: 44px;
  background: url(img_navsprites.gif) -91px 0;
}
<body>
<img id="home" src="img_trans.gif" width="1" height="1">
<img id="next" src="img_trans.gif" width="1" height="1">
</body>

## visibility vs display:
- `visibility: hidden` hides the element, but it occupies space and affects the layout of the document.
- `display: none` also hides the element but not occupy space. It will not affect the layout of the document.

## Different ways to position a certain element in CSS:
- **Static:** Default position. Element flows normally. Properties like top, right, bottom, left, and z-index don't apply.
- **Relative:** Adjusted relative to itself without changing the layout.
- **Absolute:** Removed from flow, positioned relative to its closest positioned ancestor or the initial containing block.
- **Fixed:** Removed from flow, positioned relative to the viewport. Doesn't move with scrolling.
- **Sticky:** Acts as relative until a specified threshold, then becomes fixed. Hybrid of relative and fixed positioning.

## Block vs Inline vs Inline-block:
- **Block:** Elements start on a new line, taking up the full width. Example: `<div>`.
- **Inline:** Elements don't start on a new line, staying within the content flow. Example: `<span>`.
- **Inline-block:** Elements, like inline, allow padding and margins, while still staying in the flow. Example: `<img>` or `<button>`.

## Pseudo-element:
It allows you to manipulate parts of an element in a special way.
```css
p#id::first-letter {
    color: red;
}
```
## Flexbox and Grid:
Flexbox is a one-dimensional layout to create either a row or a column layout.                
Grid is a two-dimensional layout that can handle both row and column layout.               
Grid is very useful for every type of designs.             
## Ways to Center an Element with CSS:
```css
.container { 
    position: relative; 
}  
.child { 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
}  
.container { 
    display: flex; 
    place-content: center; 
}  
.container { 
    display: grid; 
    place-items: center; 
}

Extras:
background-attachment: fixed;
box-sizing: border-box; //to keep box size fixed
word-spacing: 10px;
white-space: nowrap;
font-family: Arial, Verdana, sans-serif;
<i class="fas fa-cloud"></i>
<div style="overflow-x: auto;"><table></table></div>
overflow:visible, hidden, scroll, auto
h1 { } : tag
#job-title { } : id
#idname * : All elements inside #idname
div.classname : Div with certain classname
div#idname : Div with certain ID
Descendant (space) div p : Paragraphs inside divs 
Direct child (>) div > p : All p tags, one level deep in div
Next sibling (+) div + p	: P tags immediately after div 
Subsequent-sibling (~) div ~ p	: P tags preceded by div
li:last-child {
  border-right: none;
}
a[target]/[attribute] { or a[target="_blank"]/[attribute="value"] or [title~="flower"]/[attribute~="value"] or [class|="top"]/[attribute|="value"] hypem(-) or [class^="top"]/[attribute^="value"] start or [class$="test"]/[attribute$="value"]/[class$="test"] ends or [class*="te"]/[attribute*="value"] contains or input[type="text"]
  background-color: yellow;
}
Animation:
input[type=text] {
  width: 130px;
  transition: width 0.4s ease-in-out;
}
input[type=text]:focus/hover {
  width: 100%;
}
cursor: pointer;all-scroll;auto;cell;col-resize;context-menu;copy;crosshair;default;e-resize;ew-resize;grab;grabbing;help;move;n-resize;ne-resize;nesw-resize;ns-resize;nw-resize;nwse-resize;no-drop;none;not-allowed;pointer;progress;row-resize;s-resize;se-resize;sw-resize;text;url;w-resize;wait;zoom-in;zoom-out;
variables in css are --myVariable:value or counters:
:root { --blue: #1e90ff; } var:(--blue)
body {
  counter-reset: section;
}
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
px : pixels (1px = 1/96th of 1in), cm,mm,in
width: calc(100% - 100px);
background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
hero-image: .hero-image {
  background: url(img_man.jpg) no-repeat center;
  background-size: cover;
  height: 500px;
  position: relative;
}
background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
CSS transforms allow you to move, rotate, scale, and skew elements.
transform: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY());
div { //animation
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
  animation-direction:alternate;
}
@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
animation: 300ms linear 0s infinite;
animation: bounce 300ms linear 100ms infinite alternate-reverse both reverse;
/* name duration timing-function delay count direction fill-mode play-state */
-webkit-box-reflect: below 20px;
object-fit: cover;
object-position: 80% 100%;
-webkit-mask-image: url(w3logo.png); //masking
mask-image: url(w3logo.png);
mask-repeat: no-repeat;  
float: left;
column-count: 3;
@media screen and (max-width: 992px) {}
<div style="flex-grow: 4">2</div>
<div style="flex-grow: 8">3</div>
display: grid;
grid-template-columns: auto auto auto;
grid-column-start: 1;
grid-column-end: 3;
using float, flex or grid
```
## Grid Layout:
```css
#container {
    display: grid;
    grid: repeat(2, 60px) / auto-flow 80px;
}
#container > div {
    background-color: #8ca0ff;
    width: 50px;
    height: 50px;
}
/* Attribute Selector */
div[attribute="SomeValue"] {
    background-color: red;
}
```
## Pseudo-elements and Child Selectors::
```css
/* First Child Selector */
p:first-child {
    font-weight: bold;
}
p::before,
p::after,
p::first-letter,
p::first-line,
::selection,
::placeholder,
:root,
:target,
div:empty,
p:lang(en),
:not(span)
p:first-child,
p:last-child,
p:first-of-type,
p:last-of-type,
p:nth-child,
p:nth-last-child,
p:nth-of-type,
p:nth-last-of-type,
p:only-of-type,
p:only-child
Text Styling and Color:
/* Text Styling */
font-family,
font-size,
letter-spacing,
line-height,
font-weight,
font-style,
text-decoration,
text-align,
text-transform: capitalize, uppercase, lowercase
/* Color */
color: inherit;
color: initial;
color: unset;
color: transparent;
color: currentcolor;
```