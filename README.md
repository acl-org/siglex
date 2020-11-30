This repository holds the source for the [website of the ACL Special Interest Group on the Lexicon (SIGLEX)](https://siglex.org/).

## Adding a new event
If you would like to add a new event to the [SIGLEX events page](https://siglex.org/events.html), please create a pull request, adding a new file in the [_posts/events directory](https://github.com/acl-org/siglex/tree/master/_posts/events).
The new file should be named `YYYY-MM-DD-LABEL`, where `YYYY-MM-DD` is the date of the event, and `LABEL` is a brief label for the event, typically a lowercase version of the acronym associated with the workshop or conference.
The contents of the file should have the following format:
```
---
layout: post
categories: [event]
event_name: "NAME"
event_url: "URL"
event_location: "CITY, COUNTRY"
event_submission_date: "YYYY-MM-DD"
host_name: "HOST_NAME"
host_url: "HOST_URL"
siglex_endorsed: yes
---
BODY
```
where:
* `NAME` is the full name of the event
* `URL` is the URL for the event's website
* `CITY, COUNTRY` is the city and country where the event will be hosted, or `Virtual` for virtual conferences
* `YYYY-MM-DD` is the submission deadline (this line can be omitted if there are no submissions associated with the event)
* `HOST_NAME` is a short name or acronym for the hosting conference (this line can be omitted if the event is self-hosted)
* `HOST_URL` is the URL for the hosting conference (this line can be omitted if the event is self-hosted)
* the `siglex_endorsed` line should be omitted if the event is not officially endorsed by SIGLEX
* `BODY` is the main announcement for the event in Markdown format

There are many examples of such files in the [_posts/events directory](https://github.com/acl-org/siglex/tree/master/_posts/events).
