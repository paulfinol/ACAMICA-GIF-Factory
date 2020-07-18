/* Fetch function for all scnearios*/
function fetch_Function(input, type, m) {
    let var1 = 'https://api.giphy.com/v1/gifs/search';
    let var3 = '&api_key=3X1URnx87gxU6WY3iQhmh9eK7imOYvLi';
    let var4;
    let var5 = "";

    switch (type) {
        case "autocomplete":
            var2 = `/tags?q=${input}`;
            var4 = "";
            break;
        default:
            var2 = `?q=${input}`;
            var4 = '&limit=20';
    }
    let found = fetch(var1 + var2 + var3 + var4 + var5)
        .then(response => {
            return response.json();
        })
        .then(GIF => {
            return choose_GIF(GIF, type, m, input);
        })
        .catch(error => {
            return error;
        });
    return found;
}

/* choose between with or without ver mas button*/
function choose_GIF(GIF, mode, m, input) {

    let section1 = "container_suggested";
    let section2 = "container_trend";
    const limit = GIF.data.length;
    switch (mode) {
        case "autocomplete":
            if (GIF.data.length > 0) {
                create_search_values(GIF);
            }
            break;
        case "sugg":
            let alt = GIF.data[m].title;
            let src = GIF.data[m].images.original.url;
            let width = GIF.data[m].images.original.width;
            create_GIF(section1, m, alt, src, width);
            create_GIF_extra(m, input);
            break;
        default:
            document.getElementById(`Trend`).appendChild(document.createElement("div")).id = `container_trend`;
            for (let i = 5; i < limit; i++) {
                let alt = GIF.data[i].title;
                let src = GIF.data[i].images.original.url;
                let width = GIF.data[i].images.original.width;
                create_GIF(section2, i, alt, src, width);
                create_GIF_extra2(i, alt);
                document.querySelector("#Trend div.text2 p").innerHTML = input;
            }
            break;
    }
    return section1;
}

/* Create GIF without ver mas button*/
function create_GIF(section, i, alt, src, width) {
    document.getElementById(section).appendChild(document.createElement("div")).id = `gif${i}`;
    document.getElementById(`gif${i}`).appendChild(document.createElement("div")).id = `gif_img${i}`;
    document.getElementById(`gif_img${i}`).appendChild(document.createElement("img")).id = `img_sug${i}`;
    document.getElementById(`img_sug${i}`).setAttribute(`alt`, alt);
    document.getElementById(`img_sug${i}`).setAttribute(`src`, src);
    document.getElementById(`img_sug${i}`).setAttribute("onmouseover", "showtag(event)");
    document.getElementById(`img_sug${i}`).setAttribute("onmouseout", "hidetag(event)");
    /* span 2 for larger picture*/
    if ((parseInt(width) > 490) && (section == "container_trend")) {
        document.getElementById(`gif${i}`).classList.add("span2");
    }
}

/* Create GIF with ver mas button for suggested GIF*/
function create_GIF_extra(i, input) {
    document.getElementById(`gif${i}`).appendChild(document.createElement("div")).id = `gif_title${i}`;
    document.getElementById(`gif_title${i}`).appendChild(document.createElement("p")).innerHTML = input;
    document.getElementById(`gif_title${i}`).appendChild(document.createElement("object")).id = `gif_close${i}`;
    document.getElementById(`gif_close${i}`).setAttribute(`data`, `./images/close.svg`);
    document.getElementById(`gif_close${i}`).setAttribute(`type`, `image/svg+xml`);
    document.getElementById(`gif_img${i}`).appendChild(document.createElement("div")).id = `gif_button${i}`;
    document.getElementById(`gif_button${i}`).appendChild(document.createElement("button")).id = `button_text${i}`;
    document.getElementById(`button_text${i}`).setAttribute(`type`, `button`);
    document.getElementById(`button_text${i}`).appendChild(document.createElement("p")).className = `Ver_Mas${i}`;
    document.getElementsByClassName(`Ver_Mas${i}`)[0].innerHTML = `Ver Mas`;
    document.getElementsByClassName(`Ver_Mas${i}`)[0].addEventListener('click', suggested_search_function);
}

/* hoover title for trend GIFs*/
function create_GIF_extra2(i, alt) {
    document.getElementById(`gif_img${i}`).appendChild(document.createElement("div")).id = `gif_title${i}`;
    document.getElementById(`gif_title${i}`).appendChild(document.createElement("p")).innerHTML = alt;
}