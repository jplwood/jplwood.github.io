---
layout: page
title: Writings and Musings About This, That and the Other Thing
permalink: /musings/
---

*I write from time to time about this and that. Sometimes about programming. Sometimes about nothing.*

----------------

{% for post in site.posts limit:5 %}
<div class="mini-post">
<h3>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
</h3>
<p class="post-excerpt"><span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span> {{ post.excerpt | strip_html }}</p>
</div>

{% endfor %}

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
