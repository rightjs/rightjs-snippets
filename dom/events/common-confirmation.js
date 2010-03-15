/**
 * Okay, say you have on your page a list of things and every thing
 * has administrative links, like 'edit', 'delete', and you want
 * that the page asked for confirmation when the user hits a 'delete'
 * link
 *
 * You can handle them at once using events deletion technique.
 * Simply add some css-class on those links, say 'confirm-delete'
 * in your case, and add the following simple script
 *
 * NOTE: Requires RightJS 1.5.6 or older.
 *
 * Copyright (C) 2010 Nikolay V. Nemshilov
 */

"a.confirm-delete".on('click', function(event) {
  if (confirm("Are you sure wanna nuke that thing for good?")) {
    // if the user agrees, process the link in here
    document.location.href = event.target.href;
  } else {
    // otherwize simply stop the event
    event.stop();
  }
});