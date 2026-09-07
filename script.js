// =====================================
// LEMON CLIPS
// ANIMAÇÕES E INTERAÇÕES
// =====================================


// =====================================
// REVEAL AO ROLAR A PÁGINA
// =====================================

const elementosReveal =
document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

  const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "reveal-visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -30px 0px"
    }
  );


  elementosReveal.forEach(elemento => {

    observer.observe(
      elemento
    );

  });

} else {

  // Caso o navegador não suporte IntersectionObserver,
  // o conteúdo continua visível.

  elementosReveal.forEach(elemento => {

    elemento.classList.add(
      "reveal-visible"
    );

  });

}


// =====================================
// GARANTIA DE VISIBILIDADE
// =====================================

// Isso impede que algum erro de animação
// deixe a página inteira invisível.

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        elementosReveal.forEach(elemento => {

          const opacity =
          window.getComputedStyle(
            elemento
          ).opacity;


          if (
            opacity === "0"
          ) {

            elemento.classList.add(
              "reveal-visible"
            );

          }

        });

      },
      1200
    );

  }
);


// =====================================
// PARALLAX DAS LOGOS DE FUNDO
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


    const creatorLogo =
    document.querySelector(
      ".creator-background"
    );


    if (creatorLogo) {

      creatorLogo.style.transform =
      `translateY(${scroll * 0.03}px)`;

    }

  }
);


// =====================================
// EFEITO SUAVE NO CELULAR
// =====================================

const device =
document.querySelector(
  ".hero-phone"
);


if (device) {

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
      ) * 8;


      const y =
      (
        event.clientY /
        window.innerHeight -
        0.5
      ) * 8;


      device.style.setProperty(
        "--mouse-x",
        `${x}px`
      );


      device.style.setProperty(
        "--mouse-y",
        `${y}px`
      );

    }
  );

}


// =====================================
// NAVBAR AO ROLAR
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
      window.scrollY > 40
    ) {

      navbar.classList.add(
        "navbar-scrolled"
      );

    }

    else {

      navbar.classList.remove(
        "navbar-scrolled"
      );

    }

  }
);


// =====================================
// CONTADOR DE VISUALIZAÇÕES
// =====================================

const viewCounter =
document.getElementById(
  "viewCounter"
);


if (viewCounter) {

  let views =
  248420;


  setInterval(
    () => {

      const aumento =
      Math.floor(
        Math.random() * 12
      ) + 1;


      views +=
      aumento;


      viewCounter.textContent =
      views.toLocaleString(
        "pt-BR"
      );

    },
    2500
  );

}


// =====================================
// EFEITO SUAVE NOS BOTÕES
// =====================================

const botoes =
document.querySelectorAll(
  ".btn-primary, .btn-secondary, .nav-download"
);


botoes.forEach(botao => {

  botao.addEventListener(
    "mouseenter",
    () => {

      botao.classList.add(
        "button-hover"
      );

    }
  );


  botao.addEventListener(
    "mouseleave",
    () => {

      botao.classList.remove(
        "button-hover"
      );

    }
  );

});


// =====================================
// SCROLL SUAVE PARA LINKS INTERNOS
// =====================================

document.querySelectorAll(
  'a[href^="#"]'
).forEach(link => {

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


      if (elemento) {

        event.preventDefault();


        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }
  );

});


// =====================================
// LOG
// =====================================

console.log(
  "🍋 Lemon Clips carregado com sucesso!"
);
