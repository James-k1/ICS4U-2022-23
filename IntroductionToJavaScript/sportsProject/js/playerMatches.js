let list = getMasterList();
let params =  (new URL(document.location)).searchParams;
let player = list.filter(list => list.id == params.get('pId'))[0];
const gamesPerPage = 4;
let displayArr = [];
let count = 0;

//sets up the display array which is a 2d array with each inner array representing a page of games.
function initPlayerMatch(){
    let pointList = getRankingPoints();
    let arr = []
    
    for (obj of pointList){
        let matches = player.Matches;
        let games = matches.filter((elem) => {
            return elem.tournament==obj.Tournament;
        })
    
        games.sort((a,b) => {
        return (getTournamentFromName(a.tournament).points[a.placement] < getTournamentFromName(b.tournament).points[b.placement]) ? 1 : -1;
        })
        for (let game of games){
            if (count>=gamesPerPage){
                displayArr.push(arr);
                arr = []
                count=0;
            }
            arr.push(game)

            count++;
        }
    }
    if (arr.length>0){
        displayArr.push(arr);
    }
     let pageList = document.querySelector('.pagination-list');
    for (let i = 0; i<displayArr.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.classList.add('pagination-link')
        if (i==0){
            a.classList.add('is-current')
        }
        a.setAttribute("onclick","switchPage(this)");
        a.textContent=i+1;
        li.appendChild(a);

        pageList.insertBefore(li,document.querySelector('#last'));

        

    }
    if (displayArr.length<=1){
        document.querySelector('#lastButton').classList.add("is-disabled");
    }

     createGameTable(0);
}

//switches the current button and displays the correct games for the page.
function switchPage(button){
    document.querySelector('.is-current').classList.remove('is-current');
    button.classList.add('is-current');
    createGameTable(button.textContent-1)




    if (button.textContent!=1 && document.querySelector('#first').classList.contains('is-disabled')){
        document.querySelector('#first').classList.remove('is-disabled');
    }else if (button.textContent==1 && !document.querySelector('#first').classList.contains('is-disabled')){
        document.querySelector('#first').classList.add('is-disabled');
    }
    if(button.textContent!=displayArr.length && document.querySelector('#lastButton').classList.contains('is-disabled')){
        document.querySelector('#lastButton').classList.remove('is-disabled');
        
    }else if (button.textContent==displayArr.length && !document.querySelector('#lastButton').classList.contains('is-disabled')){
        document.querySelector('#lastButton').classList.add('is-disabled');
    }
}


//displays all games of a particular player by iterating this pages game arr (indicated by index) and setting an empty matches values to the game values
function createGameTable(index){

    let cont = document.querySelector('.mainContainer');
   
    while(cont.firstChild!=null){
        cont.removeChild(cont.firstChild);
    }


    
    for (game of displayArr[index]){
        let elem = genDisplayableMatch();
        elem.querySelector('.playerOne').textContent=player.name;
        elem.querySelector('.playerTwo').textContent=game.opponet;
        elem.querySelector('.p1s1').textContent=game.s1[0];
        elem.querySelector('.p1s2').textContent=game.s2[0]
        elem.querySelector('.p1s3').textContent=game.s3[0]
        elem.querySelector('.p2s1').textContent=game.s1[1]
        elem.querySelector('.p2s2').textContent=game.s2[1]
        elem.querySelector('.p2s3').textContent=game.s3[1]
        
        let column = document.createElement('div');
        column.classList.add("column");
        elem.classList.add('box')
        
        elem.setAttribute("style","width: fit-content; margin-left: auto; margin-right: auto; height:100%");
        
        let header = document.createElement('header');
        let tournament = document.createElement('h1');
        tournament.classList.add('subtitle');
        tournament.textContent=game.tournament + ": ";
        tournament.style.display="inline"
        let placement = document.createElement('h1');
        placement.textContent=game.placement;
        placement.classList.add('subtitle');
        placement.classList.add('has-text-weight-bold');
        placement.style.display="inline"
        placement.style.fontSize="15px"
        header.appendChild(tournament);

        header.appendChild(placement);
        header.style.marginBottom="15px"
        let date = document.createElement('h1');
        date.textContent=game.date;
        date.classList.add('subtitle')
        date.style.marginLeft="auto";
        date.style.width="fit-content";
        date.style.padding="5px"
        date.style.marginTop="10px"
        date.style.marginBottom="10px"
        elem.appendChild(date);

        elem.insertBefore(header,elem.firstChild);
        column.appendChild(elem)
        cont.appendChild(column)
        count++;


    }

}

//creates an empty match element with values ready to be set
function genDisplayableMatch(){
    let  table = document.createElement('table');
    table.classList.add('table');
    let tableHead = document.createElement('thead');
    let tableRow = document.createElement('tr');
    let th = document.createElement('th');
    th.textContent="Players";
    tableRow.appendChild(th);
    th = document.createElement('th');
    th.textContent="Set One";
    tableRow.appendChild(th);
    th = document.createElement('th');
    th.textContent="Set Two";
    tableRow.appendChild(th);
    th = document.createElement('th');
    th.textContent="Set Three";
    tableRow.appendChild(th);
    tableHead.appendChild(tableRow);
    table.appendChild(tableHead);

    let tableBody = document.createElement('tbody');
    tableRow=document.createElement('tr');
    th = document.createElement('th')
    let p1 = document.createElement('h1');
    p1.classList.add("playerOne");
    p1.textContent="p1";


    th.appendChild(p1);
    tableRow.appendChild(th);

    for (i = 1; i <= 3; i++){
        let td = document.createElement('td');
        let set=document.createElement('h2');
        set.classList.add("p1s"+i)
        td.appendChild(set);
        tableRow.appendChild(td);
        
    }
    


    tableBody.appendChild(tableRow);

    tableRow=document.createElement('tr');
    th = document.createElement('th')

    let p2 = document.createElement('h1');
    p2.classList.add("playerTwo");
    p2.textContent="p2";
    th.appendChild(p2);
    tableRow.appendChild(th)

    for (i = 1; i <= 3; i++){
        let td = document.createElement('td');
        let set=document.createElement('h2');
        set.classList.add("p2s"+i)
        td.appendChild(set);
        tableRow.appendChild(td);
        
    }



    tableBody.appendChild(tableRow);




    table.appendChild(tableBody)
    
    return table;


}

