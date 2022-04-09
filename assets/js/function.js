async function fetchData(param) {
  let datas = [];
  const response = await fetch("/database/db.json");
  const responses = await response.json();
  if (param != undefined) {
    datas = responses.data.filter((res) => res.group == param);
  } else {
    datas = responses;
  }
  return datas;
}

fetchData("course").then((response) => {
  let i = 1;
  let html = "";

  response.map((res) => {
    if (res.category == "kursus") {
      let number = Math.floor(Math.random() * 9 + 1);
      html += `<div class="col-md-3 col-6">
                <a href="/pages/detail-course.html?id=${res.id}" class="text-decoration-none">
                    <div class="card border-0 bg-transparent">
                        <div class="row g-0">
                            <div class="col-md-2 mt-3">
                                <img src="/assets/icons/icon-pel-${number}.png"
                                    class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="title">${res.title}</h5>
                                    <p class="paragraph">${res.description.slice(0, 40)}...</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
    }
  });

  document.querySelector("#nav-courses").innerHTML = html;
});
