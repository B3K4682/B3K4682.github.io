var langArray = [];
$('.vodiapicker option').each(function () {
    var img = $(this).attr("data-thumbnail");
    var text = this.innerText;
    var value = $(this).val();
    var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
    langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function () {
    var img = $(this).find('img').attr("src");
    var value = $(this).find('img').attr('value');
    var text = this.innerText;
    var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
    $('.btn-select').html(item);
    $('.btn-select').attr('value', value);
    $(".b").toggle();
    //console.log(value);
});

$(".btn-select").click(function () {
    $(".b").toggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang) {
    //find an item with value of sessionLang
    var langIndex = langArray.indexOf(sessionLang);
    $('.btn-select').html(langArray[langIndex]);
    $('.btn-select').attr('value', sessionLang);
} else {
    var langIndex = langArray.indexOf('ch');
    $('.btn-select').html(langArray[langIndex]);
    //$('.btn-select').attr('value', 'en');
}




// ============================================================
// Phone Number Select

var langArray = [];
$('.vodiapicker_phone option').each(function () {
    var img = $(this).attr("data-thumbnail");
    var text = this.innerText;
    var value = $(this).val();
    var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
    langArray.push(item);
})

$('#a_phone').html(langArray);

//Set the button value to the first el of the array
$('.btn-select_phone').html(langArray[0]);
$('.btn-select_phone').attr('value', 'en');

//change button stuff on click
$('#a_phone li').click(function () {
    var img = $(this).find('img').attr("src");
    var value = $(this).find('img').attr('value');
    var text = this.innerText;
    var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
    $('.btn-select_phone').html(item);
    $('.btn-select_phone').attr('value', value);
    $(".b_phone").toggle();
    //console.log(value);
});

$(".btn-select_phone").click(function () {
    $(".b_phone").toggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang) {
    //find an item with value of sessionLang
    var langIndex = langArray.indexOf(sessionLang);
    $('.btn-select_phone').html(langArray[langIndex]);
    $('.btn-select_phone').attr('value', sessionLang);
} else {
    var langIndex = langArray.indexOf('ch');
    $('.btn-select_phone').html(langArray[langIndex]);
    //$('.btn-select').attr('value', 'en');
}