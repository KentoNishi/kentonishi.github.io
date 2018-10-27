(function neuralNet(input){
	input.layers++;
    var layers=[];
	var samples=[];
	for(var i=0;i<100;i++){
		samples.push({in:[]});
		for(var j=0;j<input.neurons;j++){
			samples[i].in.push(Math.round(Math.random()*(input.neurons-1)));
        }
		samples[i].out=samples[i].in[0];
    }
    for(var i=0;i<input.layers;i++){
        layers.push([]);
    }
	samples.forEach(sample=>{
        for(var i=0;i<input.layers;i++){
            for(var j=0;j<input.neurons;j++){
                layers[i][j]=({w:Math.random(),b:Math.random(),v:i==0?sample.in[j]:0});
            }
        }
    	for(var i=0;i<layers.length;i++){
			if(i!=0){
				for(var j=0;j<layers[i].length;j++){
					for(var k=0;k<layers[i-1].length;k++){
						layers[i][j].v+=layers[i-1][k].w*layers[i-1][k].v;
                    }
					layers[i][j].v=sigmoid(layers[i][j].v+layers[i][j].b);
                } 
            }
        }
		cost(layers[layers.length-1],sample.out)
		console.log(cost(layers[layers.length-1],sample.out),layers);
    });
})({layers:3,neurons:3});

function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}

function cost(r,e){
	var value=0;
	for(var i=0;i<r.length;i++){
		value+=Math.pow(r[i].v-(r==e?1:0),2);
    }
// 	console.log(JSON.parse(JSON.stringify(r)),e,value);
	return value;
}
