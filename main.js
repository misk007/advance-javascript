const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//1.
//basic for loop
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

//forEach
companies.forEach(function (company, index) {
    console.log(company, index);
})


//2
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

//filter
// const canDrink = ages.filter(function (age) {
//     if (age >= 21) {
//         return true;
//     }
// })
// console.log(canDrink);


//filter
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);


//filter retail companies
// const retailCompanies = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true;
//     }
// })
// console.log(retailCompanies);

//filter 2
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);


//Get 80s companies
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

//lastedTenYears
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears);


//map
//array of company names
// const companyNames = companies.map(function (company) {
//     return company.name;
// })

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// const agesSquare = ages.map(age => Math.sqrt(age));
// const ageTimesTwo = ages.map(age => age * 2);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

console.log(ageMap);

// console.log(agesSquare);
// console.log(ageTimesTwo);


//sort
//reduce