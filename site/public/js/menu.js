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
var show_one = false
function oneliner() {
    if (show_one == true) {
        show_one = false
        one_dropdown.style.display = 'none'
    } else {
        show_one = true
        one_dropdown.style.display = 'block'
    }
}
var show_sem = false
function semilit() {
    if (show_sem == true) {
        show_sem = false
        semi_dropdown.style.display = 'none'
    } else {
        show_sem = true
        semi_dropdown.style.display = 'block'
    }
}
var show_lit = false
function literate() {
    if (show_lit == true) {
        show_lit = false
        lit_dropdown.style.display = 'none'
    } else {
        show_lit = true
        lit_dropdown.style.display = 'block'
    }
}
function clickclose1() {
    if (show_one == true) {
        show_one = false
        one_dropdown.style.display = 'none'
}
}
function clickclose2() {
    if (show_sem == true) {
        show_sem = false
        semi_dropdown.style.display = 'none'
}
}
function clickclose3() {
    if (show_lit == true) {
        show_lit = false
        lit_dropdown.style.display = 'none'
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