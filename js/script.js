 var startingNumber = $('.count').text(),
     increment = $('.increment'),
     decrement = $('.decrement');

  increment.on('click', function() {
    $('.count').text( startingNumber++ );
  });

  decrement.on('click', function() {
    $('.count').text( startingNumber-- );
  });




