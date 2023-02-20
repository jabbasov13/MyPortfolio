var models=[
    {
        name : "Bmw 418d",
        image : "img/bmw.jpg",
        link : "https://www.google.com/search?q=bmw+416d&sxsrf=AJOqlzXyCzOxD68iP0RJKdMs-JbFRNMD_Q:1676898266171&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj62OrrlKT9AhWFp4sKHVT7Dv8Q_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=5-jZcfPofSSxVM"
    },
    {
        name : "Mazda CX-3",
        image : "img/mazda.jpg",
        link : "https://www.google.com/search?q=mazda+cx-3&sxsrf=AJOqlzWb1LaTSrZmKle4uupCAuq_CO6LKg:1676898363392&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjb2pialaT9AhVqi8MKHfzoBVMQ_AUoAXoECAIQAw&biw=1536&bih=722&dpr=1.25#imgrc=UanS2rcws9-GnM"
    },
    {
        name : "Volvo S60",
        image : "img/volvo.jpg",
        link : "https://www.google.com/search?q=bmw+416d&sxsrf=AJOqlzXyCzOxD68iP0RJKdMs-JbFRNMD_Q:1676898266171&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj62OrrlKT9AhWFp4sKHVT7Dv8Q_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=5-jZcfPofSSxVM"
    },
    {
        name : "Skoda Superb",
        image : "img/skoda.jpg",
        link : "https://www.google.com/search?q=bmw+416d&sxsrf=AJOqlzXyCzOxD68iP0RJKdMs-JbFRNMD_Q:1676898266171&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj62OrrlKT9AhWFp4sKHVT7Dv8Q_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=5-jZcfPofSSxVM"
    },
    {
        name : "Honda Civic",
        image : "img/honda.jpg",
        link : "https://www.google.com/search?q=bmw+416d&sxsrf=AJOqlzXyCzOxD68iP0RJKdMs-JbFRNMD_Q:1676898266171&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj62OrrlKT9AhWFp4sKHVT7Dv8Q_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25#imgrc=5-jZcfPofSSxVM"
    }
]

var index = 0;
var sliderCount = models.length;
var settings = {
    duration : "2000",
    random : true 
}

var interval;

init(settings)

showSlide(index);

document.querySelector(".fa-circle-arrow-left").addEventListener("click",function(){

    index--;
    showSlide(index)
    console.log(index);


});
document.querySelector(".fa-circle-arrow-right").addEventListener("click",function(){

    index++;
    showSlide(index)
    console.log(index);


})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings)
    })
})

function init(settings){

    var prev;

    
    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random() * sliderCount);
            }while(index == prev){
                prev=index
            }

            
        }else{
            
        }
        showSlide(index)

    },settings.duration)
    

    
}

function showSlide(i){

    index = i;

    if(i<0){
        index =sliderCount -1;
    }
    if(i>=sliderCount){
        index=0
    }

    document.querySelector(".card-img-top").setAttribute("src",models[index].image)

    document.querySelector(".card-title").textContent = models[index].name

    document.querySelector(".card-link").setAttribute("href",models[index].link)

}

