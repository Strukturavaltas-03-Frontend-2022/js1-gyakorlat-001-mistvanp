'use strict';

const personDataLog = ({firstname = 'John', lastname = 'Doe', age = 33}) => 'My name is ' + firstname + ' ' + lastname + '. I am' + age + 'old.'
personDataLog({firstname: 'Dave', age: 20});