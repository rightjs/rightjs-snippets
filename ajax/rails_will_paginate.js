/**
 * Some ajax pagination for rails + will_paginate
 *
 * The idea is that you render the page as ususal and then
 * hijack the pagination link clicks. This way it will be working
 * both with and without ajax.
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// you'll need a partial template like that
<div id="that-paginator">
  <div id="my-stuff">
    <%= render @my_stuff %>
  </div>
  
  <div class="ajax-paginate" data-update="that-paginator">
    <%= will_paginate @my_stuff %>
  </div>
</div>

// in yoru index.html.erb include your template
<%= render :partial => 'that_paginator' %>


// in yoru javascript hook it like that
"div.ajax-paginate a".on('click', function(event) {
  event.stop();
  
  var link = event.target;
  
  new Xhr(link.href, {method: 'get'}).update(
    link.parent('div.ajax-paginate').get('data-update')
  );
});

// then in your controller you can handle it kinda like that
def index
  @my_stuff = MyStuff.paginate(...)
  
  respond_to do |format|
    format.html {
      if request.xhr?
        render :partial => 'that_paginator', :layout => false
      end
    }
  end
end