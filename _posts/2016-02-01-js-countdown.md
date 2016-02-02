---
layout: post
title:  "Simple JS Countdown"
date:   2016-02-01
category: code
tags: [jquery, javascript]
---

On our payments page at work I wanted to implement a visual countdown prior to redirecting users into their workspaces. After doing a bit of research I came up with the following solution:

<p data-height="268" data-theme-id="0" data-slug-hash="NxBpeq" data-default-tab="result" data-user="jplwood" class='codepen'>See the Pen <a href='http://codepen.io/jplwood/pen/NxBpeq/'>Simple JS Countdown</a> by Justin Leatherwood (<a href='http://codepen.io/jplwood'>@jplwood</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Essentially I have a counter function:

{% highlight html %}
function counter($el, n, func) {
  (function count() {
    $el.html(n);
    if (n--) {
      setTimeout(count, 1000);
    } else {
      func();
    }
  })();
}
{% endhighlight %}

And I call that on a click, telling it which element (`$el`) to put the counter in, how many seconds I want it to run for (`n`) and then I give it function to execute at the end of the countdown.

The function contains an immediately invoked function that utilizes [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) to have the code pause for 1 second (1000 ms), and recursively call `count()` until `n` gets to 0.
