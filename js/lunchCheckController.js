(function(module){

  var lunchCheckController = function($scope){

    var model = this;

    model.items = "";
    model.checkIfTooMuch = function(){

      if(model.items.length ==0)
      {
        model.message ="Please enter data first";
        model.textBoxBorderColor="red";
        model.messageColor ="red";
        return;
      }
      var itemList = model.items.split(',');
      model.messageColor ="green";
        model.textBoxBorderColor="green";
      if(itemList.length <4)
      {
        model.message ="Enjoy!";
      }
      else {
          model.message ="Too much!";
      }
    

    };

  };

  lunchCheckController.$inject =['$scope'];
  module.controller("lunchCheckController", lunchCheckController);

}(angular.module("LunchCheck")));
