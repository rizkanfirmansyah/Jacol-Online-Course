async function fetchData(param) {
    let datas = []
    const response = await fetch("/database/db.json");
    const responses = await response.json();
    if (param != undefined) {
        datas = responses.data.filter((res) => res.group == param) 
    }else{
        datas = responses
    }
    return datas;
  }
