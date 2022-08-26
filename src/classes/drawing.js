// Drawing Game grid
export const drawGrid = (whatGrid, abc) => {
    let htmlInsert = "<table>";

    for(let i = 1; i <= 11; ++i){

        if(i === 1){
            htmlInsert += '<tr id="first-row">'
        }else{
            htmlInsert += '<tr>'
        }

        for(let j = 1; j <= 11; ++j){
            if(j === 1 && i > 1){
                htmlInsert += '<td id=' + abc[i-1] + (j-2) + whatGrid +'>' + abc[i-1]  + '</td>';
            }else if(i === 1 && j > 1){
                htmlInsert += '<td id=' + abc[i-1]  + (j-2) + whatGrid +'>' + (j - 1) +  '</td>';
            }else{
                htmlInsert += '<td id=' + abc[i-1]  + (j-2) + whatGrid  +'></td>';
            }
        }    
        htmlInsert += '</tr>'
    }    
    htmlInsert += "</table>"
    return htmlInsert;
}
