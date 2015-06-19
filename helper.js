module.exports= function (hbs) {
  // http://stackoverflow.com/a/12002281/1263876
  hbs.registerHelper("foreach",function(arr,options) {
      if(options.inverse && !arr.length)
          return options.inverse(this);

      return arr.map(function(item,index) {
          item.$index = index;
          item.$first = index === 0;
          item.$notfirst = index !== 0;
          item.$last  = index === arr.length-1;
          return options.fn(item);
      }).join('');
  });

  // http://stackoverflow.com/a/16315366
  hbs.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
  });

  // http://stackoverflow.com/a/18831911
  hbs.registerHelper('commalist', function(items, options) {
    return options.fn(items.join(', '));
  });

}