// play with JQuery
$('body').hide().fadeIn(3000);

//hide all images hide all links
$('img').hide();
// $('a').hide();

//test the event

$('h1').click(hidesections);
function hidesections() {
    $(this).text("Hiding..");
    $('body').children('p').slideToggle();
}

$('a').each(change);
function change(){
    var links = $(this).attr('href');
    console.log(links);
    $(this).attr('href', 'https://www.google.com');
}