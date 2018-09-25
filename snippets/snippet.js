(function() {

    'use strict';

    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }

    Employee.prototype.getAge = function getAge() {
        return this.age;
    }

    Employee.prototype.getName = function getName() {
        return this.name;
    }

    let obj = new Employee('Madhan', 24);

    console.log(obj.getAge());

    let newObj = Object.create(Employee.prototype);

    newObj.age = 21;
    console.log(newObj.getAge());

    console.log(newObj.proto);

})();
