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
