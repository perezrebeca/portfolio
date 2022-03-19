
$(document).ready(function(event){

  $(".card").click(function(){
      projectClick($(this));
  });

});



function projectClick(projectName) {

  var alt = projectName.children("img").attr("alt");
  location.href ="https://github.com/perezrebeca/" + alt + ".git";
}
