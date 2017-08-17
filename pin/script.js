jQuery(document).ready($ => {
  $(document).ready(() => {
    // let pin = (+!![] + []) + (!+[] + !![] + []) + (!+[] + !![] + !![] + []) + (!+[] + !![] + !![] + !![] + []);

    let pin = 1234;

    // let pin = document.getElementById("userInput").value;

    let enterCode = "";
    enterCode.toString();

    $("#numbers button").click(function() {

      let clickedNumber = $(this).text().toString();
      enterCode += clickedNumber;
      let lengthCode = parseInt(enterCode.length);
      lengthCode--;
      $(`#fields .numberfield:eq(${lengthCode})`).addClass("active");

      if (lengthCode == 3) {

        // Check the PIN
        if (enterCode == pin) {
          // Right PIN!
          $("#fields .numberfield").addClass("right");
          $("#numbers").addClass("hide");
          $("#breadsticks p").html("<input type='button' class='continue' value= 'Continue'>");

        } else {
          // Wrong PIN!
          $("#fields").addClass("miss");
          enterCode = "";
          setTimeout(() => {
            $("#fields .numberfield").removeClass("active");
          }, 200);
          setTimeout(() => {
            $("#fields").removeClass("miss");
          }, 500);

        }

      } else {}

    });
    
    $("#restartbtn").click(() => {
      enterCode = "";
      $("#fields .numberfield").removeClass("active");
      $("#fields .numberfield").removeClass("right");
      $("#numbers").removeClass("hide");
      $("#breadsticks p").html("<strong>Confirm your PIN</strong><br>");
    });

  });
});