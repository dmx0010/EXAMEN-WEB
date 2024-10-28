let navLinks = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('.section');
let menuIcon = document.getElementById('menuIcon');
let navLinksContainer = document.getElementById('navLinks');

let usuarios=[
    {
        userName:"adim",
        password:"Admin123*"
    },
    {
        userName:"vendedor",
        password:"Vendedor123."
    }
]


navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        sections.forEach(section => section.classList.remove('active'));
        navLinksContainer.classList.remove('show');
        const targetSection = document.getElementById(this.getAttribute('data-target'));
        targetSection.classList.add('active');
    });
});

function abrirPagina(){
    var nuevaVentana = window.open("acceso.html", "_blank");
    if (nuevaVentana) {      
        nuevaVentana.focus();
    } else {   
        alert("Por favor, permite las ventanas emergentes para abrir la página.");
    }    
}
function validarPassword(password){
   
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;    
    return (regex.test(password))
}

function validarUsuario(usuario){
    var regex = /^([a-zA-Z0-9]+[._]?[a-zA-Z0-9]+){2,14}$/;
    return (regex.test(usuario))
}

function usuarioRegistrado(usuario, password){
    for (let i = 0; i < usuarios.length; i++) 
        {
        if (usuarios[i].usuario === usuario && usuarios[i].password === password) {
          return true; 
        }
    }
    return false; 
}

function validarDatos(usuario, password){
    if (validarUsuario(usuario))
        if (validarPassword(password))
            if (usuarioRegistrado(usuario, password))
                alert("Datos Válidos. Bienvenido al sistema")
            else
                alert("No existe un usurio con los credenciales proporcionados")
        else
            alert("Password no válido")
    else
        alert("Nombre de usuario no válido")
}