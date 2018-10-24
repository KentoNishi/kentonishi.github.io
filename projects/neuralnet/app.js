var layers=[];
var data=[];
for(var i=0;i<100;i++){
    var out=Math.round(Math.random());
    data.push({in:[out,Math.round(Math.random()),Math.round(Math.random())],out:out});
}
for(var i=0;i<4;i++){
	layers.push([]);
}
for(var i=0;i<layers.length;i++){
	for(var j=0;j<3;j++){
		layers[i].push(i!=layers.length-1?({w:Math.random(),b:Math.random()}):({}));
    }
}
function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}
