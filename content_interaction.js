// Let's type this into the console, follow along with the video lecture

var x = document.querySelector("p")

// Show Text
x.textContent

// Reassign Text
x.textContent = "new"

// Refresh the page
// Show actual HTML
x.innerHTML

// Edit HTML
x.innerHTML = "This is <strong>BOLD</strong>"

// Can't do that with just textContent

/////////////////
// Attributes //
///////////////

var special = document.querySelector("#special")
var specialA = special.querySelector("a")
//note that we can use selector tag after selector tag until we reach our target
//as here first we targeted special id stored it in specialA then we targeted anchor tag inside specialA
specialA.getAttribute("href")
//this will change facebook url into amazon's
specialA.setAttribute("href","https://www.amazon.com")
