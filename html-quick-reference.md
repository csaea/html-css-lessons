# **HTML Quick Reference**

Quick reference for HTML fundamentals.

For more detailed documentation, use the guides from [W3Schools](https://www.w3schools.com/html/), the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML), or [TutorialsPoint](https://www.tutorialspoint.com/html/index.htm).

---

## Table of Contents

* [Structure](#structure)
* [Text Formatting](#text-formatting)
* [Links](#links)
* [Images](#images)
* [Lists](#lists)
* [Tables](#tables)
* [Forms](#forms)
* [Attributes](#attributes)
* [Semantic Elements](#semantic-elements)
* [Comments and Meta](#comments-and-meta)

---

## Structure

HTML (HyperText Markup Language) defines the structure of a webpage using *elements* wrapped in *tags*.
Tags come in pairs: an **opening tag** `<tag>` and a **closing tag** `</tag>`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

### Common Structure Tags

| Tag               | Description                                      |
| ----------------- | ------------------------------------------------ |
| `<!DOCTYPE html>` | Declares the document type.                      |
| `<html>`          | Root element for all HTML.                       |
| `<head>`          | Contains metadata and references (CSS, scripts). |
| `<body>`          | Contains all visible page content.               |

---

## Text Formatting

### Headings

HTML supports six heading levels, from `<h1>` (largest) to `<h6>` (smallest).

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Subheading</h3>
```

### Paragraphs and Breaks

```html
<p>This is a paragraph.</p>
<br> <!-- Line break -->
<hr> <!-- Horizontal rule -->
```

### Emphasis and Style

```html
<strong>Important, bold text</strong>
<em>Emphasized, italic text</em>
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Smaller text</small>
```

---

## Links

```html
<a href="https://xkcd.com/1897/">Visit a Page</a>
<a href="mailto:someone@example.com">Email Me</a>
<a href="tel:+15551234567">Phone Me</a>
```

**Attributes:**

* `href` – the destination.
* `target="_blank"` – opens link in a new tab.

---

## Images

```html
<img src="cat.jpg" alt="A small gray cat" width="200" height="150">
```

**Attributes:**

* `src` – path to the image.
* `alt` – text shown if image fails to load (important for accessibility).
* `width` and `height` – size control (can also be set with CSS).

---

## Lists

### Unordered List

```html
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>
```

### Ordered List

```html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
```

### Description List

```html
<dl>
  <dt>HTML</dt>
  <dd>Defines structure of webpages.</dd>
</dl>
```

---

## Tables

```html
<table>
  <tr>
    <th>Animal</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>Dog</td>
    <td>Mammal</td>
  </tr>
  <tr>
    <td>Robin</td>
    <td>Bird</td>
  </tr>
</table>
```

**Common Table Tags:**

| Tag         | Meaning           |
| ----------- | ----------------- |
| `<table>`   | Table container   |
| `<tr>`      | Table row         |
| `<th>`      | Table header cell |
| `<td>`      | Table data cell   |
| `<caption>` | Table title       |

---

## Forms

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="username">

  <label for="age">Age:</label>
  <input type="number" id="age" name="userage">

  <input type="submit" value="Submit">
</form>
```

**Common Input Types:**
`text`, `number`, `email`, `password`, `checkbox`, `radio`, `submit`, `reset`, `color`, `date`.

---

## Attributes

Attributes appear inside opening tags and define properties or behavior of an element.

Example:

```html
<p id="intro" class="highlight" title="Welcome message">
  Hello there.
</p>
```

**Common Attributes:**

| Attribute | Purpose              |
| --------- | -------------------- |
| `id`      | Unique identifier    |
| `class`   | Used for CSS styling |
| `title`   | Tooltip text         |
| `style`   | Inline CSS styling   |
| `src`     | Source file          |
| `alt`     | Alternate text       |
| `href`    | Hyperlink reference  |

---

## Semantic Elements

Semantic tags describe the meaning of content — not just how it looks.

| Tag                         | Meaning                      |
| --------------------------- | ---------------------------- |
| `<header>`                  | Page or section header       |
| `<nav>`                     | Navigation links             |
| `<main>`                    | Main page content            |
| `<section>`                 | Thematic grouping of content |
| `<article>`                 | Independent content block    |
| `<aside>`                   | Side content (sidebar)       |
| `<footer>`                  | Page or section footer       |
| `<figure>` / `<figcaption>` | Image with caption           |

---

## Comments and Meta

### Comments

```html
<!-- This is a comment -->
```

### Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Purpose:**

* `charset` defines the character encoding.
* `viewport` ensures the page scales correctly on all devices.

---

### More to come as we continue learning HTML in class

*Created by Mr. Harrell*

