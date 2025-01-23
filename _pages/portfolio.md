---
title: Case Studies
# layout: casestudies
layout: splash
permalink: /casestudies/
# collection: portfolio
# entries_layout: grid
# classes: wide
---

<div class="container">
  <h1 class="my-4">{{ page.title }}</h1> 

  <div class="case_studys-list">
    {% for case_study in site.portfolio %}
    <article class="case_study-item mb-2" itemscope itemtype="http://schema.org/Article"> 
      <h2 class="case-study-title" itemprop="headline">{{ case_study.case_study_name }}</h2> 
      <p class="case-study-client" itemprop="author">{{ case_study.client_name }}</p> 
      <p class="case-study-excerpt" itemprop="description">{{ case_study.challenge }}</p>
      {% if case_study.solution %}
          {% for sol in case_study.solution %}
          <span >{{ sol }}</span>
           {% endfor %}
      {% endif %}
      {% if case_study.results %}
          {% for point in case_study.results %}
          <span >{{ point }}</span>
      {% endfor %}
      {% endif %}
      {% if case_study.technology %}
      <p class="page__taxonomy">
        <strong><i class="fas fa-fw fa-microchip" aria-hidden="true"></i> Technology: </strong>
        <span itemprop="keywords">
          {% for tech in case_study.technology %}
          <span class="page__taxonomy-item p-category" rel="tag">{{ tech }}</span>
          {% unless forloop.last %}<span class="sep">, </span>{% endunless %}
          {% endfor %}
        </span>
      </p>
      {% endif %}

      {% if case_study.tags %}
      <p class="page__taxonomy">
        <strong><i class="fas fa-fw fa-tags" aria-hidden="true"></i> Tags: </strong>
        <span itemprop="keywords">
          {% for tag in case_study.tags %}
          <a href="/tags/#{{ tag | downcase }}" class="page__taxonomy-item p-category" rel="tag">{{ tag }}</a>
          {% unless forloop.last %}<span class="sep">, </span>{% endunless %}
          {% endfor %}
        </span>
      </p>
      {% endif %}

      <p class="case-study-description" itemprop="articleBody">{{ case_study.description }}</p> 
      <a href="{{ case_study.url }}" class="btn btn-secondary">View Complete Details</a>
    </article>
    {% endfor %}
  </div>
</div>