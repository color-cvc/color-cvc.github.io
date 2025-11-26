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

<div class="alumni-section">
  <h2 style="margin-top: 50px; margin-bottom: 30px;">Alumni</h2>

  {% if site.data.team.phd_alumni %}
  <h3 style="margin-bottom: 20px;">PhD Alumni</h3>
  <ul class="alumni-list">
    {% for person in site.data.team.phd_alumni %}
      <li class="alumni-item">
        {% if person.personal_website %}
          <strong><a href="{{ person.personal_website }}" target="_blank" rel="noopener">{{ person.first_name }} {{ person.last_name }}</a></strong>
        {% else %}
          <strong>{{ person.first_name }} {{ person.last_name }}</strong>
        {% endif %}
        {% if person.year %} ({{ person.year }}){% endif %}
        {% if person.thesis_title %}<br><em>Thesis: {{ person.thesis_title }}</em>{% endif %}
        {% if person.moved_to %}<br>→ {{ person.moved_to }}{% endif %}
      </li>
    {% endfor %}
  </ul>
  {% endif %}

  {% if site.data.team.other_alumni %}
  <h3 style="margin-top: 30px; margin-bottom: 20px;">Other Alumni</h3>
  <ul class="alumni-list">
    {% for person in site.data.team.other_alumni %}
      <li class="alumni-item">
        {% if person.personal_website %}
          <strong><a href="{{ person.personal_website }}" target="_blank" rel="noopener">{{ person.first_name }} {{ person.last_name }}</a></strong>
        {% else %}
          <strong>{{ person.first_name }} {{ person.last_name }}</strong>
        {% endif %}
        {% if person.position %} - {{ person.position }}{% endif %}
        {% if person.year %} ({{ person.year }}){% endif %}
        {% if person.moved_to %}<br>→ {{ person.moved_to }}{% endif %}
      </li>
    {% endfor %}
  </ul>
  {% endif %}
</div>