---
layout: post
title:  "HTML5 data-* attributes with JQuery"
excerpt: I have a button that opens a Bootstrap modal, but there's a use case where I want to stop that button from opening the modal and instead display a tooltip.
date:   2016-01-26
category: code
tags: [jquery, javascript, html5, data- attributes]
---

## The Challenge:
I have a button that opens a Bootstrap modal, but there's a use case where I want to stop that button from opening the modal and instead display a tooltip.

{% highlight html %}
<!-- What I have to start -->
<button type="button" data-toggle="modal" data-target="#free-trial-modal">
  Launch demo modal
</button>
{% endhighlight %}

In JQuery's [documentation for working with HTML5 data and _data-*_ attributes][1] it's easy to get confused. You'd think you could just do `$('#free-trial-btn').data('toggle', 'tooltip')` to change the `data-toggle` from `'modal'` to `'tooltip'`. But apparently (thanks [Stack Overflow][2] for the clarification), this doesn't modify the `data-toggle` at all. Instead it stores the string `'tooltip'` in the `'toggle'` field as if it were a variable -- if I then did `$('#free-trial-btn').data('toggle')` it would return `'tooltip'`.

So how can you set or change the value of a _data-*_ attribute using JQuery?

## The Solution
Use the `.attr` method! Duh. Right? Yea, still a little confusing.

{% highlight javascript %}
$('#free-trial-btn').attr('data-toggle', 'tooltip');
{% endhighlight %}

So, in summary, if you want to set a _data-*_ attribute, use the [`.attr()`](http://api.jquery.com/attr/) function. If you want to access the value of an existing _data-*_ attribute, use the [`.data()`](https://api.jquery.com/data/) function `$('#free-trial-btn').data()`

### And then a sidenote about tooltips and disabled buttons
The next tricky thing I faced was getting a [tooltip][3] to work on a disabled button. Turns out the only simple way to do this without messing with the disabled button is to put the tooltip on a parent element. So here's my final solution, with a little bit of JQuery chaining to get all the work done:

{% highlight html %}
<div class="btn-wrapper" data-toggle="tooltip" title="Sorry, no free trial right now!">
  <button type="button">Free Trial</button>
</div>

<script>
  $( document ).ready(function(){
    var $freeBtn = $('#free-trial-btn');
    if(user_shouldnt_get_free_trial){
      $freeBtn.attr('data-toggle', 'tooltip').removeAttr('data-target');
    }
    // Other Code here...
  });
</script>
{% endhighlight %}

[1]: http://api.jquery.com/data/
[2]: http://stackoverflow.com/questions/22725281/how-do-you-update-an-existing-bootstrap-modal-data-target
[3]: http://getbootstrap.com/javascript/#tooltips
