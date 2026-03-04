document.addEventListener("DOMContentLoaded", function () {
  var revealElements = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var button = item.querySelector(".faq-question");
    if (!button) return;

    button.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      faqItems.forEach(function (i) {
        i.classList.remove("open");
      });
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });

  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var button = contactForm.querySelector('button[type="submit"]');
      if (!button) return;

      var originalText = button.textContent;
      button.textContent = "Sent — check your email shortly";
      button.disabled = true;

      setTimeout(function () {
        button.textContent = originalText;
        button.disabled = false;
        contactForm.reset();
      }, 2600);
    });
  }
});
