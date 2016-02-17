NestCheck
===========

npm install nestcheck --save

In code:
var nest = require('nestcheck');


##Description

This module is used to run a deep nest check on objects without throwing a TypeError.

Two functions exist. has and get

has returns a boolean value based on if the nest exists.

git returns the nested value if it exists and if not returns undefined.

##has

nest.has(OBJECT, 'string.of.nest.search') //returns true or false.

##get

nest.get(OBJECT, 'string.of.nest.search') //returns nest value or undefined

##IMPORTANT

Do not include base object name in string search. 

Ex.

	var Obj = {
		nested: { exists: true}
	}
	
	RIGHT
	--------------
	nest.has(Obj, 'nested.exists') //returns true
	
	WRONG
	--------------
	nest.has(Obj, 'Obj.nested') //will return false

