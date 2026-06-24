# #1 Project
This is my second protoype of my project.
Why?
- the first one had me confused and lost, and while developping the #0 i realised that i started off the wrong foot, so we #runitback

In #2 I will be utilsing the following languages:
- HTML
- CSS
-Javascript
## index.html
This file is what brings the app to life on the internet(its the canvas)

`<html>` elements:
- `<head>`
  - its the identity & brains of what the users sees on the webpage(the supplier)
  - this tag is the metadata section; its where all the small details that gives ur app "life" the small details that are worked on behind the scenes.

- `<body>`
  - the supply chains(connections)(the vendor)
  - the structure of the webpage; this is what the user actually sees and interacts with the page
  - `<div>`
    - this tag is to create a "box" for specific pieces of data
  - Elements
    - Elements are individual pieces of content that makes up the webpage
    - `<h1>` to `<h6>` - headings
    - `<p>` - paragraphs
    - `<img>` - images
    - `<a>` - anchor (the doorways or portals to other part of the webpage)
    - `<button>` - buttons
    - `<input>` - input

## style.css
This file is what gives "colour & details" to my application(the paint)
- CSS Properties(Element Styling):
  - `display: flex;` - turns the body into a flexbox.
  - `position: absolute` -
  - `felx-direction: ;` - gives each element a space of their own.
  - `align-items: ;` & `justify-content`- positions the text on the screen(one controls the alignment along the main axis(the direction the items are laying out) and one along the cross axis(the opposite direction))
  - `height: *percentage vh` - is what the element refers too to know what size(vertical space) it should occupy on the screen
  - `margin: *number` - creates an invisible border for an element
  - `font-family: *font;` - font of element
  - `background-colour: *color code` - color of element

`<style>` methods:
- Method A : Simple Text Alignment
  - `text-align: *position;`
- Method B : Spacing out elements using Margins
  - `margin-*position: *pixel position;`
- Method C : Flexbox(The Modern Layout Powerhouse)
   ```
    <style>
        body {
            display: flex;
            flex-direction: column; /* Stacks items vertically */
            align-items: center;    /* Centers them horizontally */
            justify-content: center;/* Centers them vertically on the screen */
            height: 100vh;          /* Makes the body take up 100% of the screen height */
        }
        </style>
    ```

things to add: <head> descriptions + style additions