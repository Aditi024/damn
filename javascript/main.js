// ========================================
// Your JavaScript goes here
// ========================================

// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle')
$('body').on('mousemove', e => {

  $('.color-test').css({
    left: `${e.originalEvent.clientX}px`,
    top: `${e.originalEvent.clientY}px`,
  });
})
  $('body').on('dblclick', e => {

  $('.color-test').toggleClass('not-blurred');
});
