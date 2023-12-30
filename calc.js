var output= document.getElementById("output")

function clr()
{
    output.value = "";
}

function cal()
{
     try {
        output.value =eval(output.value);
     } catch (error) {
        output.value='error';
     }
        
}

function del()
{
     output.value = output.value.slice(0,-1)
}

function btn(value)
{
    output.value +=value;
}
