document.addEventListener("DOMContentLoaded", () => {
    const saudacaoElemento = document.getElementById("saudacao");
    const gifElemento = document.getElementById("banner-gif");
    
    const gifBomDia = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHBuMTlxZnR0MWtqbGNhaWV4ZDJnNGlyNjI4cHNiNnpkNTBkNm43OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ltCHY2Fk0mROyCf8kD/giphy.gif";
    const gifTardeNoite = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHh5dDE5b212ODJmbGIydXk4cjlqcmlvOWxodXo4NHFmaTZ2cjVlZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Awrr0bMfjknuM/giphy.gif"; 
    
    if (saudacaoElemento) {
        const horaAtual = new Date().getHours();
        let textoSaudacao = "";

        if (horaAtual >= 5 && horaAtual < 12) {
            textoSaudacao = "☀️ Bom dia, Desconhecido! ☀️";
            if (gifElemento) gifElemento.src = gifBomDia;
        } else if (horaAtual >= 12 && horaAtual < 18) {
            textoSaudacao = "🌤️ Boa tarde, Desconhecido! 🌤️";
            if (gifElemento) gifElemento.src = gifTardeNoite;
        } else {
            textoSaudacao = "🌙 Boa noite, Desconhecido! 🌙";
            if (gifElemento) gifElemento.src = gifTardeNoite;
        }
        
        saudacaoElemento.textContent = textoSaudacao;
    }

    const btnTema = document.getElementById("theme-toggle");
    
    const temaSalvo = localStorage.getItem("tema") || "light";
    document.documentElement.setAttribute("data-theme", temaSalvo);
    atualizarBotaoTema(temaSalvo);

    btnTema.addEventListener("click", () => {
        const temaAtual = document.documentElement.getAttribute("data-theme");
        const novoTema = temaAtual === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", novoTema);
        localStorage.setItem("tema", novoTema);
        atualizarBotaoTema(novoTema);
    });

    function atualizarBotaoTema(tema) {
        btnTema.textContent = tema === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    }
});
