// Generated by CoffeeScript 1.10.0
(function() {
  var Url, url,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  url = require('url');

  Url = (function() {
    function Url(inputString) {
      this.inputString = inputString != null ? inputString : '';
      this.format = bind(this.format, this);
      this.obj = Url.parse(this.inputString);
      this.string = Url.format(this.obj);
      return this;
    }

    Url.prototype.format = function() {
      return Url.format(this.obj);
    };

    Url.parse = function(string) {
      var noprotocol, obj;
      noprotocol = string.indexOf('://') === -1;
      if (noprotocol) {
        string = "ws://" + string;
      }
      obj = url.parse(string);
      if (!obj.port) {
        obj.port = (function() {
          switch (obj.protocol) {
            case 'https:':
            case 'wss:':
              return 443;
            case 'http:':
            case 'ws:':
              return 80;
          }
        })();
      }
      if (noprotocol && obj.port === 443) {
        obj.protocol = 'wss:';
      }
      return obj;
    };

    Url.format = function(obj) {
      return url.format(obj);
    };

    return Url;

  })();

  module.exports = {
    Url: Url,
    parse: Url.prototype.parse,
    format: Url.prototype.format
  };

}).call(this);
