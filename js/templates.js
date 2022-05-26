// Header

let header = document.getElementById('header');
header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">
<a class="navbar-brand" href="#"><img src="../img/kolmas-logo-blanco.png" alt="kolmas accesorios" class="logo-navbar"/></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
<span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse" id="navbarSupportedContent"> 
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item"><a class="nav-link" href="../index.html">Inicio</a></li>
<li class="nav-item"><a class="nav-link" href="../views/catalogo.html">Catalogo</a></li>
<li class="nav-item"><a class="nav-link" href="../views/contacto.html">Contacto</a></li>
</ul>
<div class="container-fluid">
<div class="row mb-2">
</div>
</div>
</div>
</div>
</div>
</div>
</nav>
`


// Footer

let footer = document.getElementById('footer');
footer.innerHTML = `
<footer>
<div class="container-fluid bg-primary p-5 mt-5"><div class="container">
<div class="row text-center">
<div class="col-4 p-3">
<a href="./contacto.html"><i class="fa-solid fa-envelope text-white fs-1 link"></i>Gmail</a>
</div>
<div class="col-4 p-3">
<a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram text-white fs-1 link"></i></a>
</div>
<div class="col-4 p-3">
<a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-square text-white fs-1 link"></i></a>
</div>
</div>
</div>
</div>
</div>
</footer>
`
