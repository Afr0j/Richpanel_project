const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';

  setTimeout(() => {
    signupForm.style.opacity = 0;
    loginForm.style.opacity = 1;
  }, 10);
});

signupLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';

  setTimeout(() => {
    loginForm.style.opacity = 0;
    signupForm.style.opacity = 1;
  }, 10);
});

jQuery.noConflict();
(function ($) {
  $(function () {
    var toggleSwitch = $("#js-pricing-switch input");

    (function () {
      $(toggleSwitch).change(function () {
        // Change prices for plans
        togglePriceContent();

        // Toggle monthly/yearly style
        $(".js-switch-label-monthly, .js-switch-label-yearly").toggleClass(
          "active"
        );
      });
    })();

    function togglePriceContent() {
      if ($(toggleSwitch).is(":checked") === true) {
        // if toggle is yearly
        $(".js-toggle-price-content").each(function () {
          $(this).html($(this).data("price-yearly"));
        });
      } else {
        // if toggle is monthly
        $(".js-toggle-price-content").each(function () {
          $(this).html($(this).data("price-monthly"));
        });
      }
    }
  });
})(jQuery);

window.odometerOptions = {
  duration: 400
};
