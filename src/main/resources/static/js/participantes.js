
    loadNames(idEstado);


$("#cidades").on("change",function (){
    var idc = $("#cidades").val();
    console.log(idc);
});

async function loadNames(id) {
    const response = await fetch('/cidade/'+id);
    const names = await response.json();

    fillCity(names);

    $('.selectpicker').selectpicker('refresh');


}



function fillCity(data)
{
    var dropdown = $('#cidades');
    dropdown.empty();

    // dropdown.prop('selectedIndex', 0);

    $.each(data, function (key, entry)
    {
        dropdown.append($('<option></option>')
            .attr('value', entry.id)
            .text(entry.nome));
    })
}