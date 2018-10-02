# How to Contribute to the HackSoc Website

:computer: Thank you for taking the time to contribute! :computer:

#### I want to add an event to the calendar

First, create a new folder under the [src/_events](src/_events) directory, with the name of the folder being a unique id for your event. In this folder, you will need three files.
- `summary.md`, which will contain a brief description used on the events page.
- `description.md`, which will contain the markdown used to render the event page's details.
- `banner.png`, `banner.jpg` or some other image, which serves as the heading image for the event

Second, add your event to the [eventsManifest.json](src/_events/eventsManifest.json) file. You'll need to include:
- `id`: The unique ID for the event you chose when creating the event folder earlier
- `name`: A human readable name that will be used as the title of the event
- `start` and `end`: Times supplied as YYYY-MM-DD HH-MM-SS
- `location`: A human readable name or address of the event's location
- `mapLink`: (Preferably) a link to Google Maps of the location of the event
- `summary` and `description`: Paths to the summary and description files in the `src/_events/yourEvent` directory
- `banner`: A path to the banner image for the event

Finally, add your event to the [EventsManifest.xml](EventsManifest.xml) file, and add the following lines as tests, replacing `yourEventID` with the unique ID you've chosen for your event:
```xml
<testcase classname="yourEventID" name="SUMMARY_FILE_EXISTS"/>
<testcase classname="yourEventID" name="SUMMARY_FILE_IS_FILE"/>
<testcase classname="yourEventID" name="DESCRIPTION_IS_STRING"/>
<testcase classname="yourEventID" name="DESCRIPTION_FILE_IS_MARKDOWN"/>
<testcase classname="yourEventID" name="DESCRIPTION_FILE_EXISTS"/>
<testcase classname="yourEventID" name="DESCRIPTION_FILE_IS_FILE"/>
<testcase classname="yourEventID" name="BANNER_IS_STRING"/>
<testcase classname="yourEventID" name="BANNER_FILE_IS_VALID_IMAGE"/>
<testcase classname="yourEventID" name="BANNER_FILE_EXISTS"/>
<testcase classname="yourEventID" name="BANNER_FILE_IS_FILE"/>
```

Once you're happy with your event, simply [sumbit a Pull Request](https://github.com/HackSocNotts/hacksocnotts.co.uk/pulls)!