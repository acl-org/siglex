---
layout: default
title: Blog
table_id: events
---

## SIGLEX events

SIGLEX maintains a list of events (conferences and workshops) as having special interest to SIGLEX members.
You can search this list below.
You can also suggest an event to be added to this list by creating a pull request at [the SIGLEX website repository](https://github.com/bethard/siglex/).

Proceedings of many of these workshops and conferences can be found at the [ACL SIGLEX anthology](https://www.aclweb.org/anthology/sigs/siglex/).

<table id="events" class="table table-striped table-bordered" style="width:100%">
  <thead>
    <tr>
      <th>Event</th>
      <th>Date</th>
      <th>Location</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {% for post in site.categories.event %}
    <tr>
      <td><a href="{{ post.event_homepage }}">{{ post.event_name }}</a></td>
      <td>{{ post.date | date_to_string }}</td>
      <td>{{ post.event_location }}</td>
      <td><a href="{{ site.baseurl }}/{{ post.url }}">Details</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>