---
layout: single
title: "All Blog Posts"
permalink: /year-archive/
author_profile: true
---

Below you'll find every post I've written.

{% for post in site.posts %}
---

### [{{ post.title }}]({{ post.url | relative_url }})

<small>{{ post.date | date: "%B %d, %Y" }}</small>

{{ post.content }}

[Read more →]({{ post.url | relative_url }})
{% endfor %}
