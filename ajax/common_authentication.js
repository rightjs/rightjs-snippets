/**
 * This simple snippet demonstrates how you can define common
 * authentication keys for your XHR requests, by using the
 * common parameters option of the Xhr class
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

Xhr.Options.params = {
  auth_token: 'some authentication token of mine'
};

// After that whenever you make any sort of XHR requests
// your authentication parameter will be added to the list

Xhr.load('/my.url');

// in the reality will go to following url
// /my.url?auth_token=some+authentication+token+of+mine

new Xhr('/my.url').send('some=params');

// this will make request to the '/my.url' with both
// of the parameters local and global, like that
// some=param&auth_token==some+authentication+token+of+mine

// this also works with ajax forms

var form = new Form({
  action: '/my.url',
  html: '<input name="param" value="value" />'
})

form.send();

// this will send 
// param=value&auth_token==some+authentication+token+of+mine


// and you can override the settings in local parameters like that

Xhr.load('/my.url', {
  params: {auth_token: 'another_token'}
});
