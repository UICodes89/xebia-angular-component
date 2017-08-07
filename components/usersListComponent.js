app.component('userList', {
  templateUrl: 'components/usersListComponent.html',
  controller: function($http) {
    var vm = this;
    vm.users = [];
    // Called when component is ready, see below
    vm.$onInit = function() {
      $http.get('components/usersListComponent.json').then(function (data) {
        vm.users = data;
      });
    };
  }
});