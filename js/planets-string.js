(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    let planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list.(bullet points) You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetsArrayFromString = planetsString.split("|");
    console.log(planetsArrayFromString);
    let planetsBreak = planetsArrayFromString.join("<br>");
    console.log(planetsBreak);
    document.write(planetsBreak);
    //useful for poems and line breaks?

    planetsString = planetsArray.join("</li><li>");
    planetsString ="<ul><li>" + planetsString + "</li></ul>"
    console.log(planetsString);
    document.write(planetsString);
})();