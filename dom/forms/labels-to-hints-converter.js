/**
 * This little script grabs labels and converts them into hint texts
 * on the input elements that assigned to the labels
 *
 * Copyright (C) 2009 Steven Garcia
 */
var formHelper = new Class({ 
  addHints:  function() {
    $$('.add_hints label').each( function(label) {
      var input = $(label.get('for'));
      var text = label.hide().innerHTML;

      $ext(input, {
        showHint: function() {
          if (this.value.blank())
            this.addClass('hint').setValue(text);
        },
        hideHint: function() {
          if (this.value == text)
            this.removeClass('hint').setValue('');
        }
      }).on({
        focus: 'hideHint',
        blur:  'showHint'
      }).showHint();
    });
  }
});
