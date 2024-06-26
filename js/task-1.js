const list = document.querySelectorAll("ul#categories .item");
console.log(`Number of categories: ${list.length}`);
list.forEach(element => {
    const categoryName = element.querySelector("h2");
    console.log(`Category: ${categoryName.textContent}`);
    const categoryElementsAmount = element.querySelectorAll("li");
    console.log(`Elements: ${categoryElementsAmount.length}`);
});





/**for (let i = 1; i <= list.length; i++) {
    amount += 1;
    console.log(document.querySelectorAll("h2"));
}
console.log(`Number of categories: ${amount}`);
let headers = document.querySelectorAll("h2");
headers.forEach(element => {
    let header = element.textContent;
    console.log(header);
});*/

