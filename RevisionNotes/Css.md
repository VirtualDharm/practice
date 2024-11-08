<!-- css.md -->
## CSS Sprites:
Combine multiple images into one single larger image.   
This would only require one server request resulting in a faster loading time.               
Without CSS sprites, each image will send out individual server requests.

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
display: grid;
grid-template-columns: 33% 33% 33%;
class in html, className in react
An HTML iframe is used to display a web page within a web page.
<iframe name="iframe_a" height="300px" width="100%"></iframe>
<p><a href="https://www.w3schools.com" target="iframe_a">W3</a></p>
document.getElementById("demo").style.fontSize = "25px";
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta http-equiv="refresh" content="30">
non-semantic elements: <div> and <span> - Tells nothing about its content.
semantic elements: <form>, <table>, and <article> - Clearly defines its content.
&nbsp; space
<select id="cars" name="cars" size="4" multiple novalidate>
max="1979-12-31"
<input type="text" pattern="[A-Za-z]{3}" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" title="3 letter code"> //best validation
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
</script>
getCurrentPosition() method is used to return the user's position.
watchPosition()
clearWatch()
geolocation
drag & drop
localStorage.setItem("lastname", "Smith"); vs sessionStorage.clickcount session based
A web worker is a JavaScript running in the background, without affecting the performance of the page.
Server-Sent Events (SSE) allow a web page to get updates from a server. bole toh notification.



```
## Additional Selectors:
```css
h1 { } : tag
#job-title { } : id
#idname * : All elements inside #idname
div.classname : Div with certain classname
div#idname : Div with certain ID
div p : Paragraphs inside divs
div > p : All p tags, one level deep in div
div + p	: P tags immediately after div
div ~ p	: P tags preceded by div
Background Image and Animation:
background-image: url("nyan-cat.gif");  
animation: 300ms linear 0s infinite;
animation: bounce 300ms linear infinite;
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
p::after,
p::before,
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
Animation Properties:
/* Animation Properties */
animation:
bounce 300ms linear 100ms infinite alternate-reverse both reverse;
/* name duration timing-function delay count direction fill-mode play-state */
```