Further.js
vanila js lib for validating repeated submits. 


Motivation: 
This tool is meant to help improve UI of forms. 
if user keeps clicking submit, he's probably confused and you can help him/her by updating your validation after repeated errors.

Further expects an array of input objects containing a name and a value in format {name: "name", value: "value"} - just like jQuery serializeArray - and returns an array of flag objects containing the initial properties passed + new count property for managing the repetition.
    