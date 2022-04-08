fetchData("learning").then((response) => {
  let learning = document.getElementById("learnings");
  let html = "";
  response.map((res) => {
    html += `
            <div class="col-md-3 col-5 m-2 card d-flex p-2 text-center align-items-center align-middle">
                <img src="/assets/icons/${res.icon}" alt="" width="50">
                <p class="mt-2">${res.name}</p>
            </div>
        `;
  });

  learning.innerHTML = html;
});

fetchData("role").then((response) => {
  let role = document.querySelector("#roles .col-md-4");
  let roleAbout = document.querySelector("#roles #roleAbout div");
  let roleAdvantage = document.querySelector("#roles #roleAdvantage div");
  let rolePurpose = document.querySelector("#roles #rolePurpose div");
  let title = document.querySelector("#section-role h1 span");
  let subtitle = document.querySelector("#section-role h1 b");
  let imgRole = document.querySelector("#section-role #main-role");
  let html = "";
  response.map((res) => {
    html += `
                <a href="#" onclick="return changeRole(${
                  res.id
                }, this)" data-id="${res.id}" class="d-block mt-5 ${
      res.active == true ? "active" : ""
    }">
                    <img src="/assets/icons/${res.icon}" alt="">
                    <span>${res.name}</span>
                </a>
            `;
  });

  let data = response.filter((res) => res.active == true);

  roleAbout.textContent = data[0].feature.about;
  roleAdvantage.textContent = data[0].feature.advantage;
  rolePurpose.textContent = data[0].feature.purpose;
  title.textContent = data[0].name;
  subtitle.textContent = data[0].name;
  role.innerHTML = html;
  imgRole.innerHTML = `<img src="/assets/icons/${data[0].img}" alt="" class="img-fluid">`;
});

fetchData("course").then((response) => {
  let i = 1;
  let html = "";

  response.map((res) => {
    let icon = "junior.png";
    if (res.level == "senior") {
      icon = "senior.png";
    }
    if (res.category == "kursus") {
      if (i <= 3) {
        html += `
                <div class="col-md-4" id="course">
                    <div class="mt-4 card shadow">
                        <img src="/assets/images/${res.img}" class="card-img-top" alt="Ini gambar course 1">
                        <label for="label" class="label">${res.category}</label>
                        <div class="card-body">
                            <h5 class="title">${res.title}</h5>
                            <h5 class="category"><img src="/assets/icons/${icon}" alt=""> ${res.level}</h5>
                            <p class="description mt-3 mb-5">Melatih ilmu kesenian pada tingkat junior dengan
                                mengajarkan dasar yang sangat baik</p>
                            <div class="d-flex text-center justify-content-center">
                                <a href="#" class="btn bgr-primary me-2 px-3 py-2"><i class="fas fa-star"></i>
                                    ${res.feature.rating}</a>
                                <a href="#" class="btn bgr-primary me-2 px-4 py-2"><i class="fas fa-user"></i>
                                    ${res.feature.users}</a>
                                <a href="#" class="btn bgr-primary px-4 py-2">Umur ${res.feature.age}+</a>
                            </div>
                            <div class="d-grid gap-2 mt-3">
                                <a class="btn bgr-alternatif" href="pages/detail-course.html">Bergabung </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      }
      i++;
    }
  });

  document.querySelector("#section-course #courses").innerHTML = html;
});

function changeRole(id, elem) {
  fetchData("role").then((response) => {
    let roleAbout = document.querySelector("#roles #roleAbout div");
    let roleAdvantage = document.querySelector("#roles #roleAdvantage div");
    let rolePurpose = document.querySelector("#roles #rolePurpose div");
    let title = document.querySelector("#section-role h1 span");
    let subtitle = document.querySelector("#section-role h1 b");
    let imgRole = document.querySelector("#section-role #main-role");

    let data = response.filter((res) => res.id == id);

    roleAbout.textContent = data[0].feature.about;
    roleAdvantage.textContent = data[0].feature.advantage;
    rolePurpose.textContent = data[0].feature.purpose;
    title.textContent = data[0].name;
    subtitle.textContent = data[0].name;
    imgRole.innerHTML = `<img src="/assets/icons/${data[0].img}" alt="" class="img-fluid">`;
  });

  var a = document.querySelectorAll("#roles .col-md-4 a");
  for (i = 0; i < a.length; i++) {
    a[i].classList.remove("active");
  }
  elem.classList.add("active");

  return false;
}
