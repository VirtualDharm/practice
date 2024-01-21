# CSS sprites:
combine multiple images into one single larger image. This would only require one server request resulting in a faster loading time. Without CSS sprites, each image will send out individual server requests.
# !important:
it is used to provide more weight.
# visibility vs display
visibility: hidden hides the element, but it occupies space and affects the layout of the document.
display: none also hides the element but not occupy space. It will not affect the layout of the document.
# the different ways to position a certain element in CSS?
Position can be static, relative, absolute, fixed, and sticky

Static: Default position. Element flows normally. Properties like top, right, bottom, left, and z-index don't apply.
Relative: Adjusted relative to itself without changing the layout.
Absolute: Removed from flow, positioned relative to its closest positioned ancestor or the initial containing block.
Fixed: Removed from flow, positioned relative to the viewport. Doesn't move with scrolling.
Sticky: Acts as relative until a specified threshold, then becomes fixed. Hybrid of relative and fixed positioning.
# block vs inline vs inline-block
Block elements start on a new line, taking up the full width. Example: <div>.
Inline elements don't start on a new line, staying within the content flow. Example: <span>.
Inline-block elements, like inline, allow padding and margins, while still staying in the flow. Example: <img> or <button>.
# pseudo-element:
it allows you to manipulate parts of an element in a special way. 
p#id::first-letter {
    color: red;
}
# Flexbox and Grid:
flexbox is a one-dimensional layout to create either a row or a column layout while grid Is a two-dimensional layout that can handle both row and column layout.
# Ways to Center an Element with CSS:
.container { position: relative; }
.child { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
.container { display: flex; place-content: center; }
.container { display: grid; place-items: center; }