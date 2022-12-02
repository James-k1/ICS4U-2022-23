
let matchCount = -1;

//adds the tournaments from the rankingPoints list to the tournament selector
function initPage(){
    let tournamentDropdownContent = document.querySelector('#inputContainer .tournamentSelector .dropdown-content');
    let rankList = getRankingPoints();
    //sets the dropdown to have the tournament names in it
    for (obj of rankList){
        let elem = document.createElement('a')
        elem.classList.add('dropdown-item')
        elem.textContent=obj.Tournament;
        elem.setAttribute("onclick","tournamentSelect(this)")
        tournamentDropdownContent.appendChild(elem);
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

//sets the tournament's display text content and sets the inputs in the placement selector
function tournamentSelect(input) {
    input.closest('.tournamentSelector').querySelector('.display').textContent=input .textContent;
    input.closest('.dropdown').classList.remove('is-active');
    let depth = input.closest('.match').querySelector('.placementSelector');
    let depthButton = depth.querySelector('button');
    depthButton.disabled = false;
    let content = depth.querySelector('.dropdown-content');
    //clears the selector
    while(content.querySelector('.dropdown-item')!=null){
        content.removeChild(content.querySelector('.dropdown-item'));
    }
    let pointList = getTournamentFromName(input.textContent).points;

    //adds the rounds for that match
    for (key of Object.keys(pointList)){
        if (pointList[key]!=null && key.toLowerCase()!="winner"){
            let option = document.createElement('a')
            option.classList.add('dropdown-item')
            option.textContent=key;
            option.setAttribute("onclick","setPlacement(this)")
            content.appendChild(option)

        }
    }
    if(pointList[depthButton.textContent.trim()]==null){
        depth.querySelector('.display').textContent="Placement";
    }


}

//sets the placement display text content to the inputs text content
function setPlacement(input){
    let parent = input.closest('.placementSelector');
    parent.querySelector('.dropdown').classList.remove('is-active');

    parent.querySelector('.display').textContent=input.textContent;


}

//finds similar names to the str input and sets those names in the dropdown-content so the user can select them
function searchPlayer(column,str){ 
    //coded this when i didn't know .closest was a thing and i did not have time to change
    let warn=column.closest('th').querySelector('p');
    warn.style.display="none";

    str = str.toLowerCase().trim();
    if (str==""){
        //gets rid of everything is drop-down content
        column.childNodes.forEach(element => {
            column.removeChild(element)
        });
        column.parentElement.parentElement.classList.remove("is-active");
        let warn=column.parentElement.parentElement.parentElement.querySelector('p');

        warn.style.display="none";

        return
    }
    column.innerHTML = '';
    let playerList = getMasterList();
    let option;
    let count = 0;
    for (obj of playerList){
        if (obj.name.toLowerCase().startsWith(str)){
            count++;
            option=document.createElement('a');
            option.className="dropdown-item"; 
            option.textContent=obj.name
            //sets the buttons onclick attribute
            option.onclick=function(input) {
                input.target.parentElement.parentElement.parentElement.querySelector('.input').value=input.target.textContent;
                input.target.parentElement.parentElement.parentElement.classList.remove("is-active");
                let warn = input.target.closest('th').querySelector('p');
                //checks if players are equal
                if (document.querySelector("#p1 .input").value.toLowerCase()==input.target.textContent.toLowerCase() && document.querySelector("#p2 .input").value.toLowerCase()==input.target.textContent.toLowerCase()){
                    
                    warn.style.display="block";
                    warn.textContent="Player Cannot Player Themself";
                    
                }

            }
            column.appendChild(option);
        }
    }
    let elem = column.parentElement.parentElement;
    //checks if player exists
    if(count<1){
        
        elem.classList.remove("is-active");

        warn.style.display="block";
        warn.textContent="Player Not Found!"

        return
        

    }else if (document.querySelector("#p1 .input").value.toLowerCase()==str && document.querySelector("#p2 .input").value.toLowerCase()==str){
        
        warn.style.display="block";
        warn.textContent="Player Cannot Player Themselves";
        
    }
    
    
    elem.classList.add("is-active");
    if(count==1 && str==elem.querySelector('.dropdown-content a').textContent.toLowerCase()){
        elem.classList.remove("is-active");
    }
    
    
    


}

//given a button located in a dropdown, the function displays or hides the dropdown content
function toggleActivation(obj){
    let elem=obj.closest('.dropdown');
    if (elem.classList.contains('is-active')){
        elem.classList.remove('is-active')
    }else{
        elem.classList.add('is-active')
    }

    
}

//takes the information in the add player card, validates it, then extracts the information then passes it to add player which puts the info into localStorage
function addPressed(){
    let errElem = document.querySelector('#submitErr');
    errElem.style.display='none';
    let inputs = document.querySelectorAll('.pInputs .input')
    for (input of inputs){
        if(input.value==""){
            errElem.style.display='block';
            errElem.textContent="Not All Fields Are Filled!"
            return
        }
    }
    
    if (document.querySelector('#pExists').style.display!='none' || document.querySelector('#aNeg').style.display!='none' ){
        errElem.style.display='block';
        errElem.textContent="There Are Unresolved Issues!"
        return
    }

    let height = document.querySelector('#height');
    let heightCheck = height.value;
    let numOne = heightCheck.substring(0,heightCheck.indexOf("'"));
    let numTwo = heightCheck.substring(heightCheck.indexOf("'")+1,heightCheck.indexOf('"'));
    if (heightCheck.indexOf("'")==-1||heightCheck.indexOf('"')==-1 || numOne=="" || numTwo== "" || isNaN(numOne) || isNaN(numTwo)){
        errElem.style.display='block';
        errElem.textContent="Height Is Invalid";
        return
    }

    //validation is done
    let player = document.querySelector('#player');
    let rank = document.querySelector('#rank');
    let country = document.querySelector('#country');
    let age = document.querySelector('#age');



    addPlayer(player.value,rank.value,country.value,height.value,age.value);
    //resets inputs
    player.value="";
    rank.value="";
    country.value="";
    height.value="";
    age.value="";



}

//warns the user if the name already exists 
function checkName(str){
    str=str.trim();
    document.querySelector('#pExists').style.display='none';
        let list = getMasterList();
        for (obj of list){
            if (obj.name.toLowerCase()==str.toLowerCase()){
                document.querySelector('#pExists').style.display='block';
            }
        }
}

//warns the user if the age input is negative
function checkAge(num){
    document.querySelector('#aNeg').style.display='none';
    if (num<0){
        document.querySelector('#aNeg').style.display='block';
    }
}


//validates the sets that are being inputted. Catches sets that don't follow the win-by-two rule is a player has more than 6 games
function validateSet(){

    let setOneError = document.querySelector('#s1Err');
    let setTwoError = document.querySelector('#s2Err');
    let setThreeError = document.querySelector('#s3Err');
    setOneError.style.display="none";
    setTwoError.style.display="none";
    setThreeError.style.display="none";



    let playerOneSetOne = document.querySelector("#p1s1");
    let playerOneSetTwo = document.querySelector("#p1s2");
    let playerOneSetThree = document.querySelector("#p1s3");
    let playerTwoSetOne = document.querySelector("#p2s1");
    let playerTwoSetTwo = document.querySelector("#p2s2");
    let playerTwoSetThree = document.querySelector("#p2s3");
    
    playerOneSetOne.value= playerOneSetOne.value.replace('-','')
    playerOneSetTwo.value= playerOneSetTwo.value.replace('-','')
    playerOneSetThree.value=playerOneSetThree.value.replace('-','')
    playerTwoSetOne.value=playerTwoSetOne.value.replace('-','')
    playerTwoSetTwo.value=playerTwoSetTwo.value.replace('-','')
    playerTwoSetThree.value=playerTwoSetThree.value.replace('-','')
    if (parseInt(playerOneSetOne.value)>99 ||parseInt(playerTwoSetOne.value)>99){
        setOneError.style.display="block";
        setOneError.textContent="Invalid Set";
        return

    }else if ( parseInt(playerOneSetTwo.value)>99 ||parseInt(playerTwoSetTwo.value)>99){
        setTwoError.style.display="block";
        setTwoError.textContent="Invalid Set";
        return

    }else if(parseInt(playerTwoSetThree.value)>99||parseInt(playerOneSetThree.value)>99){
        setThreeError.style.display="block";
        setThreeError.textContent="Invalid Set";
        return

    }

        


    if (playerOneSetOne.value!="" && playerTwoSetOne.value!="" ){
        if ((playerOneSetOne.value<6&&playerTwoSetOne.value<6) || Math.abs(playerOneSetOne.value-playerTwoSetOne.value)<2  || ((playerOneSetOne.value>6||playerTwoSetOne.value>6)&&Math.abs(playerOneSetOne.value-playerTwoSetOne.value)>2)){
            setOneError.style.display="block";
            setOneError.textContent="Invalid Set";
            
        }
    }
    if (playerOneSetTwo.value!="" && playerTwoSetTwo.value!="" ){
        if ((playerOneSetTwo.value<6&&playerTwoSetTwo.value<6) || Math.abs(playerOneSetTwo.value-playerTwoSetTwo.value)<2 || ((playerOneSetTwo.value>6||playerTwoSetTwo.value>6)&&Math.abs(playerOneSetTwo.value-playerTwoSetTwo.value)>2)){
            setTwoError.style.display="block";
            setTwoError.textContent="Invalid Set";
            
        }
    }
    if (playerOneSetThree.value!="" && playerTwoSetThree.value!="" ){
        if ((playerOneSetThree.value<6&&playerTwoSetThree.value<6) || Math.abs(playerOneSetThree.value-playerTwoSetThree.value)<2  || ((playerOneSetThree.value>6||playerTwoSetThree.value>6)&&Math.abs(playerOneSetThree.value-playerTwoSetThree.value)>2)){
            setThreeError.style.display="block";
            setThreeError.textContent="Invalid Set";
            
        }
    }
    if (setOneError.style.display!="none"||setTwoError.style.display!="none"||setThreeError.style.display!="none"){
        return
    }
    if (playerOneSetOne.value!=""&&playerOneSetTwo.value!=""&&playerTwoSetOne.value!=""&&playerTwoSetTwo.value!="" && playerOneSetOne.value>playerTwoSetOne.value&&playerOneSetTwo.value>playerTwoSetTwo.value||playerOneSetOne.value<playerTwoSetOne.value&&playerOneSetTwo.value<playerTwoSetTwo.value){
        playerOneSetThree.value="";
        playerTwoSetThree.value="";
        playerOneSetThree.disabled=true;
        playerTwoSetThree.disabled=true;
    }else{
        playerOneSetThree.disabled=false;
        playerTwoSetThree.disabled=false;
    }

}

//given a match the function extracts the information, creates a match element, the adds the match element to the match queue
function queueMatch(match){
    let err = document.querySelector('#queueErr');
    let setOneError = document.querySelector('#s1Err');
    let setTwoError = document.querySelector('#s2Err');
    let setThreeError = document.querySelector('#s3Err');
    err.style.display="none"
    //check is Tournament is set
    if (match.querySelector('.tournamentSelector .display').textContent=="Tournament"){
        err.style.display="block";
        err.textContent="Tournament Not Selected";
        return
    }
    //check is Placement is set
    if (match.querySelector('.placementSelector .display').textContent=="Placement"){
        err.style.display="block";
        err.textContent="Placement Not Selected";
        return
    }
    //check is players are selected
    if (match.querySelector("#p1 .input").value=="" || match.querySelector("#p2 .input").value==""){
        err.style.display="block";
        err.textContent="Player(s) Not Selected";
        return
    }
    //checks if there is a error in score
    if (setOneError.style.display!="none"||setTwoError.style.display!="none"||setThreeError.style.display!="none" || document.querySelector("#p1s1").value == "" || document.querySelector("#p1s2").value == "" || (!document.querySelector("#p1s3").disabled && document.querySelector("#p1s3").value == "") || document.querySelector("#p2s1").value == "" || document.querySelector("#p2s2").value == "" || (!document.querySelector("#p2s3").disabled && document.querySelector("#p2s3").value == "" )){
        err.style.display="block";
        err.textContent="Scores Are Invalid";
        return
    }
    //checks if dates input is empty
    if (document.querySelector("#date").value==""){
        err.style.display="block";
        err.textContent="Date Not Set";
        return
    }
    //ready to queue match


    let tName = document.querySelector(".tournamentSelector .display").textContent
    let placement = document.querySelector(".placementSelector .display").textContent;
    //gets a empty match
    let matchShell = genDisplayableMatch();
    matchShell.style.width="fit-content";
    matchShell.style.marginLeft="auto";
    matchShell.style.marginRight="auto";
    let header = document.createElement('header');

    
    let tournament = document.createElement('h1');
    tournament.classList.add('subtitle');
    tournament.classList.add('tName');
    tournament.style.marginTop="auto";
    tournament.style.marginBottom="auto";

    tournament.textContent= tName + ": " + placement;
    let date = tournament.cloneNode(true);
    date.classList.remove('tName')
    date.classList.add('date')
    date.textContent="Date Played: " + document.querySelector('#date').value;


    header.appendChild(date)
    header.appendChild(tournament);
 
    matchShell.insertBefore(header,matchShell.firstChild);
    let container = document.createElement('div');
  
    container.classList.add('column');




    //sets all match values
    matchShell.classList.add('box');
    matchShell.querySelector('.playerOne').textContent=match.querySelector("#p1 .input").value;
    matchShell.querySelector('.playerTwo').textContent=match.querySelector("#p2 .input").value;
    matchShell.querySelector('.p1s1').textContent=match.querySelector("#p1s1").value;
    matchShell.querySelector('.p1s2').textContent=match.querySelector("#p1s2").value;
    matchShell.querySelector('.p1s3').textContent=match.querySelector("#p1s3").value=="" ? "-" : match.querySelector("#p1s3").value;
    matchShell.querySelector('.p2s1').textContent=match.querySelector("#p2s1").value;
    matchShell.querySelector('.p2s2').textContent=match.querySelector("#p2s2").value;
    matchShell.querySelector('.p2s3').textContent=match.querySelector("#p2s3").value=="" ? "-" : match.querySelector("#p2s3").value;
   


    //adds remove button
    let button = document.createElement("button");
    button.textContent="Remove";
    button.classList.add("button");
    button.classList.add("is-danger");
    button.style.display="flex";
    button.style.marginLeft="auto";
    button.setAttribute("onclick","rmMatch(this)")
    matchShell.appendChild(button)



    container.appendChild(matchShell);

    

    document.querySelector('.matchBox .columns').appendChild(container);

}

//iterates through the queued matches in the matchBox variable, extracts the information, and calls the function addMatch to add the matches to localStorage
function readyMatches(matchBox){
    let matches = matchBox.querySelectorAll(".columns .column .table");

    //iterates through matches
    for (let match of matches){
        
        //gets info
        let playerOne = match.querySelector(".playerOne").textContent;
        let playerTwo = match.querySelector(".playerTwo").textContent;
        let playerOneSetOne = match.querySelector(".p1s1").textContent;
        let playerOneSetTwo = match.querySelector(".p1s2").textContent;
        let playerOneSetThree = match.querySelector(".p1s3").textContent;
        let playerTwoSetOne = match.querySelector(".p2s1").textContent;
        let playerTwoSetTwo = match.querySelector(".p2s2").textContent;
        let playerTwoSetThree = match.querySelector(".p2s3").textContent;
        let tName = match.querySelector('.tName').textContent.substring(0,match.querySelector('.tName').textContent.indexOf(':'));
        let placement = match.querySelector('.tName').textContent.trim().substring(match.querySelector('.tName').textContent.indexOf(':')+1).trim();
        let points=getTournamentFromName(tName).points[placement];
        let date = match.querySelector('.date').textContent;
        date=date.substring(date.indexOf(":")+1).trim();
        //adds the match
        addMatch(playerOne,playerTwo,playerOneSetOne,playerOneSetTwo,playerOneSetThree,playerTwoSetOne,playerTwoSetTwo,playerTwoSetThree,date,tName,placement,points)

    }
    //clears the queue
    while (matchBox.querySelectorAll(".columns .column").length>0){
        matchBox.querySelector('.columns').removeChild(matchBox.querySelector(".columns .column"));
    }
}

//given a button m
//removes the buttons parent match
function rmMatch(m){
    document.querySelector(".matchBox .columns").removeChild(m.closest('.column'));
    
}


