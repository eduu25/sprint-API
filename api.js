$("#mostrarImg").hide();
$("#mostrarVd").hide();

$("#pesquisar").click(function (event) {
    event.preventDefault();
    let pesquisaData = $("#dtInput").val()
    apiNasa(pesquisaData)

})


function apiNasa(pesquisaData){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod? api_key=oveUlZprz2uvkYMLThEDMESx06hEXWrRdvcxqA7c=${pesquisaData}`,
        success: function(userResposta){

        }
    })
}
