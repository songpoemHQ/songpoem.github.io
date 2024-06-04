---
layout: page
title: "Events we attended, organised"
permalink: /events/
---

<div class="events-list">
  {% for event in site.data.events.events %}
  <div class="event-item">
    <h3>{{ event.title }}</h3>
    <p>{{ event.start_date }}{% if event.end_date != event.start_date %} to {{ event.end_date }}{% endif %}</p>
    <p>{{ event.description }}</p>
    <a href="{{ event.url }}" class="btn btn-secondary">View Complete Details</a>
  </div>
  {% endfor %}
</div>
