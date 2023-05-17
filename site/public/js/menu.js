 var exibir_menu = false

    function mostrarmenu() {
        if (exibir_menu == true) {
            exibir_menu = false
            child_dropdown.style.display = 'none'
        } else {
            exibir_menu = true
            child_dropdown.style.display = 'block'
        }
    }

    var show_posts = false

    function showrpg() {
        if (show_posts == true) {
            show_posts = false
            rpg_dropdown.style.display = 'none'
        } else {
            show_posts = true
            rpg_dropdown.style.display = 'block'
        }
    }

    var show_post = false

    function showttrpg() {
        if (show_post == true) {
            show_post = false
            ttrpg_dropdown.style.display = 'none'
        } else {
            show_post = true
            ttrpg_dropdown.style.display = 'block'
        }
    }