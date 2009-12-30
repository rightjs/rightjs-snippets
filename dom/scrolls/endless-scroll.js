/**
 * A simple window endless scroll feature implementation
 *
 * The princliple is simple, we define the page number counter
 * and an url-template, so the script knew how to go for new content
 *
 * Then we start observing the window 'scroll' event, and when the user
 * scrolls to the bottom it triggers a new Xhr request for another
 * portion of content.
 *
 * And we also have the locker flag to prevent new requests before
 * another one was finished
 *
 * Copyright (C) 2009 Nikolay V. Nemshilov
 */

var page_num     = 1; // <- the starting page
var url_tpl      = '/zings?page=#{page}'; // <- will use the '#{page}' as a placeholder
var list_element = 'the-items-list';
var working_lock = false

window.on('scroll', function() {
  if (!working_lock && window.scrolls().y == ($(document.body).sizes().y - window.sizes().y)) { 
    working_lock = true;
    
    Xhr.load(url_tpl.replace('#{page}', ++page_num), {
      onComplete: function() { 
        $(list_element).insert(this.text);
        
        working_lock = false;
      }
    }); 
    
  }
}

