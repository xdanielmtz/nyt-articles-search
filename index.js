$(document).ready(function(){

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key="+key;
var searchTerm = ""
var key ="XNFgr5MPnPiplHbUlgAaiaUD6hpy06jb";


$("#submitBtn").on("click", function (e) {
    e.preventDefault()
    console.log("works")




    
})
$.ajax({
    URL: queryURL,
    method: "GET"
}).then()





})