
        let name = document.querySelector("#name");
        let button = document.querySelector("#button");
        let error = document.querySelector("#error");

        button.addEventListener('click', function(){
        if(name.value ==""){
        error.innerHTML = "Enter your name";
        error.style.color ="red";
        }
        else{
        name = document.querySelector("#name").value;
        window.localStorage.setItem("name", name);
        window.location.href ="welcome.html";
        console.log(name.value);
        }
   
    })  