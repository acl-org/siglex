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

## Making pull requests on github

You can propose improvements/corrections to the SIGLEX website via pull requests. A pull request is a modification sent to the website editors for review. Once a pull request is accepted, the modification is automatically applied to the website.

  1. When you want to contribute to a GitHub project, the first step is to fork the repository. Therefore, click on the _Fork_ button in the top-right corner. This creates a new copy of the `siglex` repository under your GitHub user account with a URL like: `https://github.com/<YourUserName>/siglex`.
  2. Next, clone the repository on your computer by opening the terminal and running the command: `git clone https://github.com/<YourUserName>/siglex` (or use the ssh URL if you prefer)
  3. You can either create a branch (e.g. `git branch issue12; git checkout issue12`) or work directly on the `master` branch. Probably creating a branch is a good idea to clearly indicate what issue you are addressing. Edit and/or create the markdown files locally using your favorite text editor, then commit and push the changes (`git commit -a; git push`) to the forked repository under your GitHub username. If you are not familiar with the Linux/Mac terminal, you can carry out these operations using GitHub's web interface.
  4. Once you push the changes to your repository, the _Compare & pull request_ button will appear in GitHub. Click it to create the pull request when you're ready.
  5. Add a description of your contribution, then open a pull request by clicking the _Create pull request_ button. This allows the website editors to review your contribution. From here, they can merge it if it is good, or they may ask you to make some changes.
  6. If this is a punctual contribution, you can remove the forked repository once your pull request has been merged into the website.

These instructions were adapted from [this tutorial](https://opensource.com/article/19/7/create-pull-request-github)
