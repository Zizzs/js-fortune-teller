
// Business Logic
var unluckyValue = 0;
var luckyValue = 0;


//User Interface Logic

$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    $("#work-responses").show();
    $("input:checkbox[name=unluckyInput]:checked").each(function(){
      ++unluckyValue;
      return unluckyValue;
    });
    $("input:checkbox[name=luckyInput]:checked").each(function(){
      ++luckyValue;
      return luckyValue;
    });
    if (unluckyValue - luckyValue > 2) {
      $("#fortuneUnlucky").show();
    } else if (luckyValue - unluckyValue > 2){
      $("#fortuneLucky").show();
    } else {
      $("#fortuneNeutral").show();
    };
  });
});
