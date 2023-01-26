var ldiv=document.querySelector('#length-div')
var vdiv=document.querySelector('#volume-div')
var wdiv=document.querySelector('#weight-div')



function lengthDiv(){
	ldiv.style.display="block"
	vdiv.style.display="none"
	wdiv.style.display="none"
}
function volumeDiv(){
	ldiv.style.display="none"
	vdiv.style.display="block"
	wdiv.style.display="none"
}
function weightDiv(){
	ldiv.style.display="none"
	vdiv.style.display="none"
	wdiv.style.display="block"
}
	
	// *****************************************************
	var btm=document.querySelector('#btn-m')
	var btkm=document.querySelector('#btn-km')
	var btcm=document.querySelector('#btn-cm')
	var btmm=document.querySelector('#btn-mm')

	var btl=document.querySelector('#btn-l')
	var btkl=document.querySelector('#btn-kl')
	var btcl=document.querySelector('#btn-cl')
	var btml=document.querySelector('#btn-ml')

	var btg=document.querySelector('#btn-g')
	var btkg=document.querySelector('#btn-kg')
	var btcg=document.querySelector('#btn-cg')
	var btmg=document.querySelector('#btn-mg')

	
let btnConvertM=()=>{
	var inputMethod=document.querySelector("#select-metre").value
	var dm=document.querySelector('.data-input-metre').value
	var dld=document.querySelector('.res-div')
	
	btm.style.background="white"
	btm.style.color="black"	

	btkm.style.background="black"		
	btkm.style.color="white"	

	btcm.style.background="black"		
	btcm.style.color="white"	
		
	btmm.style.background="black"		
	btmm.style.color="white"	

	if(inputMethod=="kilometre"){
		var km=1000
		var convertValue=dm*km
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} metre`)
	}

	else if(inputMethod=="centimetre"){
		cm=0.01
		var convertValue=dm*cm
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} metre`)
	}

	else if(inputMethod=="millimetre"){
		mm=0.001
		var convertValue=dm*mm
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} metre`)
	}	

	else if(inputMethod=="---select---" || inputMethod=="metre"){
		alert("please check input method")
		btm.style.background="black"		
		btm.style.color="white"
	}
}

	// **********************************************************

let btnConvertKm=()=>{
	var inputMethod=document.querySelector("#select-metre").value
	var dm=document.querySelector('.data-input-metre').value
	var dld=document.querySelector('.res-div')
	
	btm.style.background="black"
	btm.style.color="white"		

	btkm.style.background="white"
	btkm.style.color="black"

	btcm.style.background="black"		
	btcm.style.color="white"	
		
	btmm.style.background="black"		
	btmm.style.color="white"


	if(inputMethod=="metre"){
		var m=0.001
		var convertValue=dm*m
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} kilometre`)
	}

	else if(inputMethod=="centimetre"){
		cm=0.00001
		var convertValue=dm*cm
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} kilometre`)
	}

	else if(inputMethod=="millimetre"){
		mm=0.000001
		var convertValue=dm*mm
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} kilometre`)
	}

	else if(inputMethod=="---select---" || inputMethod=="kilometre"){
		alert("please check input method")
		btkm.style.background="black"		
		btkm.style.color="white"
	}
}

	// **********************************************************

let btnConvertCm=()=>{
	var inputMethod=document.querySelector("#select-metre").value
	var dm=document.querySelector('.data-input-metre').value
	var dld=document.querySelector('.res-div')

	btm.style.background="black"
	btm.style.color="white"		

	btkm.style.background="black"
	btkm.style.color="white"

	btcm.style.background="white"		
	btcm.style.color="black"	
		
	btmm.style.background="black"		
	btmm.style.color="white"



	if(inputMethod=="metre"){
		var m=100
		var convertValue=dm*m
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} centimetre`)
	}

	else if(inputMethod=="kilometre"){
		km=100000
		var convertValue=dm*km
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} centimetre`)
	}

	else if(inputMethod=="millimetre"){
		mm=0.1
		var convertValue=dm*mm
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} centimetre`)
	}

	else if(inputMethod=="---select---" || inputMethod=="centimetre"){
		alert("please check input method")
		btcm.style.background="black"		
		btcm.style.color="white"
	}
}

	// **********************************************************

let btnConvertMm=()=>{
	var inputMethod=document.querySelector("#select-metre").value
	var dm=document.querySelector('.data-input-metre').value
	var dld=document.querySelector('.res-div')


	btm.style.background="black"
	btm.style.color="white"		

	btkm.style.background="black"
	btkm.style.color="white"

	btcm.style.background="black"		
	btcm.style.color="white"	
		
	btmm.style.background="white"		
	btmm.style.color="black"

	if(inputMethod=="metre"){
		var m=1000
		var convertValue=dm*m
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} millimetre`)
	}

	else if(inputMethod=="kilometre"){
		km=0.000001
		var convertValue=dm*km
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} millimetre`)
	}

	else if(inputMethod=="centimetre"){
		cm=0.01
		var convertValue=dm*cm
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dm} ${inputMethod} =  ${convertValue} millimetre`)
	}

	else if(inputMethod=="---select---" || inputMethod=="millimetre"){
		alert("please check input method")
		btmm.style.background="black"		
		btmm.style.color="white"
	}
}

	
	// *****************************************************
	// *****************************************************
	
	
	let btnConvertL=()=>{
		var inputMethod=document.querySelector("#select-litre").value
		var dl=document.querySelector('.data-input-litre').value
		var dld=document.querySelector('.res-div')

		btl.style.background="white"
		btl.style.color="white"		

		btkl.style.background="black"
		btkl.style.color="white"

		btcl.style.background="black"		
		btcl.style.color="white"	
		
		btml.style.background="black"		
		btml.style.color="white"

	
		if(inputMethod=="kilolitre"){
			var kl=1000
			var convertValue=dl*kl
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} litre`)
		}
	
		else if(inputMethod=="centilitre"){
			cl=0.01
			var convertValue=dl*cl
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} litre`)
		}
	
		else if(inputMethod=="millilitre"){
			ml=0.001
			var convertValue=dl*ml
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} litre`)
		}	
		
		else if(inputMethod=="---select---" || inputMethod=="litre"){
			alert("please check input method")
			btl.style.background="black"		
			btl.style.color="white"
		}
	}
	
		// **********************************************************
	
	let btnConvertKl=()=>{
		var inputMethod=document.querySelector("#select-litre").value
		var dl=document.querySelector('.data-input-litre').value
		var dld=document.querySelector('.res-div')

		btl.style.background="black"
		btm.style.color="white"		

		btkl.style.background="white"
		btkl.style.color="black"

		btcl.style.background="black"		
		btcl.style.color="white"	
		
		btml.style.background="black"		
		btml.style.color="white"

	
		if(inputMethod=="litre"){
			var l=0.001
			var convertValue=dl*l
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} kilolitre`)
		}
	
		else if(inputMethod=="centilitre"){
			cl=0.00001
			var convertValue=dl*cl
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} kilolitre`)
		}
	
		else if(inputMethod=="millilitre"){
			ml=0.000001
			var convertValue=dl*ml
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} kilolitre`)
		}
	
		else if(inputMethod=="---select---" || inputMethod=="kilolitre"){
			alert("please check input method")
			btkl.style.background="black"		
			btkl.style.color="white"
		}
	}
	
		// **********************************************************
	
	let btnConvertCl=()=>{
		var inputMethod=document.querySelector("#select-litre").value
		var dl=document.querySelector('.data-input-litre').value
		var dld=document.querySelector('.res-div')

		btl.style.background="black"
		btl.style.color="white"		

		btkl.style.background="black"
		btkl.style.color="white"

		btcl.style.background="white"		
		btcl.style.color="black"	
		
		btml.style.background="black"		
		btml.style.color="white"

	
		if(inputMethod=="litre"){
			var l=100
			var convertValue=dl*l
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} centilitre`)
		}
	
		else if(inputMethod=="kilolitre"){
			kl=100000
			var convertValue=dl*kl
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} centilitre`)
		}
	
		else if(inputMethod=="millilitre"){
			ml=0.1
			var convertValue=dl*ml
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} centilitre`)
		}
	
		else if(inputMethod=="---select---" || inputMethod=="centilitre"){
			alert("please check input method")
			btcl.style.background="black"		
			btcl.style.color="white"
		}
	}
	
		// **********************************************************
	
	let btnConvertMl=()=>{
		var inputMethod=document.querySelector("#select-litre").value
		var dl=document.querySelector('.data-input-litre').value
		var dld=document.querySelector('.res-div')

		btl.style.background="black"
		btl.style.color="white"		

		btkl.style.background="black"
		btkl.style.color="white"

		btcl.style.background="black"		
		btcl.style.color="white"	
		
		btml.style.background="white"		
		btml.style.color="black"

	
		if(inputMethod=="litre"){
			var l=1000
			var convertValue=dl*l
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} millilitre`)
		}
	
		else if(inputMethod=="kilolitre"){
			kl=0.000001
			var convertValue=dl*kl
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} millilitre`)
		}
	
		else if(inputMethod=="centilitre"){
			cl=0.01
			var convertValue=dl*cl
			dld.style.display="block"
			var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} millilitre`)
		}
	
		else if(inputMethod=="---select---" || inputMethod=="millilitre"){
			alert("please check input method")
			btml.style.background="black"		
			btml.style.color="white"
		}
	}
	
	// *****************************************************
	// *****************************************************
	
	
let btnConvertG=()=>{
	var inputMethod=document.querySelector("#select-gram").value
	var dl=document.querySelector('.data-input-gram').value
	var dld=document.querySelector('.res-div')

		btg.style.background="white"
		btg.style.color="black"		

		btkg.style.background="black"
		btkg.style.color="white"

		btcg.style.background="black"		
		btcg.style.color="white"	
		
		btmg.style.background="black"		
		btmg.style.color="white"

	if(inputMethod=="kilogram"){
		var kg=1000
		var convertValue=dl*kg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} gram`)
	}

	else if(inputMethod=="centigram"){
		cg=0.01
		var convertValue=dl*cg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} gram`)
	}

	else if(inputMethod=="milligram"){
		mg=0.001
		var convertValue=dl*mg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} gram`)
	}	
	
	else if(inputMethod=="---select---" || inputMethod=="gram"){
		alert("please check input method")
		btg.style.background="black"		
		btg.style.color="white"
	}
}

	// **********************************************************

let btnConvertKg=()=>{
	var inputMethod=document.querySelector("#select-gram").value
	var dl=document.querySelector('.data-input-gram').value
	var dld=document.querySelector('.res-div')

		btg.style.background="black"
		btg.style.color="white"		

		btkg.style.background="white"
		btkg.style.color="black"

		btcg.style.background="black"		
		btcg.style.color="white"	
		
		btmg.style.background="black"		
		btmg.style.color="white"

	if(inputMethod=="gram"){
		var g=0.001
		var convertValue=dl*g
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} kilogram`)
	}

	else if(inputMethod=="centigram"){
		cg=0.00001
		var convertValue=dl*cg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} kilogram`)
	}

	else if(inputMethod=="milligram"){
		mg=0.000001
		var convertValue=dl*mg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} kilogram`)
	}

	else if(inputMethod=="---select---" || inputMethod=="kilogram"){
		alert("please check input method")
		btkg.style.background="black"		
		btkg.style.color="white"
	}
}

	// **********************************************************

let btnConvertCg=()=>{
	var inputMethod=document.querySelector("#select-gram").value
	var dl=document.querySelector('.data-input-gram').value
	var dld=document.querySelector('.res-div')

		btg.style.background="black"
		btg.style.color="white"		

		btkg.style.background="black"
		btkg.style.color="white"

		btcg.style.background="white"		
		btcg.style.color="black"	
		
		btmg.style.background="black"		
		btmg.style.color="white"

	if(inputMethod=="gram"){
		var g=100
		var convertValue=dl*g
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} centigram`)
	}

	else if(inputMethod=="kilogram"){
		kg=100000
		var convertValue=dl*kg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} centigrame`)
	}

	else if(inputMethod=="milligram"){
		mg=0.1
		var convertValue=dl*mg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} centigram`)
	}

	else if(inputMethod=="---select---" || inputMethod=="centigram"){
		alert("please check input method")
		btcg.style.background="black"		
		btcg.style.color="white"
	}
}

	// **********************************************************

let btnConvertMg=()=>{
	var inputMethod=document.querySelector("#select-gram").value
	var dl=document.querySelector('.data-input-gram').value
	var dld=document.querySelector('.res-div')

		btg.style.background="black"
		btg.style.color="white"		

		btkg.style.background="black"
		btkg.style.color="white"

		btcg.style.background="black"		
		btcg.style.color="white"	
		
		btmg.style.background="white"		
		btmg.style.color="black"

	if(inputMethod=="gram"){
		var g=1000
		var convertValue=dl*g
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} milligram`)
	}

	else if(inputMethod=="kilogram"){
		kg=0.000001
		var convertValue=dl*kg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} milligram`)
	}

	else if(inputMethod=="centigram"){
		cg=0.01
		var convertValue=dl*cg
		dld.style.display="block"
		var result=document.querySelector("#res").innerText=(`${dl} ${inputMethod} =  ${convertValue} milligram`)
	}

	else if(inputMethod=="---select---" || inputMethod=="milligram"){
		alert("please check input method")
		btmg.style.background="black"		
		btmg.style.color="white"
	}
}