const form = document.querySelector("form")
form.addEventListener("submit", (e) =>{
    const nome = form.inNome.value
    e.preventDefault()
    alert(`Obrigado pela mensagem, ${nome}. Mas eu não sei como fazer para receber os dados do formulário! Infelizmente nunca vou saber qual mensagem você quis me enviar... Mas espero que seja algo legal :)`)
})