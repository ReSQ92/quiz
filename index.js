$( document ).ready(function() {
    $('.ques1').show();
    var questioncounter = 1;
    $('.answer-btn').click(function() {
      $(this).next('p').show();
    });
    $('.next-question-btn').click(function() {
        questioncounter++;
        $('.ques'+questioncounter).show();

    });
    $('.yeya-gvaya').click(function(){
        questioncounter = 1;
    })
        
    
});
