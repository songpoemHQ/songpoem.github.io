---
layout: splash
title: "Today I Learned (TIL)"
permalink: /tils/
---

{% for til in  site.data.tils %}
<div class="mt-2">
    <h3 class="til-topic text-2xl font-bold text-primary-color mt-2">
[{{ til.date | date: "%B %d, %Y" }}] - {{ til.topic }}</h3>
<p class="text-gray-600">{{ til.description }}</p>
{% if til.resource %}
<a href="{{ til.resource }}" class="til-resource text-blue-600 hover:underline mt-2">Read more</a>
{% endif %}
</div>
{% endfor %}
