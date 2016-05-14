/**
 *
 * Created by mingqin on 16/5/14.
 */

var $explore = $("#explore");
$explore.click(function() {
    var url = "https://en.wikipedia.org/w/api.php";
    $.ajax({
        type: "GET",
        url: url,
        dataType: 'jsonp',
        data: {
            'action': 'query',
            'titles': 'theory', //random
            'prop': 'revisions',
            'format': 'jsonp',
        },
        success: function(r) {
            raw = r['data'];
            console.log(raw)
        },
        fail: function(r) {
            raw = r['data']
            console.log(raw)
        }
    }).done(function(r){
        raw = r['data']
        $explore.prop('disabled',false);
    });
    console.log('xxx')
})
