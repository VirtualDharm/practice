<!-- html.md -->
## HTML Entities
HTML entities are special codes used to represent reserved or invisible characters in HTML. They begin with an ampersand (`&`) and end with a semicolon (`;`). For example, "`<`" & "`>`", "`&nsbp`".

## Semantic Elements
Semantic elements in HTML convey meaning about the structure and content of a webpage. Examples include `<header>`, `<article>`, and `<footer>`.

## Meta Tags
Meta tags provide brief descriptions of webpage content to search engines and web crawlers, which use these tags to understand and categorize the content.

## Session Storage vs Local Storage
Session Storage stores data of the current session, which is cleared automatically when the browser is closed. Local Storage, on the other hand, retains data even when the browser window is closed.

## Data Attribute
Data attributes allow you to assign custom data to an element to store additional information or data when no suitable HTML5 element or attribute exists.

## Top 50 HTML Questions

## Image Map
An image map helps link different web pages using a single image. It defines shapes in images for mapping purposes. It can also be used for linking to different sections within the same web page by using the `<a>` tag with the `##` symbol.

## Marquee
The `<marquee>` tag is used to set scrolling text on a webpage.

## Additional Elements

## Links
- Email: `<a href="mailto:jack@abc.com">Email</a>`
- Call: `<a href="tel:+12345678">Call</a>`
- Message: `<a href="sms:+12345678&body=ha%20ha">Msg</a>`

## Image Loading
`<img loading="lazy" src="https://xxx.png" width="400" height="400">`

## Google Maps Embed
```html
<iframe title="New York" width="342" height="306" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway" scrolling="no"></iframe>

Other Elements
<canvas>: Draws graphics via JavaScript.
<audio>: Embeds a sound or an audio stream.
<source>: Resources for the media elements.
<dialog>: Dialog box or sub-window.
<embed>: Embeds an external application.
<picture>: Container for multiple image sources.
<progress>: Indicates the completion progress of a task.
<track>: Text tracks for the media elements.
<bdi>: Isolates text.
<colgroup>: Defines a group of columns.
colspan: Specifies the number of columns a cell should span.
headers: Identifies one or more header cells a cell is related to.
rowspan: Specifies the number of rows a cell should span.

```html
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
```
###### Input Options
Input options include: `type`, `value`, `name`, `id`, `readonly`, `disabled`, `checked`, `required`, `placeholder`, `autocomplete`, `autocapitalize`, `inputmode`, `list`, `maxlength`, `minlength`, `min`, `max`, `step`, `pattern`, `autofocus`, `spellcheck`, `multiple`, `accept`.

###### Type Options
Type options include: `text`, `password`, `email`, `tel`, `url`, `number`, `search`, `range`, `checkbox`, `radio`, `file`, `hidden`, `image`, `reset`, `button`, `submit`, `color`, `date`, `time`, `month`, `datetime-local`, `week`.