        function choose_panel_function() {
            document.getElementById('button_crear_GIF').click();
        }
        // Event handler for all buttons
        window.addEventListener("click", function(event) {
                console.log(event.target)
                switch (event.target.id) {
                    case "arrow":
                        window.location.assign("./index.html");
                        break;
                    case "logo":
                        window.location.assign("./index.html");
                        break;
                    case "close_GIF":
                    case "close_GIF2":
                        cancel_gif_function();
                        break;
                    case "migif_span":
                        window.location.assign("./mis_GIF.html");
                        break;
                    case "button_crear_GIF":
                        crear_guifos_panel_function();
                        document.getElementById("crear_GIF").classList.add("show2");
                        call_mis_GIF();
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
            //First GIF record Panel
        function crear_guifos_panel_function() {
            //container
            document.getElementById('crear_GIF').innerHTML = "";
            document.getElementById('crear_GIF').appendChild(document.createElement("div")).className = "confirm_crear_GIF";
            //obj
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("object")).id = "window_object";
            document.getElementById('window_object').setAttribute(`data`, `./images/window img.png`);
            document.getElementById('window_object').setAttribute(`type`, `image/svg+xml`);
            //h6
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("h6")).innerHTML = "Aqui podras crear tus propios guifos";
            //title
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("div")).className = "confirm_crear_GIF_title";
            document.getElementsByClassName('confirm_crear_GIF_title')[0].appendChild(document.createElement("p")).innerHTML = "Crear Guifos";
            //div
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("div")).className = "GIF_instruc";
            document.getElementsByClassName('GIF_instruc')[0].appendChild(document.createElement("p")).innerHTML = "Crear tu" + " <span>" + "guifo" + "</span>" + " es muy facil, graba cualquier imagen con tu camara y obten guifos personalizados. Los pasos para crear tu guifo son:";
            document.getElementsByClassName('GIF_instruc')[0].appendChild(document.createElement("p")).innerHTML = " <span>1)</span> Dar permisos de acceso a la camara (solo por el tiempo de uso)";
            document.getElementsByClassName('GIF_instruc')[0].appendChild(document.createElement("p")).innerHTML = "<span>2)</span> Capturar tu momento guifo";
            document.getElementsByClassName('GIF_instruc')[0].appendChild(document.createElement("p")).innerHTML = "<span>3)</span> Revisar el momento ";
            document.getElementsByClassName('GIF_instruc')[0].appendChild(document.createElement("p")).innerHTML = "<span>4)</span> Listo para subir y compartir!";
            document.getElementsByClassName('GIF_instruc')[0].appendChild(document.createElement("p")).innerHTML = "¿Quieres comenzar a crear tu <span>guifo</span> ahora?</span>";
            //buttom
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("button")).className = "buton_cancelar";
            document.getElementsByClassName('buton_cancelar')[0].innerHTML = "Cancelar";
            document.getElementsByClassName('buton_cancelar')[0].addEventListener('click', cancel_gif_function);
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("button")).className = "buton_comenzar";
            document.getElementsByClassName('buton_comenzar')[0].innerHTML = "Comenzar";
            document.getElementsByClassName('buton_comenzar')[0].addEventListener('click', stream_video);
        }

        //Function for Cancel and Listo buttons
        function cancel_gif_function() {
            document.getElementById('migif_span').click()
        }

        // Variable for GIF capture
        var recorder;
        var GIF_video;
        var image;
        var GIF_link;
        var video;

        //Open camera fucntion
        function captureCamera(callback) {
            navigator.mediaDevices.getUserMedia({
                video: true,
                video: {
                    width: 772,
                    height: 434
                }
            }).then(function(camera) {
                callback(camera);
            }).catch(function(error) {
                alert('Unable to capture your camera. Please check console logs.');
                console.error(error);
                document.getElementById('button_crear_GIF').click()
            });
        }

        //call capture function and create record panel
        var stream_video = function() {
            // llama funcion de captura de GIF y asigna evento para llamar proxima ventana
            video = video_panel_function();
            // get user media
            captureCamera(function(camera) {
                video.srcObject = camera;
                video.play();
            });
        };

        //Second GIF record Panel
        function video_panel_function() {
            //container
            document.getElementById('crear_GIF').innerHTML = "";
            document.getElementById('crear_GIF').appendChild(document.createElement("div")).className = "confirm_crear_GIF phase2";
            //video
            document.getElementsByClassName('confirm_crear_GIF phase2')[0].appendChild(document.createElement("video")).className = "video";
            //title
            document.getElementsByClassName('confirm_crear_GIF phase2')[0].appendChild(document.createElement("div")).className = "confirm_crear_GIF_title";
            document.getElementsByClassName('confirm_crear_GIF phase2')[0].appendChild(document.createElement("img")).id = "close_GIF";
            document.getElementById('close_GIF').setAttribute(`src`, `./images/button3.svg`);
            document.getElementsByClassName('confirm_crear_GIF_title')[0].appendChild(document.createElement("p")).innerHTML = "Un chequeo antes de empezar";
            //buttom
            document.getElementsByClassName('confirm_crear_GIF phase2')[0].appendChild(document.createElement("button")).className = "buton_comenzar capturar";
            document.getElementsByClassName('buton_comenzar capturar')[0].innerHTML = "Capturar";
            document.getElementsByClassName('capturar')[0].addEventListener('click', record_gif_function);
            document.getElementsByClassName('confirm_crear_GIF phase2')[0].appendChild(document.createElement("button")).className = "buton_comenzar camera";
            document.getElementsByClassName('buton_comenzar camera')[0].appendChild(document.createElement("object")).id = "camera_object";
            document.getElementById('camera_object').setAttribute(`data`, `./images/camera.svg`);
            document.getElementById('camera_object').setAttribute(`type`, `image/svg+xml`);
            document.getElementsByClassName('camera')[0].addEventListener('click', record_gif_function);
            return document.getElementsByClassName('video')[0];
        }

        // funcion para empezar a grabar
        function record_gif_function() {
            video.pause();
            video.srcObject = null;
            // llama funcion de cmbio de boton y asigna evento para llamar proxima ventana
            record_panel_function();
            image = document.getElementById('img');
            captureCamera(function(camera) {
                recorder = RecordRTC(camera, {
                    type: 'gif',
                    frameRate: 1,
                    quality: 1,
                    width: 772,
                    hidden: 240,
                    onGifRecordingStarted: function() {
                        console.log('Gif recording started.');
                    },
                    onGifPreview: function(gifURL) {
                        image.src = gifURL;
                    }
                });
                recorder.startRecording();
                recorder.camera = camera;
            });
        };

        //Third GIF record Panel
        function record_panel_function() {
            document.getElementsByClassName('capturar')[0].removeEventListener('click', record_gif_function);
            document.getElementsByClassName('camera')[0].removeEventListener('click', record_gif_function);
            document.getElementsByClassName('confirm_crear_GIF phase2')[0].firstElementChild.outerHTML = "<img id=img>"
            document.querySelector('.confirm_crear_GIF_title > p:nth-child(1)').innerHTML = "Capturando tu Guifo";
            document.getElementsByClassName('buton_comenzar capturar')[0].className = "buton_comenzar capturar button_listo";
            document.getElementsByClassName('buton_comenzar capturar button_listo')[0].innerHTML = "Listo";
            document.getElementsByClassName('button_listo')[0].addEventListener('click', save_gif_function);
            document.getElementsByClassName('buton_comenzar camera')[0].className = "buton_comenzar camera button_listo";
            document.getElementsByClassName('camera button_listo')[0].addEventListener('click', save_gif_function);
            document.getElementById('camera_object').setAttribute(`data`, `./images/recording.svg`);
        }

        // funcion para terminar grabacion
        function stopRecordingCallback() {
            GIF_video = recorder.getBlob();
            let tracks = recorder.camera.getTracks();
            tracks.forEach(function(track) {
                track.stop();
            });
            image.src = URL.createObjectURL(GIF_video);
            recorder.destroy();
            recorder = null;
        }

        function save_gif_function() {
            // llama funcion de cmbio de boton y asigna evento para llamar proxima ventana
            final_panel_function();
            recorder.stopRecording(stopRecordingCallback);
        }

        //Fourth GIF record Panel
        function final_panel_function() {
            document.getElementsByClassName('button_listo')[0].removeEventListener('click', save_gif_function);
            document.querySelector('.confirm_crear_GIF_title > p:nth-child(1)').innerHTML = "Vista Previa";
            document.getElementsByClassName('buton_comenzar capturar button_listo')[0].className = "buton_comenzar Subir_Gifo";
            document.getElementsByClassName('buton_comenzar Subir_Gifo')[0].innerHTML = "Subir Gifo";
            document.getElementsByClassName('buton_comenzar camera button_listo')[0].className = "buton_cancelar Repetir_Captura";
            document.getElementsByClassName('buton_cancelar Repetir_Captura')[0].innerHTML = "Repetir Captura";
            document.getElementsByClassName('Subir_Gifo')[0].addEventListener('click', subir_GIF_function);
            document.getElementsByClassName('buton_cancelar Repetir_Captura')[0].addEventListener('click', stream_video);
        }

        // funcion para subir GIF a pagina
        function subir_GIF_function() {
            let form = new FormData();
            form.append('file', GIF_video, 'myGif.gif');
            let GIF_preview = URL.createObjectURL(GIF_video);
            summary_panel_function(GIF_preview);
            POST_GIF_function(form);
        }

        // POST function to GIPHY
        function POST_GIF_function(form) {
            fetch('https://upload.giphy.com/v1/gifs?api_key=3X1URnx87gxU6WY3iQhmh9eK7imOYvLi', {
                    method: 'POST',
                    body: form,
                })
                .then(response => {
                    return response.json();
                })
                .then(info => {
                    GIF_id = info.data.id;
                    readFile(GIF_video, GIF_id);
                    return (GIF_id);
                })
                .catch(function(err) {
                    console.error(err);
                });
        }

        //transform video to dataurl to save in localstorage
        function readFile(file, link) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                localStorage.setItem(("GIF" + link), reader.result);
            };
            reader.onerror = function() {
                console.log(reader.error);
            };
        }
        //Last GIF record Panel
        function summary_panel_function(preview) {
            //container
            document.getElementById('crear_GIF').innerHTML = "";
            document.getElementById('crear_GIF').appendChild(document.createElement("div")).className = "confirm_crear_GIF";
            //img
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("img")).className = "previewimg";
            document.getElementsByClassName('previewimg')[0].src = preview;
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("p")).className = "text_preview";
            document.getElementsByClassName('text_preview')[0].innerHTML = "Guifo creado con exito";
            //title
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("div")).className = "confirm_crear_GIF_title";
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("img")).id = "close_GIF2";
            document.getElementById('close_GIF2').setAttribute(`src`, `./images/button3.svg`);
            document.getElementsByClassName('confirm_crear_GIF_title')[0].appendChild(document.createElement("p")).innerHTML = "Guifo Subido Con Éxito";
            //buttom
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("button")).className = "buton_cancelar copiar";
            document.getElementsByClassName('buton_cancelar copiar')[0].innerHTML = "Copiar Enlace Guifo";
            document.getElementsByClassName('copiar')[0].addEventListener('click', copiar_function);
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("button")).className = "buton_cancelar descargar";
            document.getElementsByClassName('buton_cancelar descargar')[0].innerHTML = "Descargar Guifo";
            document.getElementsByClassName('descargar')[0].addEventListener('click', function() {
                invokeSaveAsDialog(GIF_video);
            })
            document.getElementsByClassName('confirm_crear_GIF')[0].appendChild(document.createElement("button")).className = "buton_comenzar listo2";
            document.getElementsByClassName('buton_comenzar listo2')[0].innerHTML = "Listo";
            document.getElementsByClassName('listo2')[0].addEventListener('click', cancel_gif_function);
        }

        //Copy function to get GIPHY link
        function copiar_function() {
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = "https://giphy.com/gifs/" + GIF_id;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
        }

        /* choose between with or without ver mas button*/
        function call_mis_GIF() {
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