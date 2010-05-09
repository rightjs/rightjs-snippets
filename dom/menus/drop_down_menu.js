/**
 * A simple drop down menu example
 *
 * The princliple is plain, we define a stanard drop down menu
 * HTML structure, paint it a bit with CSS and then hook up
 * with unobtrusive events delegation technique
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

// the HML structure
<ul id="the-menu">
  <li>
    <a href="#">Cookies</a>
    <ul>
      <li><a href="#">Small</a></li>
      <li><a href="#">Medium</a></li>
      <li><a href="#">Big</a></li>
    </ul>
  </li>
  <li>
    <a href="#">Cookies</a>
    <ul>
      <li><a href="#">Small</a></li>
      <li><a href="#">Medium</a></li>
      <li><a href="#">Big</a></li>
    </ul>
  </li>
</ul>

// the stylesheet
#the-menu, #the-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
}
#the-menu li {
  float: left;
  position: relative;
}
#the-menu li ul {
  position: absolute;
  background: #EEE;
  display: none;
}
#the-menu li ul li {
  float: none;
}
#the-menu li a {
  padding: .2em .5em;
  outline: none;
}

// the actual javascript
"#the-menu > li > a".on({
  click: function(event) {
    event.stop();
    
    var this_list = this.next('ul');
    var all_lists = $('the-menu').select('ul');
    
    all_lists.without(this_list).each('hide');
    this_list.toggle('slide');
  }
});

// optionally make all lists hide when the user clicks outside of the menu
document.onClick(function(event) {
  if (!event.target.parents().include($('the-menu')))
    $$('#the-menu ul').each('hide');
});
