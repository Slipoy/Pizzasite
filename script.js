
let hotDeals=document.querySelectorAll(".hot-deals")
let DivBtnScrolls = document.querySelector(".btn-scroll")
let btnScroll = document.querySelectorAll(".btn")
let timerId
let count = 1
let deal = function (id){
return document.querySelector(`.${id}`)
}
DivBtnScrolls.addEventListener('click', function (e){
    clearInterval(timerId)
    resetStyle(hotDeals, btnScroll)
    deal(e.target.id).style.opacity = "1"
    deal(e.target.id).style.zIndex = "50"
    e.target.style.backgroundColor ="orange"
    for (let i = 0 ; i < hotDeals.length;i++){
        const elem = hotDeals[i];
        elem.dataset.id = i
        if (elem.style.opacity == "1"){
            count = elem.dataset.id
            showDeals(hotDeals, btnScroll)
        }
    }
})
function resetStyle (deals, btn){
    deals.forEach(e =>{
        e.style.opacity = "0"
        e.style.zIndex = ""
    })
    btn.forEach(e => e.style.backgroundColor = "")

}
function showDeals(deals, btn) {

    timerId = setInterval(function () {
        resetStyle(deals, btn)
        deals[count].style.opacity = "1";
        deals[count].style.zIndex = "50"
        btn[count].style.backgroundColor = "orange"
        count++
        if (count == deals.length) {
            count = 0
        }
    }, 10000)
}
showDeals(hotDeals, btnScroll)