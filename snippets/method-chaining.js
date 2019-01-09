(function() {

    'use strict';

    let userWrapper = {
        
        currentUser  : '',
        filteredUser : '',
        userList: [
            {
                firstName   : 'Madhankumar',
                LastName    : 'J',
                email       : 'madhankumar028@gmail.com'
            }
        ],

        findUser(userEmail) {
            this.userList.filter(user => {
                if (user.email === userEmail) {
                    this.filteredUser = user;
                }
            });
            return this;
        },

        formatUser() {
            this.currentUser = `${this.filteredUser.firstName} ${this.filteredUser.LastName}`;
            console.log(this.currentUser);
        }
    }

    userWrapper.findUser('madhankumar028@gmail.com').formatUser();

})();
