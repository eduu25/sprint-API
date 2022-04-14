$("#mostrarImg").hide();
$("#mostrarVd").hide();

$("#pesquisar").click(function (event) {
    event.preventDefault();
    let pesquisaData = $("#dtInput").val()
    apiNasa(pesquisaData)

})


function apiNasa(pesquisaData){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=oveUlZprz2uvkYMLThEDMESx06hEXWrRdvcxqA7c&date=${pesquisaData}`,
        success: function(userResposta){
            if(userResposta.media_type == "image"){
                $("#trocarNome").text("Foto:");
                $("#mostrarVd").hide();
                $("#mostrarImg").show();
                $("#Nome").text(userResposta.title)
                $("#mostrarImg").attr("src", userResposta.url);
            }
            else{
                $("#trocarNome").text("Video:");
                $("#mostrarImg").hide();
                $("#mostrarVd").show();
                $("#Nome").text(userResposta.title);
                $("#mostrarVd").attr("src", userResposta.url);




            }

        }
    })
}
