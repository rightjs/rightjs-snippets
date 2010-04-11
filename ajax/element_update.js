/**
 * A simple snippet how you can update elements via AJAX in RightJS
 *
 * First we insert on top of the element the locker div, which can
 * be painted as you need in CSS, maybe have some spinner image in
 * its background or something.
 *
 * Secondly we call the Element#load method, by default it performs
 * a GET request, so you might not need any options for that
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

$('my-element')
  .insert('<div class="locker"></div>')
  .load('/that/url/address');
  