const API_HOME = "https://raw.githubusercontent.com/lucx-albx/Json_File/main/Home/home.json"
const API_XML = "https://raw.githubusercontent.com/lucx-albx/Json_File/main/XML/testo_xml.json"
const API_JSA = "https://raw.githubusercontent.com/lucx-albx/Json_File/main/JavaScript_Avanzato/testo_js_avanzato.json"
const API_REACT = "https://raw.githubusercontent.com/lucx-albx/Json_File/main/React/testo_react.json"
const API_JSON = "https://raw.githubusercontent.com/lucx-albx/Json_File/main/JSON/testo_json.json"
const API_MONGODB = "https://raw.githubusercontent.com/lucx-albx/Json_File/main/MongoDb/testo_mongodb.json"

const carica_guida_home =()=>{
    let riferimento = document.querySelector(".ghome")
    let insert = ""

    fetch(API_HOME)
    .then((testo) => testo.json())
    .then((data)=>{

        data.map((elem, i)=>{
            if(elem.titolo === null && elem.sotto_titolo !== null){
                insert += `<h1 class="sub_tit d-flex justify-content-center mb-4 mt-4" data-aos="flip-right">${elem.sotto_titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            } else if (elem.titolo !== null && elem.sotto_titolo === null){
                insert += `<h1 class="tit d-flex justify-content-center mb-5" data-aos="fade-right">${elem.titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            }
        })

        riferimento.innerHTML = insert
    })
}

const carica_guida_xml =()=>{
    let riferimento = document.querySelector(".ghome")
    let insert = ""

    fetch(API_XML)
    .then((testo) => testo.json())
    .then((data)=>{

        data.map((elem, i)=>{
            if(elem.titolo === null && elem.sotto_titolo !== null){
                insert += `<h1 class="sub_tit d-flex justify-content-center mb-4 mt-4" data-aos="flip-right">${elem.sotto_titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            } else if (elem.titolo !== null && elem.sotto_titolo === null){
                insert += `<h1 class="tit d-flex justify-content-center mt-5 mb-5" data-aos="fade-right">${elem.titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            }

            if (elem.code !== null){
                insert += `<div class="row d-flex justify-content-center" data-aos="zoom-in-up">`
                insert += `<div class="code-editor col-xl-12 col-lg-12 col-11 mt-3 mb-3">`
                insert += `<div class="header">`
                insert += `<span class="title">ESEMPIO</span>`
                insert += `</div>`
                insert += `<div class="cpy fas fa-clipboard" onclick="copyCode(this)"></div>`
                insert += `<div class="editor-content">`
                insert += `<pre class="code_style"><code>${elem.code}</code></pre>`
                insert += `</div>`
                insert += `</div>`
                insert += `</div>`
            }
        })

        riferimento.innerHTML = insert
    })
}

const carica_guida_jsa =()=>{
    let riferimento = document.querySelector(".ghome")
    let insert = ""

    fetch(API_JSA)
    .then((testo) => testo.json())
    .then((data)=>{

        data.map((elem, i)=>{
            if(elem.titolo === null && elem.sotto_titolo !== null){
                insert += `<h1 class="sub_tit d-flex justify-content-center mb-4 mt-4" data-aos="flip-right">${elem.sotto_titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            } else if (elem.titolo !== null && elem.sotto_titolo === null){
                insert += `<h1 class="tit d-flex justify-content-center mt-5 mb-5" data-aos="fade-right">${elem.titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            }

            if (elem.code !== null){
                insert += `<div class="row d-flex justify-content-center" data-aos="zoom-in-up">`
                insert += `<div class="code-editor col-xl-12 col-lg-12 col-11 mt-3 mb-3">`
                insert += `<div class="header">`
                insert += `<span class="title">ESEMPIO</span>`
                insert += `</div>`
                insert += `<div class="cpy fas fa-clipboard" onclick="copyCode(this)"></div>`
                insert += `<div class="editor-content">`
                insert += `<pre class="code_style"><code>${elem.code}</code></pre>`
                insert += `</div>`
                insert += `</div>`
                insert += `</div>`
            }
        })

        riferimento.innerHTML = insert
    })
}

const carica_guida_json =()=>{
    let riferimento = document.querySelector(".ghome")
    let insert = ""

    fetch(API_JSON)
    .then((testo) => testo.json())
    .then((data)=>{

        data.map((elem, i)=>{
            if(elem.titolo === null && elem.sotto_titolo !== null){
                insert += `<h1 class="sub_tit d-flex justify-content-center mb-4 mt-4" data-aos="flip-right">${elem.sotto_titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            } else if (elem.titolo !== null && elem.sotto_titolo === null){
                insert += `<h1 class="tit d-flex justify-content-center mt-5 mb-5" data-aos="fade-right">${elem.titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down" >${elem.corpo}</pre></div>`
            }

            if (elem.code !== null){
                insert += `<div class="row d-flex justify-content-center" data-aos="zoom-in-up">`
                insert += `<div class="code-editor col-xl-12 col-lg-12 col-11 mt-3 mb-3">`
                insert += `<div class="header">`
                insert += `<span class="title">ESEMPIO</span>`
                insert += `</div>`
                insert += `<div class="cpy fas fa-clipboard" onclick="copyCode(this)"></div>`
                insert += `<div class="editor-content">`
                insert += `<pre class="code_style"><code>${elem.code}</code></pre>`
                insert += `</div>`
                insert += `</div>`
                insert += `</div>`
            }
            
            if (elem.image !== null){
                insert += `<div class="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">`
                insert += `<img src='${elem.image}' alt="" class="img-fluid rounded">`
                insert += `</div>`
            }
        })

        riferimento.innerHTML = insert
    })
}

const carica_guida_react =()=>{
    let riferimento = document.querySelector(".ghome")
    let insert = ""

    fetch(API_REACT)
    .then((testo) => testo.json())
    .then((data)=>{

        data.map((elem, i)=>{
            if(elem.titolo === null && elem.sotto_titolo !== null){
                insert += `<h1 class="sub_tit d-flex justify-content-center mb-4 mt-4" data-aos="flip-right">${elem.sotto_titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            } else if (elem.titolo !== null && elem.sotto_titolo === null){
                insert += `<h1 class="tit d-flex justify-content-center mt-5 mb-5" data-aos="fade-right">${elem.titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            }
            
            if (elem.code !== null){
                for(let i = 0; i < elem.code.length; i++){
                    insert += `<div class="row d-flex justify-content-center" data-aos="zoom-in-up">`
                    insert += `<div class="code-editor col-xl-12 col-lg-12 col-11 mt-3 mb-3">`
                    insert += `<div class="header">`
                    insert += `<span class="title">ESEMPIO</span>`
                    insert += `</div>`
                    insert += `<div class="cpy fas fa-clipboard" onclick="copyCode(this)"></div>`
                    insert += `<div class="editor-content">`
                    insert += `<pre class="code_style"><code>${elem.code[i]}</code></pre>`
                    insert += `</div>`
                    insert += `</div>`
                    insert += `</div>`
                }
            }

            if (elem.image !== null){
                insert += `<div class="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">`
                insert += `<img src='${elem.image}' alt="" class="mt-3 img-fluid img-thumbnail">`
                insert += `</div>`
            }

            if (elem.link !== null){
                for(let i = 0; i < elem.link.length; i++){
                    insert += `<div class="row d-flex justify-content-center mt-5" data-aos="flip-up">`
                    insert += `<div class="col-xl-12 col-lg-12 col-11 Contenitore-Spiegazione d-flex">`
                    insert += `<pre class="cpoymode"><code class="purple" id="myInput">${elem.link[i]}</code></pre>`
                    insert += `<div onclick="copyCdn(this)" class="button-copy"><strong class="pad">Copy</strong> </div>`
                    insert += `</div>`
                    insert += `</div>`
                }
            }
        })

        riferimento.innerHTML = insert
    })
}

const carica_mongo_db =()=>{
    let riferimento = document.querySelector(".ghome")
    let insert = ""

    fetch(API_MONGODB)
    .then((testo) => testo.json())
    .then((data)=>{

        data.map((elem, i)=>{
            if(elem.titolo === null && elem.sotto_titolo !== null){
                insert += `<h1 class="sub_tit d-flex justify-content-center mb-4 mt-4" data-aos="flip-right">${elem.sotto_titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            } else if (elem.titolo !== null && elem.sotto_titolo === null){
                insert += `<h1 class="tit d-flex justify-content-center mt-5 mb-5" data-aos="fade-right">${elem.titolo}</h1>`
                insert += `<div class="contenitore-testo"><pre class="testo" data-aos="flip-down">${elem.corpo}</pre></div>`
            }
        })

        riferimento.innerHTML = insert
    })
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const copyCdn = async (el) => {
    try {
        const text = el.previousElementSibling.textContent;
        await navigator.clipboard.writeText(text);
        Toast.fire({
            icon: 'success',
            title: 'Testo copiato con successo!'
        })
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const copyCode = async (el) => {
    try {
        const text = el.nextSibling.textContent;
        await navigator.clipboard.writeText(text)
        Toast.fire({
            icon: 'success',
            title: 'Testo copiato con successo!'
        })
    } catch (err) {
        Toast.fire({
            icon: 'error',
            title: 'Nel copiare il testo è stato riscontrato un problema, riprovare'
        })
    }
}

const scrollToTop =()=> {
    const topElement = document.documentElement;
    topElement.scrollIntoView({
        behavior: 'smooth'
    })
}
