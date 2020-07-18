window.addEventListener("click", function(event) {
    switch (event.target.id) {
        case "logo":
            window.location.assign("./index.html");
            break;
        case "migif_span":
            document.getElementById(`container_trend`).remove();
            document.getElementById("crear_GIF").classList.remove("show2");
            bring_mis_GIF();
            break;
        case "button_crear_GIF":
            window.location.assign("./crear_GIF.html");
            break;
        case "selectStylesheet":
        case "selectStylesheet2":
            document.getElementsByClassName("button2_theme")[0].classList.toggle("show");
            break;
        case "button_change_day":
            document.getElementById('pageStyle').setAttribute('href', './styles/styles_day.css');
            document.getElementById('logo').setAttribute('src', './images/gifOF_logo.png');
            document.getElementsByClassName("button2_theme")[0].classList.remove("show");
            break
        case "button_change_night":
            document.getElementById('pageStyle').setAttribute('href', './styles/styles_night.css');
            document.getElementById('logo').setAttribute('src', './images/gifOF_logo_dark.png');
            document.getElementsByClassName("button2_theme")[0].classList.remove("show");
            break
        default:
            document.getElementsByClassName("button2_theme")[0].classList.remove("show");
            break;
    }

})

/* choose between with or without ver mas button*/
function bring_mis_GIF() {
    document.getElementById(`Trend`).appendChild(document.createElement("div")).id = `container_trend`;
    for (let i = 0; i < localStorage.length; i++) {
        let alt = localStorage.key(i);
        let src = localStorage.getItem(localStorage.key(i));
        if (alt.substring(0, 3) === "GIF") {
            create_mis_GIF("container_trend", i, alt, src);
        }
    }
}

/* Create GIF without ver mas button*/
function create_mis_GIF(section, i, alt, src) {
    document.getElementById(section).appendChild(document.createElement("div")).id = `gif${i}`;
    document.getElementById(`gif${i}`).appendChild(document.createElement("div")).id = `gif_img${i}`;
    document.getElementById(`gif_img${i}`).appendChild(document.createElement("img")).id = `img_sug${i}`;
    document.getElementById(`img_sug${i}`).setAttribute(`alt`, alt);
    document.getElementById(`img_sug${i}`).setAttribute(`src`, src);
}