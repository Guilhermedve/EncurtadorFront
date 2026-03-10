const form = document.getElementById("form");
const input = document.getElementById("url");
const butao = document.getElementById("butao")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const url = input.value;

    fetch("http://localhost:8080/urls/shorten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalUrl: input.value })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultado").textContent = "URL encurtada: " + data.shortUrl;
    })
    .catch(error => {
        console.error("Erro:", error);
    });
});

butao.addEventListener("click", () => {
    console.log("cu")
})