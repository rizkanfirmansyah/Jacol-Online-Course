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
                              <a class="btn bgr-alternatif" href="/pages/detail-course.html">Bergabung </a>
                          </div>
                      </div>
                  </div>
              </div>
          `;
      }
      i++;
    }
  });

  document.querySelector(".courses").innerHTML = html;
});

getCoursesAll();

document
  .getElementById("button-filter")
  .addEventListener("click", function (e) {
    let level = document.getElementById("level-courses").value;
    let category = document.getElementById("type-courses").value;
    let input = document.querySelector("input.form-control").value;

    getCourses(category, level, input);
  });

function getCourses(category, level, input) {
  fetchData("course").then((response) => {
    let html = "";
    let courses = [];

    
    response.map((res) => {
      if (input != undefined && input.length > 0) {
        let keyword = 0;
        if (
          res.description.indexOf(input) >= 0 ||
          res.title.indexOf(input) >= 0
        ) {
          keyword = 1;
        }
        if (keyword > 0) {
          if (category.length > 0 && level.length > 0) {
            if (res.category == category && res.level == level) {
              courses.push(res);
            }
          } else if (category.length > 0) {
            if (res.category == category) {
              courses.push(res);
            }
          } else if (level.length > 0) {
            if (res.level == level) {
              courses.push(res);
            }
          } else {
            courses.push(res);
          }
        }

        document.querySelector("h1.result").textContent = input;
      } else {
        if (category.length > 0 && level.length > 0) {
          if (res.category == category && res.level == level) {
            courses.push(res);
          }
        } else if (category.length > 0) {
          if (res.category == category) {
            courses.push(res);
          }
        } else if (level.length > 0) {
          if (res.level == level) {
            courses.push(res);
          }
        } else {
          courses.push(res);
        }
      }
    });

    courses.map((course) => {
      let icon = "junior.png";
      if (course.level == "senior") {
        icon = "senior.png";
      }
      if (courses.length > 0) {
        html += `
            <div class="col-md-4" id="course">
                <div class="mt-4 card shadow">
                    <img src="/assets/images/${course.img}" class="card-img-top" alt="Ini gambar course 1">
                    <label for="label" class="label">${course.category}</label>
                    <div class="card-body">
                        <h5 class="title">${course.title}</h5>
                        <h5 class="category"><img src="/assets/icons/${icon}" alt=""> ${course.level}</h5>
                        <p class="description mt-3 mb-5">${course.description}</p>
                        <div class="d-flex text-center justify-content-center">
                            <a href="#" class="btn bgr-primary me-2 px-3 py-2"><i class="fas fa-star"></i>
                                ${course.feature.rating}</a>
                            <a href="#" class="btn bgr-primary me-2 px-4 py-2"><i class="fas fa-user"></i>
                                ${course.feature.users}</a>
                            <a href="#" class="btn bgr-primary px-4 py-2">Umur ${course.feature.age}+</a>
                        </div>
                        <div class="d-grid gap-2 mt-3">
                            <a class="btn bgr-alternatif" href="/pages/detail-course.html?id=${course.id}">Bergabung </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
      }
    });

    document.querySelector("#fromData").innerHTML = courses.length;
    document.querySelector(".kursus").innerHTML =
      html == "" ? '<h3 class="text-center mb-3">Data Not Found</h3>' : html;
  });
}

document.querySelector(".paginate").addEventListener("change", function () {
  getCoursesAll(this.value);
});

function getCoursesAll(pagination = 6) {
  fetchData("course").then((response) => {
    let i = 1;
    let html = "";

    response.map((res) => {
      let icon = "junior.png";
      if (res.level == "senior") {
        icon = "senior.png";
      }

      if (i <= pagination) {
        html += `
          <div class="col-md-4" id="course">
              <div class="mt-4 card shadow">
                  <img src="/assets/images/${res.img}" class="card-img-top" alt="Ini gambar course 1">
                  <label for="label" class="label">${res.category}</label>
                  <div class="card-body">
                      <h5 class="title">${res.title}</h5>
                      <h5 class="category"><img src="/assets/icons/${icon}" alt=""> ${res.level}</h5>
                      <p class="description mt-3 mb-5">${res.description}</p>
                      <div class="d-flex text-center justify-content-center">
                          <a href="#" class="btn bgr-primary me-2 px-3 py-2"><i class="fas fa-star"></i>
                              ${res.feature.rating}</a>
                          <a href="#" class="btn bgr-primary me-2 px-4 py-2"><i class="fas fa-user"></i>
                              ${res.feature.users}</a>
                          <a href="#" class="btn bgr-primary px-4 py-2">Umur ${res.feature.age}+</a>
                      </div>
                      <div class="d-grid gap-2 mt-3">
                          <a class="btn bgr-alternatif" href="/pages/detail-course.html?id=${res.id}">Bergabung </a>
                      </div>
                  </div>
              </div>
          </div>
      `;
      }
      i++;
    });

    document.querySelector("#courses").innerHTML = html;
    document.querySelector("#fromData").innerHTML = response.length;
  });
}
