---
layout: single
title: "All Blog Posts"
permalink: /year-archive/
author_profile: true
---

Below you'll find every post I've written, rendered like a scrollable feed.

{% for post in site.posts %}
<div class="archive__item" style="margin-bottom: 3em; border-bottom: 1px solid var(--border-color); padding-bottom: 2em;">
  <h2 class="archive__item-title">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>
  <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
  <div class="archive__item-excerpt">
    {{ post.excerpt }}
  </div>
  <p><a href="{{ post.url | relative_url }}" class="btn btn--primary">Read more →</a></p>
</div>
{% endfor %}