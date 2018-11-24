

var te = "<h4 id='titl'>EXPLORE OUR SERVICES</h4><img id='lignetitle' src='imgs/t11.png'><div id='carouselExampleIndicators' class='carousel slide data-ride=carousel'><ol class='carousel-indicators'><li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li><li data-target='#carouselExampleIndicators' data-slide-to='1'></li><li data-target='#carouselExampleIndicators' data-slide-to='2'></li> <li data-target='#carouselExampleIndicators' data-slide-to='2'></li></ol><div class='carousel-inner'>";

$.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (file) {
  te +=
    "<div class='carousel-item active'>" +

    "<div class='container'>" +

    "<div class='row'>" +
    "<div class='col-md-4'>" +
    "<div class='card mb-4 shadow-sm'>" +
    "<img class='card-img-top'  src=http://" + file.data[0].imagePath + " alt=Card image cap>" +
    "<img id='ligne' src='imgs/t1.png'>" +
    "<label>" + file.data[0].label + "</label>" +
    "<div class='card-body'>" +
    "<p >" + file.data[0].description + "</p>" +
    "<div class='d-flex justify-content-between align-items-center'>" +


    "</div>" +
    "</div>" +
    " </div>" +
    "</div>" +
    "<div class='col-md-4'>" +
    "<div class='card mb-4 shadow-sm'>" +
    "<img class='card-img-top'  src=http://" + file.data[1].imagePath + " alt=Card image cap>" +
    "<img id=ligne src=imgs/t1.png>" +
    "<label>" + file.data[1].label + "</label>" +
    "<div class='card-body'>" +
    "<p >" + file.data[1].description + "</p>" +
    "<div class='d-flex justify-content-between align-items-center'>" +


    "</div>" +
    "</div>" +
    " </div>" +
    "</div>" +
    "<div class='col-md-4'>" +
    "<div class='card mb-4 shadow-sm'>" +
    "<img class='card-img-top'  src=http://" + file.data[2].imagePath + " alt=Card image cap>" +
    "<img id=ligne src=imgs/t1.png>" +
    "<label>" + file.data[2].label + "</label>" +
    "<div class='card-body'>" +
    "<p >" + file.data[2].description + "</p>" +
    "<div class='d-flex justify-content-between align-items-center'>" +


    "</div>" +
    "</div>" +
    " </div>" +
    "</div>" +

    "</div>" + "</div>" + "</div>";

  te += "<div class='carousel-item'>" + "<div class='container'><div class='row'>";


  for (let i = 3; i < file.data.length; i++) {
    te += "<div class='col-md-4'>" +
      "<div class='card mb-4 shadow-sm'>" +
      "<img class='card-img-top'  src=http://" + file.data[i].imagePath + " alt=Card image cap>" +
      "<img id='ligne' src='imgs/t1.png'>" +
      "<label>" + file.data[i].label + "</label>" +
      "<div class='card-body'>" +
      "<p >" + file.data[i].description + "</p>" +
      "<div class='d-flex justify-content-between align-items-center'>" +

      "</div>" +
      "</div>" +
      " </div>" +
      "</div>";

  }

  te += "</div></div></div>";

  te += "<div><a class='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true'><img src='imgs/arrow_left_actif@1x.png'></span><span class='sr-only'>Previous</span></a><a class='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'><img src='imgs/arrow_right_actif@1x.png'></span><span class='sr-only'>Next</span></a></div></div></div>";
  document.getElementById("t").innerHTML = te;

}); 
