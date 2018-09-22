const fs = require('fs');
const fetch = require('node-fetch');
var json;
try {
  json = require(`${process.env.PWD}/${process.argv[2]}`);
} catch (err) {
  console.error(err);
}

const checkSchema = async (event) => {
  /* START ID VALIDATORS */

  // Validate ID
  if ((typeof event.id) !== 'string') {
    console.error(event.id, 'id not a string');
  } else if (event.id.includes("/")) {
    console.error(event.id, "Invlaid id character", "/");
  }

  /* END ID VALIDATORS */

  /* START NAME VALIDATORS */

  // Validate Name
  if ((typeof event.name) !== 'string') console.error(event.id, 'name not a string');

  /* END NAME VALIDATORS */

  /* START DATE VALIDATORS */

  const dateRegex = /^(\d{4})-(\d{2})-(\d{2}) (\d{2})\:(\d{2})\:(\d{2})$/

  // Validate Start Date
  if (!event.start.match(dateRegex)) console.error(event.id, 'Invalid Start Date. Does not match YYYY-MM-DD HH:MM:SS format.')

  // Validate End Date
  if (!event.end.match(dateRegex)) console.error(event.id, 'Invalid End Date. Does not match YYYY-MM-DD HH:MM:SS format.')

  // Check that start is less than finish
  try {
    const start = new Date(event.start);
    const end = new Date(event.end);
    if (start > end) {
      console.error(event.id, 'Start is not less than end');
    }
  } catch (err) {
    // Do nothing
  }

  /* END DATE VALIDATORS */

  /* START LOCATION VALIDATORS */
  
  // Check that location is a string
  if ((typeof event.location) !== 'string') console.error(event.id, 'location is not a string');

  /* END LOCATION VALIDATORS */

  /* START MAPLINK VALIDATORS */

  // Check that mapLink is string
  if ((typeof event.mapLink) === 'string') {
    // Check that link has a 200 response code
    try {
      await fetch(event.mapLink);
    } catch (err) {
      console.error(event.id, 'mapLink is not a valid link');
    }
  } else {
    console.error(event.id, 'mapLink is not a string');
  }

  /* END MAPLINK VALIDATORS */

  /* START SUMMARY VALIDATORS */

  const mdRegExSummary = /([\w+\-])+\/summary\.md$/gi;
  const mdRegExDescription = /([\w+\-])+\/description\.md$/gi;
  const imgRegExBanner = /([\w+\-])+\/banner\.(jpeg|jpg|png|gif|JPEG|JPG|PNG|GIF)$/gi;
  
  // Check that summary is a string
  if ((typeof event.summary) !== 'string') console.error(event.id, 'summary is not a string');

  // Check that summary file is markdown
  if (!mdRegExSummary.test(event.summary)) console.error(event.id, 'summary file is not markdown.');

  // Check that summary file exists
  if (!fs.existsSync(`${__dirname}/../src/_events/${event.summary}`)) {
    console.error(event.id, 'summary file doesn\'t exist');
  } else {
    // Check that summary file is a file
    if (!fs.statSync(`${__dirname}/../src/_events/${event.summary}`).isFile()) console.error(event.id, 'summary file is not a file');
  }

  /* END SUMMARY VALIDATORS */

  /* START DESCRIPTION VALIDATORS */

  // Check that description is a string
  if ((typeof event.description) !== 'string') console.error(event.id, 'description is not a string');

  // Check that description file is markdown
  if (!mdRegExDescription.test(event.description)) console.error(event.id, 'description file is not markdown.');

  // Check that description file exists
  if (!fs.existsSync(`${__dirname}/../src/_events/${event.description}`)) {
    console.error(event.id, 'description file doesn\'t exist');
  } else {
    // Check that description file is a file
    if (!fs.statSync(`${__dirname}/../src/_events/${event.description}`).isFile()) console.error(event.id, 'description file is not a file');
  }

  /* END DESCRIPION VALIDATORS */

  /* START BANNER VALIDATORS */

  // Check that banner is a string
  if ((typeof event.banner) !== 'string') console.error(event.id, 'banner is not a string');

  // Check that banner file is an image file
  if (!imgRegExBanner.test(event.banner)) console.error(event.id, 'banner file is not a valid image (png, jpg, gif).');

  // Check that banner file exists
  if (!fs.existsSync(`${__dirname}/../src/_events/${event.banner}`)) {
    console.error(event.id, 'banner file doesn\'t exist');
  } else {
    // Check that banner file is a file
    if (!fs.statSync(`${__dirname}/../src/_events/${event.banner}`).isFile()) console.error(event.id, 'banner file is not a file');
  }

  /* END BANNER VALIDATORS */



};

for (const event of json.events) {
  checkSchema(event)
    .catch((err) => console.log(err));
}
console.log('Done');
