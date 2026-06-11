# arthurmarenga-portfolio

# 💻 Meu Portfólio Profissional - Arthur Marenga

Este é o repositório do meu portfólio profissional e pessoal, desenvolvido como estudante do primeiro período de **Ciência da Computação na CESAR School**. O grande e principal objetivo deste projeto é consolidar meus conhecimentos em desenvolvimento web (Front-end) e servir como uma vitrine para os meus futuros projetos acadêmicos e profissionais. 🎯

🌐 **Link do projeto online:** *?*

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica, acessível e validada pelos padrões W3C.
- **CSS3:** Estilização moderna utilizando Variáveis de Ambiente (`:root`), Flexbox e CSS Grid para layouts responsivos.
- **JavaScript (ES6+):** Manipulação dinâmica do DOM para alternância de temas e saudação baseada no horário local.
- **Git & GitHub:** Controle de versão distribuído e hospedagem do código-fonte.
- **Vercel:** Plataforma de Cloud Hosting para deploy contínuo integrado ao GitHub.

---

## 🌟 Funcionalidades e Recursos

1. **Saudação Dinâmica por Horário (`index.html`):** O JavaScript identifica a hora local do sistema do usuário e exibe uma saudação personalizada ("Bom dia! ☀️", "Boa tarde! 🌤️" ou "Boa noite! 🌙").

2. **Alternador de Tema (Dark/Light Mode):** Sistema completo de Modo Escuro e Claro integrado por meio de atributos customizados de CSS, persistindo a preferência do usuário no `localStorage`.

3. **Página "Sobre Mim" (`sobreeu.html`):** Layout estilo "postal" integrado com lista de competências técnicas, interesses de carreira e reprodutores de mídia oficiais do Apple Music limpos de atributos obsoletos.

4. **Galeria de Projetos (`projetosmeus.html`):** Uma malha construída com CSS Grid, contendo cartões semânticos (`<article>`) para listar projetos acadêmicos de programação.

---

##Histórico de Versões:

### 🟠 Versão 1.0.0 - Estrutura Base:

- **`feat: estrutura inicial e páginas base`**: Criação dos arquivos HTML fundamentais (`index.html`, `sobreeu.html`, `projetosmeus.html`) estabelecendo a navegação do menu global.
  
- **`feat: estilização responsiva e identidade visual`**: Desenvolvimento do arquivo `style.css`, configurando o reset de margens, layout flexível (Flexbox) para o cabeçalho e o rodapé além da paleta de cores padrão.

### 🟠 Versão 1.1.0 - Interatividade e Temas:

- **`feat: implementação do dark mode e persistência`**: Inclusão da lógica em JavaScript (`script.js`) para alternar as classes de tema visual e salvar a preferência do usuário no `localStorage` do navegador.
  
- **`feat: saudação inteligente baseada no horário`**: Adicionado script na Home que lê o horário local do sistema para saudar o visitante dinamicamente (Bom dia/Boa tarde/Boa noite).

### 🟠 Versão 1.2.0 - Refatoração Semântica e Ajustes Finais:

- **`fix: validação oficial W3C e eliminação de erros`**: Correção de inconformidades apontadas pelo *Markup Validation Service* na página Sobre Mim. Remoção do atributo obsoleto `frameborder` nos iframes, substituição de seções vazias por blocos `div` e correção da hierarquia de títulos (`h3` para `h2`).
  
- **`docs: documentação completa do repositório`**: Escrita e consolidação deste arquivo `README.md` detalhando as tecnologias, estrutura de pastas e histórico de versionamento para fins de avaliação acadêmica.

---

## 📁 Estrutura do Repositório

```text
├── index.html          # Página Inicial (Home)
├── sobreeu.html        # Quem sou eu
├── projetosmeus.html   # Projetos feitos nesse período
├── style.css           # Estilos globais, reset e variáveis dinâmicas de tema
├── script.js           # Código inteligente do modo escuro e saudações horárias
├── fotoEu.png          # Minha foto de perfil
└── README.md           # Documentação completa do projeto (este arquivo)

