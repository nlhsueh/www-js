function go(li){
    let href = window.location.href,
        url = href.split("#");
    if (url.length == 1) url.push(li.title);
    else url[1] = li.title;
    window.location.href = url.join("#");
}