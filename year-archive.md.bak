---
layout: default
title: "All Blog Posts"
permalink: /year-archive/
author_profile: true
---

<div class="page__content">

  <h1>All Blog Posts</h1>
  <p>Below you'll find every post I've written, rendered like a scrollable feed.</p>

  {% for post in site.posts %}
  <article class="archive__item" style="margin-bottom: 2em;">
    <h2 class="archive__item-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
    <p class="archive__item-excerpt">{{ post.excerpt }}</p>
    <p><a href="{{ post.url | relative_url }}" class="btn btn--primary">Read more →</a></p>
  </article>
  {% endfor %}

</div>
