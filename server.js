var contentful = require('contentful');

var client = contentful.createClient({
  space: '', //space Id
  accessToken: '', // Content Delivery API - access token
});

// Get all entries //
client.getEntries().then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    console.log(entry.fields)
  });
});

// Get post and author details //
// client
//   .getEntries({
//     content_type: 'post',
//   })
//   .then(function (entries) {
//     entries.items.forEach(function (entry) {
//       console.log(entry.fields.postName);
//       console.log(entry.fields.date);
//       console.log(entry.fields.author);
//     });
//   });