mainApp.controller("studentController",function($scope){
   
  $scope.student= {
       firstName: "Noymul Islam",
       lastName:  "Shorot",
       fees:      5000,

       subjects:[
         {name:"Physics",marks:70},
         {name: "chemistrty", marks:80}
   
       ],

       fullName: function()
       {
       	var studentObject;
       	studentObject=$scope.student;
       	return studentObject.firstName + " "+ studentObject.lastName;
       }

  };

});