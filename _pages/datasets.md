---
layout: page
title: Datasets
permalink: /datasets/
description: A growing collection of our datasets.
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/datasets.md -->
<div class="datasets">
  {% assign sorted_datasets = site.datasets | sort: "importance" %}

  <!-- Generate cards for each dataset -->
  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for dataset in sorted_datasets %}
        {% include datasets_horizontal.liquid %}
      {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
    {% for dataset in sorted_datasets %}
      {% include datasets.liquid %}
    {% endfor %}
    </div>
  {% endif %}
</div>
