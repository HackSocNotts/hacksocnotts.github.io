const fs = require('fs');
const ics = require('ics');

json = require(__dirname + '/../src/_events/eventsManifest.json');

const toICSDate = (timestamp, allDay = false) => {
  const date = new Date(timestamp);

  return allDay ?
    [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    :
    [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()];
};

const getGeo = (mapLink) => {
  const regex = /@(\-?\d*\.\d*),(\-?\d*\.\d*)/;

  if (!regex.test(mapLink)) {
    return null;
  }
  const [match, lat, lng] = regex.exec(mapLink);

  return {
    lat,
    lon: lng
  }
};

const saveICS = (path) => {
  const events = json.map(event => ({
    start: toICSDate(event.start, event.allDay),
    end: toICSDate(event.end, event.allDay),
    title: event.name,
    // description: require(__dirname + '/../src/_events/' + event.description),
    location: event.location,
    url: "https://hacksocnotts.co.uk/event/" + event.id,
    geo: getGeo(event.mapLink),
    status: 'CONFIRMED',
    organizer: {
      name: "HackSoc Nottingham",
      email: "info@hacksocnotts.co.uk"
    },
    alarms: [{
        action: 'display',
        trigger: {
          hours: 2,
          minutes: 0,
          before: true
        }
      },
      {
        action: 'display',
        trigger: {
          hours: 1,
          minutes: 0,
          before: true
        }
      },
      {
        action: 'display',
        trigger: {
          hours: 0,
          minutes: 15,
          before: true
        }
      }
    ],
    uid: event.id + "@" + (new Date(event.start)).getFullYear() + ".hacksocnotts.co.uk"
  }));

  const {
    error,
    value
  } = ics.createEvents(events);

  fs.writeFileSync(path + '/calendar.ics', value);
};

module.exports = saveICS;
