// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================


 var points = [];

 for (i = 2; i < process.argv.length; i++) {

    points.push(process.argv[i]);

}

points.sort(function(a, b){return a-b});


console.log(points)


