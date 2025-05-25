---
layout: default
title: "All Blog Posts"
permalink: /year-archive/
author_profile: true
---

# All Blog Posts

{% for post in site.posts %}
<article style="margin-bottom: 4em; padding-bottom: 2em; border-bottom: 1px solid #444;">
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
  {{ post.content }}
</article>
{% endfor %}
