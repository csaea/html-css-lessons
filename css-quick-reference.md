# **CSS Quick Reference**

Quick reference for practical CSS fundamentals using **external stylesheets**.
For more detailed documentation, see [W3Schools CSS](https://www.w3schools.com/css/), [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS), or [TutorialsPoint CSS](https://www.tutorialspoint.com/css/).

---

## Table of Contents

* [Connecting CSS](#connecting-css)
* [Selectors](#selectors)
* [Text and Fonts](#text-and-fonts)
* [Colors and Backgrounds](#colors-and-backgrounds)
* [Boxes and Borders](#boxes-and-borders)
* [Spacing](#spacing)
* [Display and Position](#display-and-position)
* [Tables and Lists](#tables-and-lists)
* [Transitions and Shadows](#transitions-and-shadows)
* [Units and Measurements](#units-and-measurements)

---

## Connecting CSS

Link an external stylesheet in the `<head>` of your HTML:

```html
<link rel="stylesheet" href="style.css">
```

---

## Selectors

Selectors determine *which elements* CSS rules apply to.

| Selector | Example     | Description                 |
| -------- | ----------- | --------------------------- |
| Element  | `p {}`      | Targets all `<p>` elements  |
| Group    | `h1, h2 {}` | Targets all listed elements |
| Class     | .special {} | Targets `class="special"` within an HTML tag |

---

## Text and Fonts

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(60, 60, 60);
  text-align: center;
}
```

| Property          | Example                       | Description                     |
| ----------------- | ----------------------------- | ------------------------------- |
| `font-family`     | `font-family: Verdana;`       | Sets font type                  |
| `color`           | `color: green;`               | Sets text color                  |
| `font-size`       | `font-size: 16px;`            | Controls text size              |
| `text-align`      | `text-align: center;`         | Aligns text                     |
| `letter-spacing`  | `letter-spacing: 2px;`        | Adjusts spacing between letters |
| `line-height`     | `line-height: 1.5;`           | Adjusts line spacing            |
| `text-decoration` | `text-decoration: underline;` | Adds underline or line-through  |

---

## Colors and Backgrounds

```css
body {
  background-color: purple;
}

header {
  background: linear-gradient(to right, lightblue, white);
}
```

| Property            | Example                                 | Description                        |
| ------------------- | --------------------------------------- | ---------------------------------- |
| `color`             | `color: crimson;`                       | Sets text color                    |
| `background-color`  | `background-color: blue;`              | Sets background color              |
| `background-image`  | `background-image: url('pattern.png');` | Adds background image              |
| `background-repeat` | `background-repeat: repeat;`            | Tiles image (x and y)              |
| `background-repeat` | `background-repeat: no-repeat;`         | Displays image once                |
| `background-size`   | `background-size: cover;`               | Scales background to fill area     |
| `background-size`   | `background-size: contain;`             | Fits entire image within container |
| `opacity`           | `opacity: 0.8;`                         | Sets transparency (0–1)            |

---

## Boxes and Borders

A `<div>` is a generic container element used to group other HTML elements for styling or layout.

```css
div {
  border: 2px solid teal;
  border-radius: 10px;
  width: 60%;
  height: auto;
}
```

| Property          | Example                    | Description                                |
| ----------------- | -------------------------- | ------------------------------------------ |
| `border`          | `border: 1px solid black;` | Adds border                                |
| `border-radius`   | `border-radius: 8px;`      | Rounds corners                             |
| `width`, `height` | `width: 300px;`            | Sets box size                              |
| `max-width`       | `max-width: 100%;`         | Restrains growth                           |
| `box-sizing`      | `box-sizing: border-box;`  | Includes padding and border in total width |

---

## Spacing

```css
div {
  margin: 0 auto 1em auto; /* top 0, horizontal center, bottom 1em */
  padding: 15px;
}
```

| Property        | Example                            | Description                   |
| --------------- | ---------------------------------- | ----------------------------- |
| `margin`        | `margin: 10px;`                    | Space outside border          |
| `padding`       | `padding: 5px;`                    | Space inside border           |
| `margin: auto;` | Centers block element horizontally |                               |
| `gap`           | `gap: 10px;`                       | Space between flex/grid items |

You can target sides individually: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

---

## Display and Position

```css
h1 {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
}

div {
  width: 50%;
  margin: 0 auto 1em auto; /* top 0, horizontal center, bottom 1em */
  text-align: center;      /* center text inside */
}
```

| Property                         | Example               | Description                  |
| -------------------------------- | --------------------- | ---------------------------- |
| `margin`                        | ` margin: 0 auto 1em auto;` | Centers all content of tag    |
| `display`                        | `display: block;`     | Sets element display type    |
| `position`                       | `position: relative;` | Controls element positioning |
| `top`, `left`, `right`, `bottom` | `top: 20px;`          | Positions element            |
| `z-index`                        | `z-index: 2;`         | Layer order                  |
| `overflow`                       | `overflow: hidden;`   | Hides overflowing content    |

---

## Tables and Lists

```css
table {
  border-collapse: collapse;
  width: 60%;
  margin: 0 auto 1em auto;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
}

ul {
  list-style-type: square;
}
```

| Property          | Example                        | Description          |
| ----------------- | ------------------------------ | -------------------- |
| `border-collapse` | `collapse`                     | Merges table borders |
| `list-style-type` | `circle`                       | Defines bullet type  |
| `text-align`      | `center`                       | Centers cell text    |
| `box-shadow`      | `3px 3px 8px rgba(0,0,0,0.25)` | Adds drop shadow     |

**Box-shadow syntax:**
`box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius(optional)] [color];`

* Horizontal → left/right
* Vertical → up/down
* Blur → softness
* Spread → optional, grows/shrinks shadow
* Color → shadow color

---

## Transitions and Shadows

```css
button {
  background-color: steelblue;
  color: white;
  transition: box-shadow 0.3s ease;
}

button:hover {
  background-color: navy;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
}
```

| Property     | Example                        | Description          |
| ------------ | ------------------------------ | -------------------- |
| `transition` | `transition: all 0.3s ease;`   | Smooth animation     |
| `box-shadow` | `4px 4px 12px rgba(0,0,0,0.2)` | Adds shadow          |
| `hover`      | `button:hover { ... }`         | Style on mouse hover |

---

## Units and Measurements

| Unit       | Example | Description                       |
| ---------- | ------- | --------------------------------- |
| `px`       | `16px`  | Fixed pixels                      |
| `%`        | `80%`   | Relative to parent                |
| `em`       | `2em`   | Relative to font size             |
| `rem`      | `1rem`  | Relative to root font size        |
| `vh`, `vw` | `100vh` | Relative to viewport height/width |

---

### More to come as we continue learning CSS in class

*Created by Mr. Harrell*

