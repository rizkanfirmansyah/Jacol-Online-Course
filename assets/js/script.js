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
    let html = '';
    response.map((res) => {
        html += `
                <a href="#" class="d-block mt-5 ${res.active == true ? 'active' : ''}">
                    <img src="/assets/icons/${res.icon}" alt="">
                    <span>${res.name}</span>
                </a>
            `;
    });

    let data = response.filter((res) => res.active == true) 
    
    roleAbout.textContent = data[0].feature.about
    roleAdvantage.textContent = data[0].feature.advantage
    rolePurpose.textContent = data[0].feature.purpose
    role.innerHTML = html
});
