<!-- html.md -->
### HTML Entities
HTML entities are special codes used to represent reserved or invisible characters in HTML. They begin with an ampersand (`&`) and end with a semicolon (`;`). For example, "`<`" & "`>`", "`&nsbp`".

### Semantic Elements
semantic elements: <header>, <article>, <footer>, <form>, <table>, and <article> - Convey meaning about the structure and content of a webpage.
non-semantic elements: <div> and <span> - Tells nothing about its content.

### Meta Tags
Meta tags provide brief descriptions of webpage content to search engines and web crawlers, which use these tags to understand and categorize the content.

### Session Storage vs Local Storage
Session Storage stores data of the current session, which is cleared automatically when the browser is closed. Local Storage, on the other hand, retains data even when the browser window is closed.

### Data Attribute
Data attributes allow you to assign custom data to an element to store additional information or data when no suitable HTML5 element or attribute exists.

### Top 50 HTML Questions

### Image Map
Using a single image, image map helps link different web pages .     
It defines shapes in images for mapping purposes.      
To link different sections within the same web page by using the `<a>` tag with the `###` symbol.  

```
Other Elements
- Email: `<a href="mailto:jack@abc.com">Email</a>`
- Call: `<a href="tel:+12345678">Call</a>`
- Message: `<a href="sms:+12345678&body=ha%20ha">Msg</a>`
<marquee>: used to set scrolling text on a webpage.
<img loading="lazy" src="https://xxx.png" width="400" height="400">
<iframe title="iframe_a" src="https://maps.google.com/" scrolling="no"></iframe>
<p><a href="https://www.w3schools.com" target="iframe_a">W3</a></p>
<canvas>: Draws graphics via JavaScript.
<audio>: Embeds a sound or an audio stream.
<source>: Resources for the media elements.
<dialog>: Dialog box or sub-window.
<embed>: Embeds an external application.
<picture>: Container for multiple image sources.
<progress>: Indicates the completion progress of a task.
<track>: Text tracks for the media elements.
<bdi>(bi-directional text also): Isolates text.
<colgroup>: Defines a group of columns.
headers: Identifies one or more header cells a cell is related to.
rowspan: Specifies the number of rows a cell should span.
colspan: Specifies the number of columns a cell should span.

<form method="POST" action="api/login">
  <label for="mail">Email: </label>
  <input type="email" id="mail" name="mail"><br/>
  <label for="pw">Password: </label>
  <input type="password" id="pw" name="pw"><br/>
  <input type="submit" value="Login">
  <input type="reset" value="Reset"><br/>
  <input type="checkbox" id="ck" name="ck">
  <label for="ck">Remember me</label>
</form>

<textarea rows="2" cols="30" name="address" id="address"></textarea>

<label for="city">City:</label>
<select name="city" id="city">
    <option value="1">Sydney</option>
    <option value="2">Melbourne</option>
</select>

<fieldset>
    <legend>Your favorite monster</legend>
    <input type="radio" id="kra" name="m">
    <label for="kraken">Kraken</label><br/>
</fieldset>

<label for="b">Choose a browser: </label>
<input list="list" id="b" name="browser"/>
<datalist id="list">
  <option value="Chrome">
  <option value="Firefox">
</datalist>

<input type="text" name="?" value="?" minlength="6"	 required />

###### Input Options
Input options include: `type`, `value`, `name`, `id`, `readonly`, `disabled`, `checked`, `required`,
 `placeholder`, `autocomplete`, `autocapitalize`, `inputmode`, `list`, `maxlength`, `minlength`, `min`,
 `max`, `step`, `pattern`, `autofocus`, `spellcheck`, `multiple`, `accept`.

###### Type Options
Type options include: `text`, `password`, `email`, `tel`, `url`, `number`, `search`, `range`, `checkbox`,
 `radio`, `file`, `hidden`, `image`, `reset`, `button`, `submit`, `color`, `date`, `time`, `month`, `datetime-local`, `week`.

extra:
<tagname style="property:value;">
<a target="_self/_blank/_parent/_top">
onclick="document.location='default.asp'"
onClick={shoot} //in react
to move in same file make bookmarks:
<h2 id="C4">Chapter 4</h2>
<a href="#C4" style="float:right;">Jump to Chapter 4</a>
<img src="workplace.jpg" usemap="#workmap" width="400" height="379">
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" href="computer.htm">
</map>
<p style="background-image: url('img_girl.jpg');">
<caption>Monthly savings</caption>
<th rowspan/colspan="2">Name</th>
list-style-type: none;
display: grid;
grid-template-columns: 33% 33% 33%;
class in html, className in react
document.getElementById("demo").style.fontSize = "25px";
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta http-equiv="refresh" content="30">
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