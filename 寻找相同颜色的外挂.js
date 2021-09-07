


  var game = document.getElementById("gameCanvas");
  var context = game.getContext("2d");
  var  gw = game.width;
  var  gh = game.height;
  var rgb = [];
  var count = 0;
    for(var i = 0;i<gw;i+=5){
        for(j = 0;j<gh;j+=5){
            var canvasColor = context.getImageData(i, j,1,1);
             var pixels = canvasColor.data;
             var r = pixels[0];
             var g = pixels[1];
             var b = pixels[2];
             if(r!=0&&g!=0&&b!=0){
                if(r!=b&&b!=g&&g!=r)
                rgb[count++] = `${r},${g},${b}`;
             }
        }
    }

       function  statisticalFieldNumber(arr) {
            return arr.reduce(function (prev, next) {
                prev[next] = (prev[next] + 1) || 1;
                return prev;
            }, {});
        }

var rgba = statisticalFieldNumber(rgb);

var finder = Object.values(rgba).sort(function(a,b){return b-a})[1];
function findKey(obj, value, compare = (a, b) => a === b) {
  return Object.keys(obj).find(k => compare(obj[k], value))
}

var findrgba = findKey(rgba, finder);
// console.log(Object.values(rgba).sort(function(a,b){return b-a})[1]);

//提取rgb
var str = findrgba;
var sr,sg,sb;
var res = str.split(",")[0];
var num = res.replace(/[^0-9]/ig,"");

sr = num;

res = str.split(",")[1];
num = res.replace(/[^0-9]/ig,"");
sg = num;

res = str.split(",")[2];
num = res.replace(/[^0-9]/ig,"");
sb = num;
console.log("srgb",sr,sg,sb);
     for(var i = 0;i<gw;i+=5){
        for(var j = 0;j<gh;j+=5){
            var canvasColor2 = context.getImageData(i, j,1,1);
             var pixels2 = canvasColor2.data;
             var r2 = pixels2[0];
             var g2 = pixels2[1];
             var b2 = pixels2[2];
             if(r2 == sr&&g2==sg&&b2 == sb){
                  console.log(i,j);   
             }
        }
    }

