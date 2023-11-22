

function calcTotal(){
    $total = 0
    $(countries_data).each(country => {
        $total += countries_data[country].population
    })
    return $total
}


$('#btn').click(function () { 
    $.each(countries_data, function (country) { 
         $country_name = $("<h2></h2>")
        //  const country_name = document.createElement('h2')
        $country_capital = $("<h3></h3>")
        $country_flag = $("<img>")
        $country_popilation = $("<p></p>")
        $percent_of_population = $("<p></p>")
        $div = $("<div></div")

        $percent = Number(((countries_data[country].population / calcTotal()) * 100).toFixed(5))

        $($country_name).text(countries_data[country].name);
        $($country_capital).append(countries_data[country].capital);
        $($country_flag).attr('src', `${countries_data
        [country].flag}`);
        $($country_flag).css("width","50px");
        $($country_popilation).text(`Bu ülkenin nufusu: ${countries_data[country].population}`);
        $($percent_of_population).text(`Bu ülkenin nüfusunun dünya nufusuna oranı:${$percent}`)
        $percent_of_population.css("color", `${$percent >= 3 ? "red" : "green"}`)
        $div.css({
            "border": "1px solid black",
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            "text-align": "center"
        })

        $($div).append($country_name);
        $div.append($country_capital)
        $div.append($country_flag)
        $div.append($country_popilation)
        $($div).append($div)
        $($div).append($percent_of_population)
        
        $('.container').append($div)

    });
    
});