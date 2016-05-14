/**
 *
 * Created by mingqin on 16/5/14.
 */

var list = ['seal', 'whale', 'Predation','Wheatstone bridge','egret','egret','eel']
var num = getRandomArbitrary(0, list.length)
var title = list[num]
var explore = $("#explore");
explore.click(function() {
    var url = "https://en.wikipedia.org/w/api.php";
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        data: {
            'action'  : 'query',
            'titles'  : title, //random
            'prop'    : 'revisions',
            'format'  : 'json',
            'rvprop'  : 'content',
        },
        success: function(r) {
            var pages = r['query']['pages']
            var pageid = Object.keys(pages)[0]
            var wikistr = pages[pageid]['revisions'][0]['*']
            var html = wikistr.wiki2html();
            //var html = wiky.process(wikistr)
            $('#msg').html(html)
            console.log(r)
        },
        fail: function(r) {
            console.log(r)
        }
    }).done(function(r){
        console.log(r)
    });
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
