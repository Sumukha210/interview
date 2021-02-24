---
title: HTML Questions
layout: layouts/page.njk
permalink: /questions/html-questions/index.html
---

- What does a `doctype` do?

  <!-- > **it lets the browser know about the version of HTML you are using, but it is not necessary since your browser will render it anyways** -->

- How do you serve a page with content in multiple languages?
  > **Always use a language attribute on the html element. This is inherited by all other elements, and so will set a default language for the text in the document head element. `<html lang="en">`**
- What kind of things must you be wary of when designing or developing for multilingual sites?

- What are `data-` attributes good for?
  > **The `data-*` attribute is used to store custom data private to the page or application.The data-\* attribute gives us the ability to embed custom data attributes on all HTML elements.**
- Consider HTML5 as an open web platform. What are the building blocks of HTML5?

  > - more semantic text markup
  > - new form elements
  > - video and audio
  > - new javascript API
  > - canvas and SVG
  > - new communication API
  > - Geo-location API
  > - web worker API
  > - new data storage

- Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.

  > **localstorage**

  > localStorage is a way to store the on the client’s computer. It allows the saving of key/value pairs in a web browser and it stores data with no expiration date. localStorage can only be accessed via JavaScript, and HTML5. However, the user has the ability to clear the browser data/cache to erase all localStorage data.
  > ``**Pros:**
  >
  > - stores data with no expiration date
  > - storage limit is about 5MB
  > - data is never transferred to the server
  >   **Cons:**
  > - plaintext, hence not secure by design
  > - limited to string data, hence need to be serialized
  > - can only be read on client-side

  > **Cookie**

  > - Stores data that has to be sent back to the server with subsequent XHR requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side .
  > - Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
  > - Size must be less than 4KB.
  > - Cookies can be made secure by setting the httpOnly flag as true for that cookie. This prevents client-side access to that cookie.

- Describe the difference between `<script>`, `<script async>` and `<script defer>`.
  > `<script>`used to define a client-side script
  > `<script async≥` If async is present: The script is >executed asynchronously with the rest of the page >(the script will be executed while the page >continues the parsing) If async is not present and >defer is present: The script is executed when the page has finished parsing.
  > `<script defer≥` The defer attribute tells the >browser to only execute the script file once the >HTML document has been fully parsed
- Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
- What is progressive rendering?
- Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
- Have you used different HTML templating languages before?
- What is the difference between `canvas` and `svg`?
- What are empty elements in HTML ?
