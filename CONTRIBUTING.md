# How to Contribute to the HackSoc Website

:computer: Thank you for taking the time to contribute! :computer:

#### I want to add an event to the calendar

First, create a new file in [content/events](content/events) directory, with the name of the file/folder being a unique id for your event.
```markdown
---
title: "EGM"
date: "2021-07-13"
time: "7-9pm"
start: "2021-07-13T19:00:00+01:00"
end: "2021-07-13T21:00:00+01:00"
---

The Description for the event
```
`date` and `time` go into the calendar, whereas `start` and `end` are used to create the ICS files

Once you're happy with your event, simply [submit a Pull Request](https://github.com/HackSocNotts/hacksocnotts.co.uk/pulls)!
