---
layout: page
title: "Team"
permalink: /team/
nav: true
nav_order: 2
---

<div class="team-container">
  <div class="people-grid">
    {% for person in site.data.team.current %}
      {% if person.personal_website %}
        <a href="{{ person.personal_website }}" target="_blank" rel="noopener" class="person-card has-link">
      {% else %}
        <div class="person-card">
      {% endif %}

        {% if person.image %}
          <img src="{{ '/assets/img/team/' | append: person.image | relative_url }}" alt="{{ person.first_name }} {{ person.last_name }}">
        {% else %}
          <img src="{{ '/assets/img/team/default_image.jpg' | relative_url }}" alt="{{ person.first_name }} {{ person.last_name }}">
        {% endif %}

        <h6 class="person-name">
          <span class="first-name">{{ person.first_name }}</span>
          <span class="last-name">{{ person.last_name }}</span>
        </h6>

        <h6 class="position">{{ person.position }}</h6>

        {% if person.email %}
          <p class="email">{{ person.email }}</p>
        {% endif %}

      {% if person.personal_website %}
        </a>
      {% else %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>