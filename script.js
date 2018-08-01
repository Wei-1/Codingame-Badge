function loadCGData(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://www.codingame.com/services/CodinGamerRemoteService/findCodingamePointsStatsByHandle",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "e7413d8e-c31d-3bc2-b3d7-84239de3ecdd"
        },
        "processData": false,
        "data": "[\"" + $("#cgid").val() + "\"]"
    }
    $.ajax(settings).done(function (response) {
        $("#badgehead").text("Codingame : " + response.success.codingamer.pseudo);
        $("#badgebody").text(response.success.codingamer.rank + "th / " + response.success.codingamePointsRankingDto.numberCodingamers);
    });
}

$(document).ready(function() {
    loadCGData();
    $("button").click(function(){
        loadCGData();
    });
});