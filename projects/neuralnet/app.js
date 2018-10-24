var layers=[];
var input=[];
var output=[];
for(var i=0;i<100;i++){
    var out=Math.round(Math.random());
    input.push({in:[out,Math.round(Math.random()),Math.round(Math.random())],out:out});
}
for(var i=0;i<4;i++){
	layers.push([]);
}
for(var i=0;i<layers.length;i++){
	for(var j=0;j<3;j++){
		layers[i].push({w:Math.random(),b:Math.random(),v:0});
    }
}
input.forEach(data=>{
	for(var i=0;i<layers.length-1;i++){
		if(i==0){
			input.forEach(data=>{
				for(var j=0;j<layers[i].length;j++){
					layers[i][j].v=data.in[j];
                }
            });
        }
        for(var j=0;j<layers[i].length;j++){
	        for(var k=0;k<layers[i+1].length;k++){
				layers[i+1][k].v+=layers[i][j].w*layers[i][j].v;
            }
        }
		
    }
});
console.log(layers);
function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}
