const masterList = [{
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004
 },
 {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
 },
 {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
 },
 {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
 },
 {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
 },
 {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
 },
 {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
 },
 {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
 },
 {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
 }
 ];
 
 let companies = masterList;
 let isCategorySort = false;
 let categorySortDir = 'none';
 
 
 const btn = document.querySelector('button');
 btn.addEventListener('click', createTable);
 
 function createTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
 
    companies.forEach(company => {
       const row = document.createElement('tr');
       tbody.appendChild(row);
       for (let key in company) {
          const cell = document.createElement('td');
          cell.textContent = company[key];
          row.appendChild(cell);
       }
    });
 }
 const sort = (evt) => {
    let sortField = evt.currentTarget.id;
    console.log(1);
    if (categorySortDir !== 'asc') {
       categorySortDir = 'asc';
       companies = masterList.sort((a, b) => {
          return (a[sortField] > b[sortField]) ? 1 : (a[sortField] === b[sortField] ? 0 : -1);
       });
    } else {
       categorySortDir = 'desc';
       companies = masterList.sort((a, b) => {
          return (a[sortField] < b[sortField]) ? 1 : (a[sortField] === b[sortField] ? 0 : -1);
       });
    }
 
    createTable();
 }
 
 const search = document.querySelector('#search');
 
 const filter = () => {
 
    let val = search.value;
    companies = masterList.filter(company =>
       company['category'].indexOf(val) >= 0 || company['name'].indexOf(val) >= 0
    );
    createTable();
 }
 search.addEventListener('keyup', filter);
 
 
 document.querySelectorAll('th').forEach((th) => th.addEventListener('click', sort));