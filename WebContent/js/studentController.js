mainApp.controller("studentController", function($scope) {
	$scope.student = {
		firstName : "Sreeni",
		lastName : "Mula",
		fees : 500,
		subjects : [ {
			name : 'Physics',
			marks : 70
		}, {
			name : 'Chemistry',
			marks : 80
		}, {
			name : 'Math',
			marks : 65
		}, {
			name : 'English',
			marks : 75
		}, {
			name : 'Hindi',
			marks : 67
		} ],
		fullName : function() {
			var studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};

});