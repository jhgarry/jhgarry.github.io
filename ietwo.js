let points;
let lpoints = [];
let tvpoints = [];
let font;
let img;
let on = true;
let once = true;
let i =0;
let pds;

let hpoints =[];

async function setup() {
  createCanvas(400, 400);
  textSize(300);
  strokeWeight(5);
  loadPixels();
  font = await loadFont("NotoSansJP-Bold.otf")
  console.log("font load success")
  img = await loadImage("IMG_8076.jpeg");
  console.log("image load success")
  points = font.textToPoints("家", 50, 300, {sampleFactor : 0.5})
  for(let lk=0;lk<20;lk++){
    lpoints.push(floor(random(37)*10));
    for(let jk = -2; jk<3; jk++){
      tvpoints.push(lpoints[lk] + jk);
    }
  }
  pds = pixelDensity();//3
}

function draw() {
  image(img,0,0);
  loadPixels()
  if(on){
    for(let ppi =0; ppi<pds; ppi++){
      for(let ppj=0;ppj<pds;ppj++){
        for(let x of lpoints){
          for(let y =0; y<height;y+=5){
            let index = 4 * ((y * pds + ppj) * width * pds + (x * pds + ppi));
   if(once){updatePoint(pixels[index], pixels[index+1], pixels[index+2]);
           }
          }
        }
      }
    }
    once = false;
    /*for(let j =0; j<20; j++){
      line(lpoints[j], 0, lpoints[j], height);
    }*/
    for(let p=0; p<points.length;p++){
      stroke(hpoints[p].r,hpoints[p].g,hpoints[p].b);
      point(points[p].x +random(-2,2), points[p].y+random(-2,2));
    }
    stroke(0);
    if(frameCount % 30==0) i++;
    if(i==10){
      i =0;
      on = false;
      once = true;
      hpoints = [];
    }
  }
  if(frameCount % 600==0)on = true;
}

function updatePoint(r,g,b){
  hpoints.push({r:r,g:g,b:b})
}