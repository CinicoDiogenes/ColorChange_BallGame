$(function () {
  
        var colors = ['gray', 'green', 'red', 'blue', 'brown', 'black', 'yellow'];

        $('#btn1').on('click', function () {
            $('#globo').removeClass(colors).addClass('red');
        });
        $('#btn2').on('click', function () {
            $('#globo').removeClass(colors).addClass('green');
        });
        $('#btn3').on('click', function () {
            $('#globo').removeClass(colors).addClass('blue');
        });
        $('#btn4').on('click', function () {
            $('#globo').removeClass(colors).addClass('brown');
        });
        $('#btn5').on('click', function () {
            $('#globo').removeClass(colors).addClass('black');
        });
        $('#btn6').on('click', function () {
            $('#globo').removeClass(colors).addClass('yellow');
        });
    } 
    
     


);
