//INICIALIZACIÓN
let color = "azul";
let forma = "cuadrado";
let imagen = false;

$("#azul").prop("checked", true);
$("#cuadrado").prop("checked", true);

$("#Color_menu").show();
$("#Forma_menu").hide();


//CAMBIAR EL SRC DE UNA IMAGEN AL CLICKAR
$("#Objeto_Arrastrar").click(function(){

    if (imagen == false){
        $("#img").attr("src", "img/pato.png");
        imagen = true;
    
    } else {
        $("#img").attr("src", "");
        imagen = false;
    }
});


//RESIZABLE

$("#Objeto_Arrastrar").resizable({handles: 'n, e, s, w',  maxHeight: 300, minHeight: 80, maxWidth: 300, minWidth: 80, containment: "#Menu"});


//SELECTABLE
$("#lista").selectable();

//SORTABLE
$("#lista2").sortable();

//VENTANA FORMA
$("#boton2").click(function(){
    $("#Color_menu").hide();
    $("#Forma_menu").show();
    $("#boton2").css("background-color", "dodgerblue");
    $("#boton1").css("background-color", "white");
    $("#boton2_txt").css("color", "white");
    $("#boton1_txt").css("color", "black");
    
});

//VENTANA COLOR
$("#boton1").click(function(){
    $("#Color_menu").show();
    $("#Forma_menu").hide();
    $("#boton1").css("background-color", "dodgerblue");
    $("#boton2").css("background-color", "white");
    $("#boton1_txt").css("color", "white");
    $("#boton2_txt").css("color", "black");
    
});

//BOTONES COLOR
$("#azul").click(function(){
    color = "azul";
    $("#Objeto_Arrastrar").css("background-color", "blue");
});

$("#violeta").click(function(){
    color = "violeta";
    $("#Objeto_Arrastrar").css("background-color", "purple");
});

$("#rojo").click(function(){
    color = "rojo";
    $("#Objeto_Arrastrar").css("background-color", "red");
});

$("#verde").click(function(){
    color = "verde";
    $("#Objeto_Arrastrar").css("background-color", "green");
});

//BOTONES FORMA
$("#circulo").click(function(){
    forma = "circulo";
    $("#Objeto_Arrastrar").css("border-radius", "50%");
    $("#img").css("border-radius", "50%");
});

$("#cuadrado").click(function(){
    forma = "cuadrado";
    $("#Objeto_Arrastrar").css("border-radius", "0%");
    $("#img").css("border-radius", "0%");
});

//DRAGGABLE OBJETO
$("#Objeto_Arrastrar").draggable({containment: "#Menu"});

//DROPPABLE CAJA

$("#Objeto_Soltar").droppable({
    drop: function(event, ui){

        if (imagen == true){
            $("#Objeto_Soltar_txt").html("Puaj, no me gusta comer patos!!!");
            $("#Objeto_Arrastrar").animate({left:"10%",top:"10%"});

        }else if(color == "rojo" && forma == "circulo"){
            $("#Objeto_Arrastrar").hide();
            $("#Objeto_Soltar").css("width", "8vw");
            $("#Objeto_Soltar").css("height", "8vw");
            $("#Objeto_Soltar").css("background-color", "red");
            $("#Objeto_Soltar_txt").html("Ñaaaaaaaammmm ¡¡Qué RIIIIICO! Me encantan los objetos redondos y rojos.");

        } else if (color != "rojo" && forma != "circulo"){
            $("#Objeto_Soltar_txt").html("PUAAAAAAJ!!! No me gustan los objetos de color " + color + " y con forma de " + forma);
            $("#Objeto_Arrastrar").animate({ left: "10%", top: "10%"});

        } else if (color != "rojo"){
            $("#Objeto_Soltar_txt").html("PUAAAAAAJ!!! No me gustan los objetos de color " + color);
            $("#Objeto_Arrastrar").animate({ left: "10%", top: "10%"});

        } else if (forma != "circulo"){
            $("#Objeto_Soltar_txt").html("PUAAAAAAJ!!! No me gustan los objetos con forma de " + forma);
            $("#Objeto_Arrastrar").animate({ left: "10%", top: "10%"});

        }
    }
});

//REFRESCAR VENTANA
$("#Return").click(function(){
    location.reload();
});