fetchData("learning").then((response) => {
  let learning = document.getElementById("learnings");
  let html = '';
  response.map((res) => {
    html += `
            <div class="col-md-3 m-2 card d-flex p-2 text-center align-items-center align-middle">
                <img src="/assets/icons/${res.icon}" alt="" width="50">
                <p class="mt-2">${res.name}</p>
            </div>
        `;
  });

  learning.innerHTML = html
});

fetchData("role").then((response) => {
    let role = document.querySelector("#roles .col-md-4");
    let roleAbout = document.querySelector("#roles #roleAbout div");
    let roleAdvantage = document.querySelector("#roles #roleAdvantage div");
    let rolePurpose = document.querySelector("#roles #rolePurpose div");
    let title = document.querySelector("#section-role h1 span");
    let subtitle = document.querySelector("#section-role h1 b");
    let html = '';
    response.map((res) => {
        html += `
                <a href="#" onclick="return changeRole(${res.id}, this)" data-id="${res.id}" class="d-block mt-5 ${res.active == true ? 'active' : ''}">
                    <img src="/assets/icons/${res.icon}" alt="">
                    <span>${res.name}</span>
                </a>
            `;
    });

    let data = response.filter((res) => res.active == true) 
    
    roleAbout.textContent = data[0].feature.about
    roleAdvantage.textContent = data[0].feature.advantage
    rolePurpose.textContent = data[0].feature.purpose
    title.textContent = data[0].name
    subtitle.textContent = data[0].name
    role.innerHTML = html
});

function changeRole(id, elem){
    fetchData("role").then((response) => {
        let roleAbout = document.querySelector("#roles #roleAbout div");
        let roleAdvantage = document.querySelector("#roles #roleAdvantage div");
        let rolePurpose = document.querySelector("#roles #rolePurpose div");
        let title = document.querySelector("#section-role h1 span");
        let subtitle = document.querySelector("#section-role h1 b");
    
        let data = response.filter((res) => res.id == id) 
        
        roleAbout.textContent = data[0].feature.about
        roleAdvantage.textContent = data[0].feature.advantage
        rolePurpose.textContent = data[0].feature.purpose
        title.textContent = data[0].name
        subtitle.textContent = data[0].name
    });

    var a = document.querySelectorAll("#roles .col-md-4 a");
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active')
    }
    elem.classList.add('active');

    return false;
}

