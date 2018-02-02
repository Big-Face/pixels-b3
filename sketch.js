var img;

function preload(){
    img = loadImage("wife.jpeg")
}

function setup(){
    createCanvas(img.width,img.height);
    
}

function draw(){
    image(img,0,0); 
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var index = (col + row*width)* 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            
            if(keyIsPressed){
                if(key== "1"){                                        
                    gray_filter(index,r,g,b,a);
                }
                if(key=="2"){
                    rushea_filter(index,r,g,b,a);
                }
                if(key=="3"){
                    jailyn_filter(index,r,g,b,a);
                }
                if(key=="4"){
                    davis_filter(index,r,g,b,a);
                }
                if(key=="5"){
                    prince_filter(index,r,g,b,a);
                }
            }
            
            
        }
    }
    
    updatePixels();
}

function gray_filter(index,r,g,b,a){
            pixels[index] = b;
            pixels[index + 1] = b;
            pixels[index + 2] = b;
            pixels[index + 3] = a;
}

function rushea_filter(index, r,g,b,a){
              pixels[index] = r*2;
            pixels[index + 1] = g*2;
            pixels[index + 2] = b*2;
            pixels[index + 3] = a;
    
}

function jailyn_filter(index, r,g,b,a){
       pixels[index] = 255 - r;
       pixels[index + 1] = 255 - g;
       pixels[index + 2] = 255 - b;
       pixels[index + 3] = a;
}

function davis_filter(index, r,g,b,a){
    pixels[index] = g;
    pixels[index + 1] = g;
    pixels[index + 2] = g;
    pixels[index + 3] = a;
}

function prince_filter(index, r, g, b,a){
    pixels[index] = 0;
    pixels[index + 1] = g;
    pixels[index + 2] = 0;
    pixels[index + 3] = a;
}