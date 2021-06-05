
let color="Azul";
let forma="Cuadrado";
$("#Forma_menu").hide();
$("#Objeto_Arrastrar").draggable({ containment: "#Menu" });
document.getElementById("azul").checked=true;
document.getElementById("cuadrado").checked=true;

$( "#Objeto_Soltar" ).droppable({
    drop: function( event, ui ) {
        if(color!="Rojo"){
            $("#Objeto_Soltar_txt").html("Puaj, no me gusta la comida "+color);
            $("#Objeto_Arrastrar").animate({left:"10%",top:"10%"});           
        }else if(forma=="Cuadrado"){
            $("#Objeto_Soltar_txt").html("Puaj, no me gusta la comida Cuadrada");
            $("#Objeto_Arrastrar").animate({left:"10%",top:"10%"});
        }else{
            document.getElementById("Objeto_Soltar").style.backgroundColor="red";
            $("#Objeto_Soltar_txt").html("Mmm, ¡Que rico!");
            $("#Objeto_Soltar").animate({width:"8vw",height:"8vw"})
            $("#Objeto_Arrastrar").hide();

        }
    }
});

$("#boton1").click(function(){
    $("#Forma_menu").hide();
    $("#Color_menu").show();
    document.getElementById("boton1").style.backgroundColor="dodgerblue";
    document.getElementById("boton2").style.backgroundColor="white";
    document.getElementById("boton2_txt").style.color="black";
    document.getElementById("boton1_txt").style.color="white";

});

$("#boton2").click(function(){
    $("#Forma_menu").show();
    $("#Color_menu").hide();
    document.getElementById("boton2").style.backgroundColor="dodgerblue";
    document.getElementById("boton1").style.backgroundColor="white";
    document.getElementById("boton1_txt").style.color="black";
    document.getElementById("boton2_txt").style.color="white";
});

$("#azul").click(function(){
    document.getElementById("Objeto_Arrastrar").style.backgroundColor="blue";
    color="Azul";
});

$("#violeta").click(function(){
    document.getElementById("Objeto_Arrastrar").style.backgroundColor="purple";
    color="Violeta";

});

$("#rojo").click(function(){
    document.getElementById("Objeto_Arrastrar").style.backgroundColor="red";
    color="Rojo";

});

$("#verde").click(function(){
    document.getElementById("Objeto_Arrastrar").style.backgroundColor="green";
    color="Verde";

});



$("#circulo").click(function(){
    document.getElementById("Objeto_Arrastrar").style.borderRadius="100%";
    forma="Circulo";

});

$("#cuadrado").click(function(){
    document.getElementById("Objeto_Arrastrar").style.borderRadius="0%";
    forma="Cuadrado";

});

$("#Return").click(function(){
    location.reload();

});