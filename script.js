function paginar(id) {  // função “paginar” que receba um argumento: o id da div da página selecionada.
    var items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('active'); //função “paginar” remove a classe active
    }
    document.getElementById(id).classList.add('active');
    }