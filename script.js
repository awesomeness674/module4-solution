(function() {
    var names = ["John", "Jane", "Mike", "Alice", "Jack", "Tom"];
    
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        if (name.charAt(0).toLowerCase() === 'j') {
            console.log("Goodbye " + name);
        } else {
            console.log("Hello " + name);
        }
    }
})();
