/**
 * A drop-down menu example which triggers by the mouse over/out events
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
}

// the actual javascript
document.on({
  mouseover: function(event) {
    var target = event.target;
    
    if (target && target.parents()[1] === $('the-menu')) {
      var this_menu = target.next('ul');
      
      $$('#the-menu ul').without(this_menu).each('hide');
      
      if (this_menu.hidden())
        this_menu.show('slide');
    }
  },
  
  mouseout: function(event) {
    var target = event.relatedTarget;
    if (target && !target.parents().include($('the-menu'))) {
      $$('#the-menu ul').filter('visible').each('hide', 'slide');
    }
  }
});
