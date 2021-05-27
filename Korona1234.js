let table2;
let table;
let img;
let count=5;
timedelay = 0;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');
  table2 = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv','header');
  img = createImg('https://github.com/mpsteenstrup/Covid19DatabaseTutorial/blob/master/images/map.jpg?raw=true');
  img.hide();

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(153,204,255);
  textSize(40);
  fill(200);
  frameRate(10);
  noStroke();
  alert("Coronavirus detected on this computer")
}

function draw(){
  frameRate(20/log(count));
  background(153,204,255);
  image(img,400-360,400-360*0.84,360*2,440);

  fill(255,255,255);
  text(table.columns[count],550,150);
  lat = table.getColumn('Lat');
  long = table.getColumn('Long');
  confirmed = table.getColumn(count);
  confirmedD = table2.getColumn(count);

  deaths = 0;
  for (i=1;i<275;i++){
    deaths += parseInt(confirmedD[i]);
  }

  deathsDK = parseInt(confirmedD[104]);

  smit = 0;
  for (i=1;i<275;i++){
    smit += parseInt(confirmed[i]);
  }

  smitDK = parseInt(confirmed[104]);

  fill(255,255,255);
  text("Deaths:",800,150);
  text(deaths,950,150);
  text(deathsDK,1070,250);
  text("Deaths in DK:",800,250);

  fill(0,0,176);
  text("Corona in the world",50,60);

  fill(0,0,0);
  text("Total cases:",800,350);
  text(smit,1050,350);
  text("Total cases in DK:",800,450);
  text(smitDK,1150,450);
  text("Black = deaths",50,650);

  fill(255,0,0);
  text("Red = confirmed cases",50,600);


  fill(255,0,0);
  for (i=0;i<table.getRowCount();i++){
      ellipse(400+long[i]*2,400-lat[i]*2,log(confirmed[i]),log(confirmed[i]));
  }
  fill(0,0,0);
  for (i=0;i<table2.getRowCount();i++){
      ellipse(400+long[i]*2,400-lat[i]*2,log(confirmedD[i]),log(confirmedD[i]));
  }

  count += 1;
  if (count>table.getColumnCount()-1){
    count = table.getColumnCount()-1;
  }
}
function mousePressed(){
  count=5;
}
