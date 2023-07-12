module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */

  filters.toArray = val => typeof val === 'string' ? [val] : val;

  // Filter to change a number, like 1 "12" or 04, to a month in words
  //
  // Accepts numbers, strings, data[] and variables
  // If empty prints nothing unless you give it a placeholder which it will print out
  //
  // Usage in your templates:
  //
  // With number with filer
  //                    {{ 1 | monthToWord }}
  // With data from previous input
  //                    {{ data['dob-month'] | monthToWord }}
  // With data that's empty with alternative placeholder
  //                    {{ data['dob-month'] | monthToWord('January') }}

  filters.monthToWord = function(month,placeholder) {
    var months = {
      "1":'January',
      "01":'January',
      "2":'February',
      "02":'February',
      "3":'March ',
      "03":'March',
      "4":'April',
      "04":'April',
      "5":'May',
      "05":'May',
      "6":'June',
      "06":'June',
      "7":'July',
      "07":'July',
      "8":'August',
      "08":'August',
      "9":'September',
      "09":'September',
      "10":'October',
      "11":'November',
      "12":'December'
    }

    if (month) {
      month.toString()
      return months[month]
    } else if (placeholder) {
      return placeholder
    } else {
      return
    }

  }

  filters.monthToWordWithSpaces = function(month,placeholder) {
    var months = {
      "1":'January',
      "01":'January',
      "2":'February',
      "02":'February',
      "3":'March ',
      "03":'March',
      "4":'April',
      "04":'April',
      "5":'May',
      "05":'May',
      "6":'June',
      "06":'June',
      "7":'July',
      "07":'July',
      "8":'August',
      "08":'August',
      "9":'September',
      "09":'September',
      "10":'October',
      "11":'November',
      "12":'December'
    }

    if (month) {
      month.toString()
      return ' ' + months[month] + ' '
    } else if (placeholder) {
      return ' ' + placeholder + ' '
    } else {
      return
    }

  }
  
  filters.plural = function(singluar, plural, count) {
      
    // thought it could be like possesive filter, but there are excepetions to the rules so just made it simple switch
    console.log(count)
    if (count == 1) {
      // return original value
      return singluar
    } else {
      // return plural value
      return plural
    }
  }

  return filters
}
