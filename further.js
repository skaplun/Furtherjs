    var Further = (function(){
        'use strict';
        
        function load() {
            return localStorage.getItem('further');                
        }
        
        function save(key, val) {
            return localStorage.setItem(key, val);
        }
        
        function buildBeforeSave(arr){
            arr.forEach(function(v){
                v.count = 1;
            });
          
            return JSON.stringify(arr);
        }
        
        function compare(prev, current){
            var max = current.length, result = [];
            for(var i=0; i < max; i++){
                prev.filter(function(obj){
                    if(obj.name === current[i].name && obj.value === current[i].value){
                        obj.count ? obj.count += 1 : obj.count = 1; 
                        result.push(obj);
                    } 
                });
                        
            }
            return result;
        }
        
        function start(arr){
            var prev = load(), flags, change, result;
            if(prev !== null && prev != 'undefined'){
                change = compare(JSON.parse(prev), arr);
                flags = change.map(function(v){
                    if(v.count > 1) return v;
                });      
                result = JSON.stringify(change);
                
            }else{
                result = buildBeforeSave(arr);
            }
            
            save('further', result);
            return flags || {flags : false};
            
        }
    
        return {
            start : start
        };
    
    })();
