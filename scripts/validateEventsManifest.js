const fs = require('fs');
const fetch = require('node-fetch');
var builder = require('junit-report-builder');
const { builder: buildManifest } = require('./buildEventsManifest');

buildManifest();

const suite = builder.testSuite().name('Events Manifest Validator');

var json;
try {
  json = require(`${process.env.PWD}/${process.argv[2]}`);
} catch (err) {
  console.error(err);
}

const checkSchema = async (event) => {
  /* START ID VALIDATORS */

  // Validate ID
  var testCase = suite.testCase()
      .className(event.id)
      .name('ID_IS_VALID');
  if ((typeof event.id) !== 'string') {
    testCase.failure('id not a string');
  } else if (event.id.includes("/")) {
    testCase.failure("Invlaid id character '/'");
  }

  /* END ID VALIDATORS */

  /* START NAME VALIDATORS */

  // Validate Name
  var testCase = suite.testCase()
      .className(event.id)
      .name('NAME_IS_STRING');
  if ((typeof event.name) !== 'string') testCase('name not a string');

  /* END NAME VALIDATORS */

  /* START DATE VALIDATORS */

  const dateRegex = /^(\d{4})-(\d{2})-(\d{2}) (\d{2})\:(\d{2})\:(\d{2})$/

  // Validate Start Date
  var testCase = suite.testCase()
      .className(event.id)
      .name('START_IS_VALID');
  if (!event.start.match(dateRegex)) testCase.failure('Invalid Start Date. Does not match YYYY-MM-DD HH:MM:SS format.')

  // Validate End Date
  var testCase = suite.testCase()
      .className(event.id)
      .name('END_IS_VALID');
  if (!event.end.match(dateRegex)) testCase.failure('Invalid End Date. Does not match YYYY-MM-DD HH:MM:SS format.')

  // Check that start is less than finish
  var testCase = suite.testCase()
      .className(event.id)
      .name('EVENT_START_LESS_THAN_FINISH');
  try {
    const start = new Date(event.start);
    const end = new Date(event.end);
    if (start > end) {
      testCase.failure('Start is not less than end');
    }
  } catch (err) {
    // Do nothing
  }

  /* END DATE VALIDATORS */

  /* START LOCATION VALIDATORS */
  
  // Check that location is a string
  var testCase = suite.testCase()
      .className(event.id)
      .name('LOCATION_IS_STRING');
  if ((typeof event.location) !== 'string') testCase.failure('location is not a string');

  /* END LOCATION VALIDATORS */

  /* START MAPLINK VALIDATORS */

  // Check that mapLink is string
  var testCase = suite.testCase()
      .className(event.id)
      .name('MAPLINK_IS_STRING');
  if ((typeof event.mapLink) === 'string') {
    // Check that link has a 200 response code
    var testCase2 = suite.testCase()
      .className(event.id)
      .name('MAPLINK_IS_VALID');
    try {
      await fetch(event.mapLink);
    } catch (err) {
      testCase2.failure('mapLink is not a valid link');
    }
  } else {
    testCase.failure('mapLink is not a string');
  }

  /* END MAPLINK VALIDATORS */

  /* START SUMMARY VALIDATORS */

  const mdRegExSummary = /([\w+\-])+\/summary\.md$/gi;
  const mdRegExDescription = /([\w+\-])+\/description\.md$/gi;
  const imgRegExBanner = /([\w+\-])+\/banner\.(jpeg|jpg|png|gif|JPEG|JPG|PNG|GIF)$/gi;
  
  // Check that summary is a string
  var testCase = suite.testCase()
      .className(event.id)
      .name('SUMMARY_IS_STRING');
  if ((typeof event.summary) !== 'string') testCase.failure('summary is not a string');

  // Check that summary file is markdown
  var testCase = suite.testCase()
      .className(event.id)
      .name('SUMMARY_FILE_IS_MARKDOWN');
  if (!mdRegExSummary.test(event.summary)) testCase.failure('summary file is not markdown.');

  // Check that summary file exists
  var testCase = suite.testCase()
      .className(event.id)
      .name('SUMMARY_FILE_EXISTS');
  if (!fs.existsSync(`${__dirname}/../src/_events/${event.summary}`)) {
    testCase.failure('summary file doesn\'t exist');
  } else {
    // Check that summary file is a file
    var testCase = suite.testCase()
      .className(event.id)
      .name('SUMMARY_FILE_IS_FILE');
    if (!fs.statSync(`${__dirname}/../src/_events/${event.summary}`).isFile()) testCase.failure('Summary file is not a file.');
  }

  /* END SUMMARY VALIDATORS */

  /* START DESCRIPTION VALIDATORS */

  // Check that description is a string
  var testCase = suite.testCase()
      .className(event.id)
      .name('DESCRIPTION_IS_STRING');
  if ((typeof event.description) !== 'string') testCase.failure('description is not a string');

  // Check that description file is markdown
  var testCase = suite.testCase()
      .className(event.id)
      .name('DESCRIPTION_FILE_IS_MARKDOWN');
  if (!mdRegExDescription.test(event.description)) testCase.failure('description file is not markdown.');

  // Check that description file exists
  var testCase = suite.testCase()
      .className(event.id)
      .name('DESCRIPTION_FILE_EXISTS');
  if (!fs.existsSync(`${__dirname}/../src/_events/${event.description}`)) {
    testCase.failure('description file doesn\'t exist');
  } else {
    // Check that description file is a file
    var testCase = suite.testCase()
      .className(event.id)
      .name('DESCRIPTION_FILE_IS_FILE');
    if (!fs.statSync(`${__dirname}/../src/_events/${event.description}`).isFile()) testCase.failure('description file is not a file');
  }

  /* END DESCRIPION VALIDATORS */

  /* START BANNER VALIDATORS */

  // Check that banner is a string
  var testCase = suite.testCase()
      .className(event.id)
      .name('BANNER_IS_STRING');
  if ((typeof event.banner) !== 'string') testCase.failure('banner is not a string');

  // Check that banner file is an image file
  var testCase = suite.testCase()
      .className(event.id)
      .name('BANNER_FILE_IS_VALID_IMAGE');
  if (!imgRegExBanner.test(event.banner)) testCase.failure('banner file is not a valid image (png, jpg, gif).');

  // Check that banner file exists
  var testCase = suite.testCase()
      .className(event.id)
      .name('BANNER_FILE_EXISTS');
  if (!fs.existsSync(`${__dirname}/../src/_events/${event.banner}`)) {
    testCase.failure('banner file doesn\'t exist');
  } else {
    // Check that banner file is a file
    var testCase = suite.testCase()
      .className(event.id)
      .name('BANNER_FILE_IS_FILE');
    if (!fs.statSync(`${__dirname}/../src/_events/${event.banner}`).isFile()) testCase.failure('Banner file is not a file');
  }

  /* END BANNER VALIDATORS */
};

const checkPromises = [];

for (const event of json.events) {
  checkPromises.push(checkSchema(event));
}

Promise.all(checkPromises)
  .then(() => {
    builder.writeTo(process.argv[3])
    if (suite._testCases.filter(test => test._failure).length) process.exit(1);
  })
  .catch((err) => console.log(err));
