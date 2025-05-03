---
layout: page
permalink: /team/
title: Team
nav: true
nav_order: 2
---

<style>
.team-member {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.team-member img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}

.team-member-info {
  flex: 1;
}
</style>

{% assign faculty = site.data.team.faculty %}
{% assign postdocs = site.data.team.postdoc_researchers %}
{% assign phd_students = site.data.team.phd_students %}
{% assign undergrad_students = site.data.team.undergrad_students %}
{% assign alumni = site.data.team.alumni %}

<hr>

## Faculty

{% for member in faculty %}
<div class="team-member">
  {% if member.image %}
    <img src="{{ '/assets/img/team/' | append: member.image | relative_url }}" alt="{{ member.full_name }}">
  {% else %}
    <img src="/assets/img/team/default_image.jpg" alt="Default Profile Picture">
  {% endif %}
  
  <div class="team-member-info">
    <p><strong>Full name:</strong> {{ member.full_name }}</p>
    {% if member.contact %}<p><strong>Contact:</strong> {{ member.contact }}</p>{% endif %}
    {% if member.personal_website %}<p><strong>Personal Website:</strong> <a href="{{ member.personal_website }}">{{ member.personal_website }}</a></p>{% endif %}
    {% if member.google_scholar %}<p><strong>Google Scholar:</strong> <a href="{{ member.google_scholar }}">{{ member.google_scholar }}</a></p>{% endif %}
  </div>
</div>
{% endfor %}

<hr>

## Postdoctoral Researchers

{% for member in postdocs %}
<div class="team-member">
  {% if member.image %}
    <img src="{{ '/assets/img/team/' | append: member.image | relative_url }}" alt="{{ member.full_name }}">
  {% else %}
    <img src="/assets/img/team/default_image.jpg" alt="Default Profile Picture">
  {% endif %}
  
  <div class="team-member-info">
    <p><strong>Full name:</strong> {{ member.full_name }}</p>
    {% if member.contact %}<p><strong>Contact:</strong> {{ member.contact }}</p>{% endif %}
    {% if member.personal_website %}<p><strong>Personal Website:</strong> <a href="{{ member.personal_website }}">{{ member.personal_website }}</a></p>{% endif %}
    {% if member.google_scholar %}<p><strong>Google Scholar:</strong> <a href="{{ member.google_scholar }}">{{ member.google_scholar }}</a></p>{% endif %}
  </div>
</div>
{% endfor %}

<hr>

## Ph.D. Students

{% for member in phd_students %}
<div class="team-member">
  {% if member.image %}
    <img src="{{ '/assets/img/team/' | append: member.image | relative_url }}" alt="{{ member.full_name }}">
  {% else %}
    <img src="/assets/img/team/default_image.jpg" alt="Default Profile Picture">
  {% endif %}
  
  <div class="team-member-info">
    <p><strong>Full name:</strong> {{ member.full_name }}</p>
    {% if member.contact %}<p><strong>Contact:</strong> {{ member.contact }}</p>{% endif %}
    {% if member.personal_website %}<p><strong>Personal Website:</strong> <a href="{{ member.personal_website }}">{{ member.personal_website }}</a></p>{% endif %}
    {% if member.google_scholar %}<p><strong>Google Scholar:</strong> <a href="{{ member.google_scholar }}">{{ member.google_scholar }}</a></p>{% endif %}
  </div>
</div>
{% endfor %}

<hr>

## Master and Bachelor Students

{% for member in undergrad_students %}
<div class="team-member">
  {% if member.image %}
    <img src="{{ '/assets/img/team/' | append: member.image | relative_url }}" alt="{{ member.full_name }}">
  {% else %}
    <img src="/assets/img/team/default_image.jpg" alt="Default Profile Picture">
  {% endif %}
  
  <div class="team-member-info">
    <p><strong>Full name:</strong> {{ member.full_name }}</p>
    {% if member.contact %}<p><strong>Contact:</strong> {{ member.contact }}</p>{% endif %}
    {% if member.personal_website %}<p><strong>Personal Website:</strong> <a href="{{ member.personal_website }}">{{ member.personal_website }}</a></p>{% endif %}
    {% if member.google_scholar %}<p><strong>Google Scholar:</strong> <a href="{{ member.google_scholar }}">{{ member.google_scholar }}</a></p>{% endif %}
  </div>
</div>
{% endfor %}
