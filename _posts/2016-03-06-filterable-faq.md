---
layout: post
title:  "Filterable FAQ"
date:   2016-03-06
category: code
tags: [jquery, javascript, bootstrap]
---

Traditional FAQs suck. A long list of questions is simply not digestible and don't really help your users. If you don't have resources to develop a massive search engine that queries a database of resources and questions, then this simple filtering technique might be for you!
<!--more-->
Using Bootstrap's [Collapsible Panels](http://getbootstrap.com/javascript/#collapse-example-accordion) and a little JQuery, I put together this simple, searchable FAQ:

<p data-height="700" data-theme-id="0" data-slug-hash="jqqxpM" data-default-tab="result" data-user="jplwood" class="codepen">See the Pen <a href="http://codepen.io/jplwood/pen/jqqxpM/">Filterable FAQ w/ JQuery and Bootstrap</a> by Justin Leatherwood (<a href="http://codepen.io/jplwood">@jplwood</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

At the core of all this is JQuery's `filter()` function that accepts an anonymous function where we only return `.panel` elements that contain a match to our `filter` string.

##Step by step

1. Watch the `#filter` text box for `keyup` events
2. Put that filter string into a `RegExp` using the `i` parameter flag to ignore case (so we can easily compare great swaths of text with our filter).
3. Select all panels in the searchable area using `$('.searchable .panel')`
4. Run the `filter()` function on all of the panels to only select questions that contain the filter string we specified.  
5. Give the filter function an anonymous function that uses [`RegExp.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) to check for matches on only the text within each panel and return only panel elements that have a match.
6. Show only those panels!


##Gotta have that feel-good UX

In order to give the users some feedback as they're searching, I do two things:

1. First, I use Bootstrap's form-group and associated classes `.has-success` and `.has-error` to change the color of the form based on the current result of the filter.

2. I have a small message that I keep updating to inform the user of the result.

Hope someone at some point somewhere found this useful!


*Thank you Dr. Who for inspiring my sample questions. And thank you [Hipsum](http://hipsum.co/) for providing me filler text that never ceases to make me laugh.*
