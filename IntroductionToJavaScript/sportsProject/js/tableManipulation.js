
let currentSorted = ""

//takes a field to sort like "name" and uses the appropriate sort function to order the masterList and update localStorage
function sort(field) {
    let list = getMasterList();
    if (field === 'name') {
        if (currentSorted=="name"){
            list.reverse();
        }else{
            //sorts alphabetically 
            list = list.sort((p1, p2) => {
            return (p1.name < p2.name) ? -1 : 1
        });
        }
       currentSorted="name";
    }else if (field === 'country') {
        if (currentSorted=="country"){
            list.reverse();
        }else{
            //sorts alphabetically 
            list = list.sort((p1, p2) => {
            return (p1.Country < p2.Country) ? -1 : 1
        });
        }
       currentSorted="country";
    }else if (field === 'height') {
        if (currentSorted=="height"){
            list.reverse();
        }else{
             //sorts numerically
            list = list.sort((p1, p2) => {
            return (convertHeight(p1.Height) < convertHeight(p2.Height)) ? -1 : 1
        });
        }
       currentSorted="height";
    }else if (field === 'age') {
        if (currentSorted=="age"){
            list.reverse();
        }else{
            //sorts numerically
            list = list.sort((p1, p2) => {
            return (p1.Age < p2.Age) ? -1 : 1
        });
        }
       currentSorted="age";
    }else if (field === 'points') {
        if (currentSorted=="points"){
            list.reverse();
        }else{
            //sorts numerically
            list = list.sort((p1, p2) => {
            return (p1.pointCount < p2.pointCount) ? -1 : 1
        });
        }
       currentSorted="points";
    }
    localStorage.setItem("players",JSON.stringify(list));

    createTable();
 }

 //converts height to inches. str will be a height formatted (feet'inches")
function convertHeight(str){
    let feet = str.substring(0,str.indexOf('\''));
    let inches = str.substring(str.indexOf('\'')+1,str.length-1);
    return parseInt(feet*12) + parseInt(inches);


}

//creates a table of players listing their statistics based on whats in localStorage
function createTable(){
    let list = getMasterList();

    
    let tbody = document.querySelector('.mainTable tbody');
    //clears
    while(tbody.firstChild!=null){
        tbody.removeChild(tbody.firstChild);
    }
    for (let obj of list){
        let row = document.createElement('tr');
        for(key of Object.keys(obj)){
            if (key!="id"&&key!="Matches"){
                let cell = document.createElement('td');
                if (key=='name'){
                    let a = document.createElement('a');
                    //sets search parameters for this player which leads to a dynamic page
                    a.href="playerMatches.html?pId="+obj.id;
                    a.target="_blank"
                    a.textContent=obj[key]
                    cell.appendChild(a)
                    row.append(cell)
                }else{
                    cell.textContent=obj[key]
                    row.append(cell)
                }
            }
        }
        tbody.appendChild(row)
    }
}


