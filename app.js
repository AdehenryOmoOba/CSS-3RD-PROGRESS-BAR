// const dataPage = document.querySelector(".data-info");

// // ***************************** Getting data from API Endpoints with XMLHttpRequest() method ********************

// const worldBankDataRequest = new XMLHttpRequest();
// worldBankDataRequest.open(
//   "GET",
//   "https://community-worldbank.p.rapidapi.com/datacatalog?format=json"
// );
// worldBankDataRequest.setRequestHeader("a", "b");
// worldBankDataRequest.send();
// worldBankDataRequest.onload = () => {
//   if (worldBankDataRequest.status == 200) {
//     const information = worldBankDataRequest.response;
//     const info = JSON.parse(information);
//     console.log(info);
//   } else {
//     console.log(`Error message: ${worldBankDataRequest.status}`);
//   }
// };

// // ************************ Getting data from API Endpoints with fetch() method ****************************************

// fetch("https://community-worldbank.p.rapidapi.com/datacatalog?format=json")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // *********************** Getting data from API Endpoints with fetch() with Async/Await ********************************

// async function worldBankData() {
//   const response = await fetch(
//     "https://community-worldbank.p.rapidapi.com/datacatalog?format=json"
//   );
//   const data = await response.json();
//   return data;
// }
// worldBankData().then((info) => console.log(info));
// worldBankData().catch((err) => console.log(err));

// // *********************** Getting data from API Endpoints with Axios with axios library********************************

// axios
//   .get("https://community-worldbank.p.rapidapi.com/datacatalog?format=json")
//   .then((response) => console.log(response.data)),
//   (err) => console.log(err);

// // *********************** Getting data from API Endpoints with jquery with jquery library********************************

// $(document).ready(function () {
//   $.ajax({
//     url: "https://community-worldbank.p.rapidapi.com/datacatalog?format=json",
//     type: "GET",
//     success: function (response) {
//       console.log(response);
//     },
//     error: function (err) {
//       console.log(err);
//     },
//   });
// });
// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);
// const sortedAges = ages.sort((a, b) => a - b);
// console.log(sortedAges);

// const companyTotalYears = companies.reduce(
//   (adder, currentValue) => adder + (currentValue.end - currentValue.start),
//   0
// );
// console.log(companyTotalYears);

// async function getWorldBankData() {
//   const response = await fetch(
//     "https://community-worldbank.p.rapidapi.com/datacatalog?format=json"
//   );
//   const data = await response.json();
//   return data.datacatalog;
// }
// getWorldBankData().then((info) => console.log(info));
// getWorldBankData().catch((err) => console.log(err));

// POST method with fetch()
// fetch("", {
//   method: "POST",
//   headers: "application/json",
//   body: JSON.stringify({ name: "Adelaja Adefemi Henry..." }),
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const newCompany = companies.slice(4, 6);
// console.clear();
// console.log(newCompany);

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("God is good..."));

//********************************* Recursive functions *********************************
// function countDown(n) {
//   if (n <= 0) {
//     console.log("i'm done!");
//     return 0;
//   } else {
//     console.log(n);
//     return countDown(n - 1);
//   }
// }
// // console.clear();
// console.log(countDown(20));

// function sumRange(n) {
//   if (n <= 0) {
//     console.log("i'm done!");
//     return 0;
//   } else {
//     console.log(n);
//     return n + sumRange(n - 1);
//   }
// }
// // console.clear();
// console.log(sumRange(20));

// const familyTree = {
//   name: "John",
//   children: [
//     {
//       name: "Jim",
//       children: [],
//     },
//     {
//       name: "Zoe",
//       children: [
//         { name: "Kyle", children: [] },
//         { name: "Sophia", children: [] },
//       ],
//     },
//   ],
// };

// function getChildrenNames(array) {
//   if (array.children.length == 0) {
//     return 0;
//   } else {
//     array.children.forEach((child) => {
//       console.log(child.name);
//       getChildrenNames(child);
//     });
//   }
// }

// getChildrenNames(familyTree);
