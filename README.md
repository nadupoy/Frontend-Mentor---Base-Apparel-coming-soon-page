# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

<br>

### Screenshot

![Mobile device - 375px](./screenshots/Mobile%20-%20375px.png)
*Mobile - 375px*

<br>

![Desktop device - 1440px](./screenshots/Desktop%20-%201440px.png)
*Desktop - 1440px*

<br>

### Links

- Solution URL: [frontendmentor.io](https://www.frontendmentor.io/solutions/client-side-email-verification-using-vanilla-javascript-rOo8Zy_Bzr)
- Live Site URL: [netlify.app](https://email-signup-page.netlify.app/)

<br>

## My process

### Built with

- Semantic HTML5 markup
- Vanilla CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

- The `<form>` element's [**`autocomplete`**](https://www.w3schools.com/tags/att_form_autocomplete.asp) and [**`novalidate`**](https://www.w3schools.com/tags/att_form_novalidate.asp) attributes.

```html
<form autocomplete="off" novalidate>
  ...
</form>
```

<br>

- The CSS [**`visibility`**](https://www.w3schools.com/cssref/pr_class_visibility.php) property.

```css
.error-icon {
  visibility: hidden;
  ...
}

...

.error-message {
  ...
  visibility: hidden;
}
```

<br>

- The [**`test()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test) method of [**`Regular Expressions`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) that returns a boolean value, making it approriate for use in validating the emails in this case.

```javascript
// returns a boolean 'true' or 'false'
let emailVerification = regExp.test(emailAddress);
```


### Continued development

- [Email validation in JavaScript using Regular Expressions](https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/)
- [JavaScript form validation](https://www.w3schools.com/js/js_validation.asp)
- [Regular Expressions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Styling HTML forms in CSS](https://www.w3schools.com/css/css_form.asp)

### Useful resources

- [bobbyhadz.com](https://bobbyhadz.com/blog/javascript-typeerror-regex-match-is-not-a-function#typeerror-regex-test-is-not-a-function-in-javascript) - This helped me solve `TypeError: regex match is not a function` encountered when verifying the email input by the user.

## Author

- LinkedIn - [Grace Sampao](https://www.linkedin.com/in/grace-sampao-49a3129b/)
- Frontend Mentor - [@nadupoy](https://www.frontendmentor.io/profile/nadupoy)
- Github - [@nadupoy](https://github.com/nadupoy)
