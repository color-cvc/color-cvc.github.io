---
layout: page
title: Datasets
permalink: /datasets/
description: A growing collection of our datasets.
nav: true
nav_order: 4
---

<!-- pages/datasets.md -->
<div class="datasets">
  <ol class="dataset-list">
  {% assign sorted_datasets = site.project_pages | where: "dataset", true | sort: "date" | reverse %}
  {% for dataset in sorted_datasets %}
    <li class="dataset-item">
      <div class="row align-items-center">
        {% if dataset.img %}
          <div class="col-sm-3 mb-2 mb-sm-0">
            <a href="{% if dataset.redirect %}{{ dataset.redirect }}{% else %}{{ dataset.url | relative_url }}{% endif %}">
              <img src="{{ dataset.img | relative_url }}" class="dataset-img rounded" alt="{{ dataset.title }}">
            </a>
          </div>
        {% endif %}
        <div class="{% if dataset.img %}col-sm-9{% else %}col-sm-12{% endif %}">
          <div class="title">
            <a href="{% if dataset.redirect %}{{ dataset.redirect }}{% else %}{{ dataset.url | relative_url }}{% endif %}">
              {{ dataset.title }}
            </a>
          </div>
          <div class="description">{{ dataset.description }}</div>
          <div class="links">
            {% if dataset.github %}
              <a href="{{ dataset.github }}" class="btn btn-sm z-depth-0" role="button">
                <i class="fa-brands fa-github"></i> Code
              </a>
            {% endif %}
            <a href="{% if dataset.redirect %}{{ dataset.redirect }}{% else %}{{ dataset.url | relative_url }}{% endif %}" class="btn btn-sm z-depth-0" role="button">Details</a>
          </div>
        </div>
      </div>
    </li>
  {% endfor %}
  </ol>
</div>
