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
		if(i!=layers.length-1){
			layers[i].push({w:Math.random(),b:Math.random(),v:0});
        }else{
			layers[i].push({v:0});
        }
    }
}
input.forEach(data=>{
	for(var i=0;i<layers.length;i++){
		if(i==0){
			input.forEach(data=>{
				for(var j=0;j<layers[i].length;j++){
					layers[i][j].v=data.in[j];
                }
            });
        }else{
        }
    }
});
console.log(layers);
function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}
