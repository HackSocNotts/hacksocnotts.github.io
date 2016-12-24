---
layout: page
title: About
permalink: /about/
feature-img: "img/sample_feature_img_2.png"
---

### What is HackSoc
HackSoc is a society for those interested in all aspects of programming, based at the University of Nottingham.

We attend national events on a regular basis, including: Hackin’ In the City, Space Apps & Hacked.io.


### The Exec for 2016/17

{% for exec in site.data.exec %}
* **{{exec.role_name}}**: {{ exec.name }} (`{{ exec.email }}` on email, or [`@{{exec.slack_name}}`](https://hacksocnotts.slack.com/messages/@{{exec.slack_name}}) on Slack)
{% endfor %}

### Sponsors

Special thanks to the following for their support.

* University of Nottingham
* School of Computer Science,

If you are interested in being involved with the society, whether it be a traditional sponsorship deal or co-hosting a hackathon or other event, please get in touch at team@hacksocnotts.co.uk


### Useful Links

* [UoN Society Homepage](http://www.su.nottingham.ac.uk/societies/society/hack)
* [Facebook Group](http://www.facebook.com/groups/hacksocNotts/)
* [Twitter](https://twitter.com/hacksocnotts)
* [What is a hacker](http://en.wikipedia.org/wiki/Hacker)


