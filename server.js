var contentful = require('contentful');
// CFPAT-hDZX5YM6yal2YA4XxRRHjuzvBUKPDqmhkmIFV6tIbk0

var client = contentful.createClient({
  space: 'qx13n88yv7ze',
  accessToken: '6yK3otj7JE9d7WVANLV6llPx9YyyW4R-8lsJ3iMod88',
});


client.getEntry('3r8asOueo8aIGPRVk2lYE').then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys);

  // logs the field with ID title
  console.log(entry.fields.productName);
});


client.getEntries().then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if (entry.fields.productName) {
      console.log(entry.fields.productName);
    }
  });
});

// client
//   .getEntries({
//     content_type: 'products',
//   })
//   .then(function (entries) {
//     console.log(JSON.stringify(entries));
//     entries.items.forEach(function (entry) {
//       console.log(JSON.stringify(entry.fields.companyName));
//     });
//   });

client
  .getEntries({
    'fields.sku': '<sku_value>',
    content_type: '<product_content_type_id>',
  })
  .then(function (entries) {
    entries.items.forEach(function (entry) {
      console.log(JSON.stringify(entry.fields.sku));
    });
  });