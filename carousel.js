$(document).ready(function () {
    $img = $('#carousel img');
    indexImg = $img.length - 1;
    index = 0;
    $currentImg = $img.eq(index);

    $img.css('display', 'none');
    $currentImg.css('display', 'block');


    $('.next').click(function () {
        index++;
        if (index <= indexImg) {
            $img.fadeOut('slow');
            $currentImg = $img.eq(index);
            $currentImg.fadeIn('slow');
        } else {
            $img.fadeOut('slow');
            $currentImg = $img.eq(0);
            $currentImg.fadeIn('slow');
            index = 0;
        }
    });
    $('.prev').click(function () {
        index--;
        if (index >= 0) {
            $img.fadeOut('slow');
            $currentImg = $img.eq(index);
            $currentImg.fadeIn('slow');
        } else {
            $img.fadeOut('slow');
            $currentImg = $img.eq(indexImg);
            $currentImg.fadeIn('slow');
            index = indexImg;
        }

    });
    setInterval(function () {
        $img.eq(index).fadeOut('slow');
        index++;
        if (index > indexImg) {
            index = 0;
        }
        $currentImg = $img.eq(index);
        $currentImg.fadeIn('slow');
    }, 3000);


});