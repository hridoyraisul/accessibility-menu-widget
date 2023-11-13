# Accessibility Menu Widget

The Accessibility Menu Widget is designed to enhance the user experience by providing a range of accessibility features for web pages.

## Features

The widget includes the following features:

- **Font Increase/Decrease:** Allows users to adjust the font size for better readability.
- **Big Cursor:** Increases the cursor size for improved visibility.
- **Screen Reader:** Provides a voiceover for the content-text on the page.
- **Invert Color:** Inverts the colors on the screen for better contrast.
- **Highlight Links:** Emphasizes links for easier identification.
- **Highlight Heading:** Highlights headings for better navigation.
- **Reading Guide:** Adds a reading guide to assist in following text.
- **Black & White:** Converts the page to black and white for reduced visual complexity.
- **Reset:** Resets all changes made by the widget to default settings.
- **Close:** Closes the accessibility menu widget.

## Usage

To integrate the Accessibility Menu Widget into your web page:

1. Include the necessary script and CSS files.
2. Create a trigger (button, link, etc.) to open the menu.
3. Implement the necessary JavaScript functions to handle each feature's functionality.

## Installation

You can install the widget by including the provided JavaScript and CSS files in your project.

## How to Use

#### CSS Initialization
```css
<link rel="stylesheet" href="css/accessibility-menu.css">
```

#### JavaScript Initialization
```javascript
<script src="js/accessibility-menu.js"></script>
```

#### HTML Initialization

Include the following HTML code in your web page to create the accessibility menu button.

```html
<button class="btn btn-outline-dark m-4 accessibility-menu-btn" id="settings-toggle">
     🤖 <b>Accessibility Menu</b>
</button>
```
For the menu to work properly, the button must have the class `accessibility-menu-btn` and the id `settings-toggle`.
Now, include `.content` class to the content of your web page.v Like below:

```html
<div class="content">
    <div>
        <h1>This is a heading</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
        </p>
    </div>
</div>
```
This is how your widget should look like:

![Accessibility Menu Widget](screenshot/img.png)

----------------------------------------------------

Contributing
------------
Raisul Islam Hridoy -
Software Engineer, Riseup Labs