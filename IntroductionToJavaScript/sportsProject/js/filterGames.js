let list = getMasterList();
const gamesPerPage = 4;
let displayArr = [];
let count = 0;



//sets up the display array which is a 2d array with each inner array representing a page of games.
function initPlayerMatch(matches){
    let pointList = getRankingPoints();
    let arr = []
    displayArr=[];
    count=0;
    
        let games = matches.sort((g1,g2) => {
            return new Date(g1.date) > new Date(g2.date) ? 1 : -1;
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
    if (arr.length>0){
        displayArr.push(arr);
    }
    let pageList = document.querySelector('.pagination-list');
    while (pageList.querySelectorAll('li').length>2){
        pageList.removeChild(pageList.querySelectorAll('li')[1])
    }
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

//takes a min date value and a max date value and filters all dates that are between the range (inclusive). then recreates the displayArr and re-displays the filtered games
function filterDates(min,max){
    dateOne = min.value;
    dateTwo = max.value;
    if (dateOne==""||dateTwo==""){
        let errElem = document.querySelector("#filterErr");
        errElem.style.display="block";
        errElem.querySelector('.message-body').textContent="One or both of the dates are unset.";
        return
    }
    dateOne = new Date(dateOne);
    dateTwo = new Date(dateTwo);
    if (dateOne>dateTwo){
        let errElem = document.querySelector("#filterErr");
        errElem.style.display="block";
        errElem.querySelector('.message-body').textContent="The dates are not in order. Please ensure that the first date is less than the second.";
        return
    }
    let games = getGames();
    games = games.filter((game) => {
        return (new Date(game.date) > dateOne && new Date(game.date) < dateTwo)
    });
    games = games.sort((g1,g2) => {
        return new Date(g1.date) > new Date(g2.date) ? 1 : -1;
    })

    initPlayerMatch(games)



}

//creates a table of players listing their statistics based on whats in localStorage
function createGameTable(index){

    let cont = document.querySelector('.mainContainer');
   
    while(cont.firstChild!=null){
        cont.removeChild(cont.firstChild);
    }

    if (displayArr[index]==null){
        return
    }
    
    for (game of displayArr[index]){
        let elem = genDisplayableMatch();
        elem.querySelector('.playerOne').textContent=game.playerOne;
        elem.querySelector('.playerTwo').textContent=game.playerTwo;
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
        // header.style.display="table-cell";
        let tournament = document.createElement('h1');
        tournament.classList.add('subtitle');
        tournament.textContent=game.tournament + ": ";
        tournament.style.display="inline"
        let placement = document.createElement('h1');
        placement.textContent=game.placement;
        placement.classList.add('subtitle');
        placement.classList.add('has-text-weight-bold');
        placement.style.display="inline"
        // placement.style.marginLeft="10px"
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