//= require "modernizr/modernizr.js"
//= require "jquery"
//= require "jquery.transit"
//= require "EaselJS"

// -------------------------------------------------
//
// Home
// 
// -------------------------------------------------

(function() {

  "use strict";

  var Piece = function() {

    var self = this;

    self.init();

  };

  Piece.prototype = {

    // -------------------------------------------------
    //
    // Initial scene setup
    // 
    // -------------------------------------------------

    init: function() {

      var self = this;

      console.log('hello world');

    }

  };

  new Piece();

})();