# **CSS Quick Reference**

Quick reference for practical CSS fundamentals using **external stylesheets**.
For more detailed documentation, see [W3Schools CSS](https://www.w3schools.com/css/), the [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS), or [TutorialsPoint CSS](https://www.tutorialspoint.com/css/).

---

## Table of Contents

* [Connecting CSS](#connecting-css)
* [Selectors](#selectors)
* [Text and Fonts](#text-and-fonts)
* [Colors and Backgrounds](#colors-and-backgrounds)
* [Boxes and Borders](#boxes-and-borders)
* [Spacing](#spacing)
* [Display and Position](#display-and-position)
* [Flexbox](#flexbox)
* [Tables and Lists](#tables-and-lists)
* [Transitions and Shadows](#transitions-and-shadows)
* [Animations](#animations)
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

| Selector | Example         | Description                               |
| -------- | --------------- | ----------------------------------------- |
| Element  | `p {}`          | Targets all `<p>` elements                |
| Class    | `.highlight {}` | Targets elements with `class="highlight"` |
| Group    | `h1, h2, h3 {}` | Targets all listed elements               |

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
| `font-size`       | `font-size: 16px;`            | Controls text size              |
| `text-align`      | `text-align: center;`         | Aligns text                     |
| `text-transform`  | `text-transform: uppercase;`  | Changes letter case             |
| `letter-spacing`  | `letter-spacing: 2px;`        | Adjusts spacing between letters |
| `line-height`     | `line-height: 1.5;`           | Adjusts line spacing            |
| `text-decoration` | `text-decoration: underline;` | Adds underline or line-through  |

---

## Colors and Backgrounds

```css
body {
  background-color: bisque;
}

header {
  background: linear-gradient(to right, lightblue, white);
}

section {
  background-image: url("pattern.png");
  background-repeat: repeat;
}
```

| Property            | Example                                 | Description                        |
| ------------------- | --------------------------------------- | ---------------------------------- |
| `color`             | `color: crimson;`                       | Sets text color                    |
| `background-color`  | `background-color: beige;`              | Sets background color              |
| `background-image`  | `background-image: url('pattern.png');` | Adds background image              |
| `background-repeat` | `background-repeat: repeat;`            | Tiles image (x and y)              |
| `background-repeat` | `background-repeat: no-repeat;`         | Displays image once                |
| `background-size`   | `background-size: cover;`               | Scales background to fill area     |
| `background-size`   | `background-size: contain;`             | Fits entire image within container |
| `opacity`           | `opacity: 0.8;`                         | Sets transparency (0–1)            |

---

## Boxes and Borders

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
section {
  margin: 20px;
  padding: 15px;
}
```

| Property        | Example                            | Description                   |
| --------------- | ---------------------------------- | ----------------------------- |
| `margin`        | `margin: 10px;`                    | Space outside border          |
| `padding`       | `padding: 5px;`                    | Space inside border           |
| `margin: auto;` | Centers block element horizontally |                               |
| `gap`           | `gap: 10px;`                       | Space between flex/grid items |

You can target sides individually:
`margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

---

## Display and Position

```css
header {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
}
```

| Property                         | Example               | Description                  |
| -------------------------------- | --------------------- | ---------------------------- |
| `display`                        | `display: block;`     | Sets element display type    |
| `position`                       | `position: relative;` | Controls element positioning |
| `top`, `left`, `right`, `bottom` | `top: 20px;`          | Positions element            |
| `z-index`                        | `z-index: 2;`         | Layer order                  |
| `overflow`                       | `overflow: hidden;`   | Hides overflowing content    |

---

## Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

| Property          | Example         | Description            |
| ----------------- | --------------- | ---------------------- |
| `display: flex`   | —               | Enables flexbox layout |
| `justify-content` | `space-between` | Horizontal alignment   |
| `align-items`     | `center`        | Vertical alignment     |
| `flex-direction`  | `column`        | Layout direction       |
| `flex-wrap`       | `wrap`          | Allows wrapping        |

---

## Tables and Lists

```css
table {
  border-collapse: collapse;
  width: 60%;
  margin: 0 auto;
  box-shadow: 1px 1px 4px rgba(0, 255, 255, 0.3);
}

ul {
  list-style-type: square;
}
```

| Property          | Example                       | Description          |
| ----------------- | ----------------------------- | -------------------- |
| `border-collapse` | `collapse`                    | Merges table borders |
| `list-style-type` | `circle`                      | Defines bullet type  |
| `text-align`      | `center`                      | Centers cell text    |
| `box-shadow`      | `1px 1px 4px rgba(0,0,0,0.3)` | Adds drop shadow     |

---

## Transitions and Shadows

```css
button {
  background-color: steelblue;
  color: white;
  transition: 0.3s;
}

button:hover {
  background-color: navy;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
}
```

| Property     | Example                       | Description          |
| ------------ | ----------------------------- | -------------------- |
| `transition` | `transition: all 0.3s ease;`  | Smooth animation     |
| `box-shadow` | `1px 2px 4px rgba(0,0,0,0.3)` | Adds shadow          |
| `hover`      | `.btn:hover`                  | Style on mouse hover |

---

## Animations

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 2s ease-in;
}
```

| Property                    | Example                         | Description                  |
| --------------------------- | ------------------------------- | ---------------------------- |
| `@keyframes`                | `@keyframes spin { ... }`       | Defines animation steps      |
| `animation`                 | `animation: fadeIn 2s ease-in;` | Applies animation to element |
| `animation-delay`           | `animation-delay: 1s;`          | Starts animation after delay |
| `animation-iteration-count` | `infinite`                      | Loops animation continuously |

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
