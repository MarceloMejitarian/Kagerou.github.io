let MiIma = document.querySelector('img');
MiIma.onclick = function () 
{
	let Origen = MiIma.getAttribute('src');
	if (Origen === 'Ima/FB_IMG_1563208651944.jpg')
		MiIma.setAttribute('src', 'Ima/FB_IMG_1560961218719.jpg');
	else
		MiIma.setAttribute('src','Ima/FB_IMG_1563208651944.jpg');
}

document.querySelector('button').onclick = function ()
{
	CambiarID();
}

function CambiarID()
{
	let ID = prompt('Ingrese su ID');
	if (!ID)
		CambiarID();
	else
	{
		localStorage.setItem('Id', ID); //La variable no debe ser exactamente igual al primer parámetro, así este en comillas
		MiH1.textContent = 'Kagerou con ' + ID; 
	}
}

let MiH1 = document.querySelector('h1');
if (!localStorage.getItem('Id'))
	CambiarID()
else
{
	let IDhoy = localStorage.getItem('Id');
	MiH1.textContent = 'Kagerou con ' + IDHoy;
}