// =====================================
// LEMON CLIPS
// ANIMAÇÕES E INTERAÇÕES
// =====================================


// =====================================
// REVEAL AO ROLAR A PÁGINA
// =====================================

const elementos = document.querySelectorAll(`
  .reveal,
  .feature-card,
  .creator-text,
  .creator-cards,
  .monetization-content,
  .laptop,
  .download-box
`);


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add(
          "show"
        );

        observer.unobserve(
          entry.target
        );

      }

    });

  },
  {
    threshold: 0.12
  }
);


// Esconde os elementos apenas depois
// que o JavaScript estiver carregado
elementos.forEach(elemento => {

  elemento.style.opacity = "0";

  elemento.style.transform =
    "translateY(35px)";

  elemento.style.transition =
    "opacity 0.8s ease, transform 0.8s ease";


  observer.observe(
    elemento
  );

});


// =====================================
// QUANDO APARECE NA TELA
// =====================================

const revealObserver = new MutationObserver(() => {

  document
    .querySelectorAll(".show")
    .forEach(elemento => {

      elemento.style.opacity = "1";

      elemento.style.transform =
        "translateY(0)";

    });

});


revealObserver.observe(
  document.body,
  {
    subtree: true,
    attributes: true,
    attributeFilter: ["class"]
  }
);


// =====================================
// PARALLAX NO BACKGROUND
// =====================================

window.addEventListener(
  "scroll",
  () => {

    const scroll =
      window.scrollY;


    const logo =
      document.querySelector(
        ".background-logo"
      );


    if (logo) {

      logo.style.transform =
        `translateY(${scroll * 0.05}px)`;

    }


    const monetizationBg =
      document.querySelector(
        ".monetization-bg"
      );


    if (monetizationBg) {

      monetizationBg.style.transform =
        `translateY(${scroll * 0.03}px)`;

    }

  },
  {
    passive: true
  }
);


// =====================================
// EFEITO DO MOUSE NO CELULAR
// =====================================

const heroPhone =
  document.querySelector(
    ".hero-phone"
  );


if (heroPhone) {

  document.addEventListener(
    "mousemove",
    event => {

      if (
        window.innerWidth < 900
      ) {

        return;

      }


      const x =
        (
          event.clientX /
          window.innerWidth -
          0.5
        ) * 10;


      const y =
        (
          event.clientY /
          window.innerHeight -
          0.5
        ) * 10;


      heroPhone.style.transform =
        `translate(${x}px, ${y}px)`;

    }
  );

}


// =====================================
// RESET DO CELULAR
// =====================================

window.addEventListener(
  "mouseout",
  event => {

    if (
      !event.relatedTarget &&
      heroPhone
    ) {

      heroPhone.style.transform =
        "translate(0, 0)";

    }

  }
);


// =====================================
// NAVBAR
// =====================================

const navbar =
  document.querySelector(
    ".navbar"
  );


window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;


    if (
      window.scrollY > 50
    ) {

      navbar.style.background =
        "rgba(3,3,3,0.88)";


      navbar.style.backdropFilter =
        "blur(18px)";


      navbar.style.borderBottom =
        "1px solid rgba(255,229,0,0.10)";

    }

    else {

      navbar.style.background =
        "rgba(3,3,3,0.78)";


      navbar.style.backdropFilter =
        "blur(15px)";


      navbar.style.borderBottom =
        "1px solid rgba(255,255,255,0.06)";

    }

  },
  {
    passive: true
  }
);


// =====================================
// EFEITO NOS BOTÕES
// =====================================

const botoes =
  document.querySelectorAll(
    ".btn-primary, .btn-secondary, .nav-download"
  );


botoes.forEach(botao => {

  botao.addEventListener(
    "mouseenter",
    () => {

      botao.style.letterSpacing =
        "1px";

    }
  );


  botao.addEventListener(
    "mouseleave",
    () => {

      botao.style.letterSpacing =
        "";

    }
  );

});


// =====================================
// CONTADOR DE VISUALIZAÇÕES
// =====================================

const contador =
  document.getElementById(
    "viewCounter"
  );


if (contador) {

  let valor =
    248420;


  let aumentando =
    true;


  setInterval(
    () => {

      if (aumentando) {

        valor +=
          Math.floor(
            Math.random() * 90
          ) + 10;

      }

      else {

        valor -=
          Math.floor(
            Math.random() * 50
          ) + 5;

      }


      if (
        valor >= 252000
      ) {

        aumentando =
          false;

      }


      if (
        valor <= 248420
      ) {

        aumentando =
          true;

      }


      contador.textContent =
        valor.toLocaleString(
          "pt-BR"
        );

    },
    1200
  );

}


// =====================================
// SCROLL SUAVE PARA LINKS INTERNOS
// =====================================

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const destino =
          link.getAttribute(
            "href"
          );


        if (
          !destino ||
          destino === "#"
        ) {

          return;

        }


        const elemento =
          document.querySelector(
            destino
          );


        if (!elemento) {

          return;

        }


        event.preventDefault();


        elemento.scrollIntoView(
          {
            behavior:
              "smooth",
            block:
              "start"
          }
        );

      }
    );

  });


// =====================================
// LOG
// =====================================

console.log(
  "🍋 Lemon Clips carregado com sucesso!"
);
