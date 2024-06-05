---
title: Case Studies
# layout: casestudies
layout: splash
permalink: /casestudies/
# collection: portfolio
# entries_layout: grid
# classes: wide
---

<p>Our Case studies across Industries</p>

<div class="case_studys-list">
  {% for case_study in site.portfolio %}
  <div class="case_study-item mb-2">
    <h3>{{ case_study.case_study_name }}</h3>
    <p>{{ case_study.title }}    </p>
    <p>{{ case_study.excerpt }}    </p>

                    {% if case_study.technology %}
                <p><strong>Technology:</strong> {{ case_study.technology | join: ", " }}</p>
                {% endif %}
                {% if case_study.tags %}
                <p><strong>Tags:</strong>
                    {% for tag in case_study.tags %}
                    #{{ tag }}{% if forloop.last == false %} {% endif %}
                    {% endfor %}
                </p>
                {% endif %}

    
    <!-- <p>{{ case_study.description }}</p>
    <a href="{{ case_study.url }}" class="btn btn-secondary">View Complete Details</a> -->

  </div>
  {% endfor %}
</div>
