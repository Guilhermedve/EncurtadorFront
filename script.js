
const form = document.getElementById("form");
const input = document.getElementById("url");
const copy = document.getElementById("copy");
let resultadoCopy;
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const url = input.value;
    
    fetch("https://encurtadorlinks-production.up.railway.app/urls/shorten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalUrl: input.value })
    })
    .then(response => response.json())
    .then(data => {

    resultadoCopy =  document.getElementById("linkareaclick").setAttribute ("href", data.shortUrl);
document.getElementById("linkareaclick").innerText += "Link"
    })
    .catch(error => {
        console.error("Erro:", error);
    });
});
copy.addEventListener("click" ,  (resultadoCopy) => { 
    e.preventDefault();
    navigator.clipboard.writeText(resultadoCopy)
        .then(() => {
        const e = document.getElementById("linkcopiado")
        e.classList.add("appear")
            e.textContent += "Link Copiado 😎"
            
        })
        .catch(err => {
            console.error('Erro ao copiar o texto:', err);
        });

})

/* FAZER HISTORICO */