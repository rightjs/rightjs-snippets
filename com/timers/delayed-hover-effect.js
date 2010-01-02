/**
 * This snipped in case you need to handle some operations on
 * the 'mouserover' effect, but you'd like to add some threshold 
 * so that it didn't trigger your code when the user just quickly
 * passes his mouse over the element
 *
 * The principle is simple. When the user puts his mouse over
 * the element we are intiating a delayed call, and when he leaves
 * the element too quickly the call will be simply canceled
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */

var that_function = function() {
  // do your thing over here
};

$('my-element-id')
  .onMouseover(function() { this._timer = that_function.delay(100); })
  .onMouseout(function() { if (this._timer) this._timer.cancel(); });