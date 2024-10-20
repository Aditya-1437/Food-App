function cancelOrder(){
    window.location.href = "./Home.html"
    alert("Order Cancelled Successfully!")
}

function check1(){

    var starter = document.getElementById("str");
    var main = document.getElementById("mn");
    var dessert = document.getElementById("dsrt");
    var c = document.getElementById("crs").value;
    if(c=="starter"){
        main.disabled=true;
        dessert.disabled=true;
        starter.disabled=false;
    }else if(c=="main"){
        main.disabled=false;
        dessert.disabled=true;
        starter.disabled=true;
    }else if(c=="dessert"){
        main.disabled=true;
        dessert.disabled=false;
        starter.disabled=true;
    }else{
        main.disabled=false;
        dessert.disabled=false;
        starter.disabled=false;
    }
}

//items data

const start = {
    "s1" : 200,
    "s2" : 150,
    "s3" : 200,
    "s4" : 270,
    "s5" : 300,
    "s6" : 350,
}

const man = {
    "m1" : 200,
    "m2" : 240,
    "m3" : 220,
    "m4" : 170,
    "m5" : 250,
    "m6" : 270,
    "m7" : 280,
    "m8" : 240,
    "m9" : 220,
    "m10" : 220,
    "m11" : 160,
    "m12" : 230,
}

const des = {
    "d1" : 150,
    "d2" : 100,
    "d3" : 120,
    "d4" : 180,
    "d5" : 200,
}

// Bill Check

var bill = 0;
var click = 0;

function totBill(){
    if(click == 1){
        alert("Bill Already Generated! Rs." + bill);
        return;
    }else{
        click = 1;
        var course = document.getElementById("crs").value;
        var starter = document.getElementById("str").value;
        var main = document.getElementById("mn").value;
        var dessert = document.getElementById("dsrt").value;
        var pay = document.getElementById("pay");
    
        if(course == "slt"){
            alert("Select course type");
            return;
        }
    
        if(starter.disabled != true){
            for(const key in start){
                if(key == starter){
                    bill = bill + start[key]
                }
            }
        }
    
        if(main.disabled != true){
            for(const key in man){
                if(key == main){
                    bill = bill + man[key]
                }
            }
        }
    
        if(dessert.disabled != true){
            for(const key in des){
                if(key == dessert){
                    bill = bill + des[key]
                }
            }
        }
    
        pay.innerHTML = bill;
    }


}

function orderSubmit(){
    var course = document.getElementById("crs").value;
    if(course == "slt"){
        alert("Select course type");
        return false;
    }else{
        location.href = "./Home.html";
        alert("Order Placed and we will deliver your order to your door step!");
    }
}