function newOrder(){
    window.location.href = "Order.html";
}
function toggleMenu(){
    const menu = document.querySelector('.navigate2')
    const icon = document.querySelector('.hamburgur')
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
function member(){
    window.location.href = "./Member.html";
}