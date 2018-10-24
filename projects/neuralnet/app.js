var layers=[];
var input=[];
var output=[];
for(var i=0;i<100;i++){
    var out=Math.round(Math.random());
    input.push({in:[out,Math.round(Math.random()),Math.round(Math.random())],out:out});
}
for(var i=0;i<2;i++){
	layers.push([]);
}
for(var i=0;i<layers.length;i++){
	for(var j=0;j<3;j++){
		layers[i].push({w:Math.random(),b:Math.random()});
    }
}
input.forEach(data=>{
	for(var i=0;i<layers.length;i++){
		for(var j=0;j<layers[i].length;j++){
			if(i==0){
				layers[i][j].v=data.in[j];
            }
        }
    }
});
console.log(layers);
function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}
