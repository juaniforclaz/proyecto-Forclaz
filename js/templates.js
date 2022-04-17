// Header

let header = document.getElementById('header');
let headerHtml = '<nav class="navbar navbar-expand-lg navbar-dark bg-primary"><div class="container-fluid"><a class="navbar-brand" href="#"><img src="../img/kolmas-logo-blanco.png" alt="kolmas accesorios" class="logo-navbar"/></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link" href="../index.html">Inicio</a></li><li class="nav-item"><a class="nav-link" href="../views/catalogo.html">Catalogo</a></li><li class="nav-item"><a class="nav-link" href="../views/contacto.html">Contacto</a></li><li class="nav-item"><a class="nav-link" href="../views/nosotros.html">Nosotros</a></li></ul><div class="containe-fluid"><div class="row"><div class="col"><i class="fa-solid fa-circle-user text-white fa-2x p-1 pointer" id="logearse"></i></div></div></div></div></div></nav>';
header.innerHTML = headerHtml;

// Footer

let footer = document.getElementById('footer');
let footerHtml = '<footer><div class="container-fluid bg-primary p-5"><div class="container"><div class="row text-center"><div class="col-4"><a href="#"><i class="fa-solid fa-envelope text-white fs-1 link"></i>Gmail</a></div><div class="col-4"><a href="#"><i class="fa-brands fa-instagram text-white fs-1 link"></i>Instagram</a></div><div class="col-4"><a href="#"><i class="fa-brands fa-facebook-square text-white fs-1 link"></i>Facebook</a></div></div><div class="row mt-5"><div class="col-9"><a href="/admin/ingreso-productos.html" class="text-white link"><i class="fa-solid fa-user-secret text-white fs-4"></i></a></div></div></div></div></footer>';
footer.innerHTML = footerHtml;