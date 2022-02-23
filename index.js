let content = document.querySelector(".js-generated.content");

let header = document.createElement("h1");
header.setAttribute("class", "dog-name");
header.append("Rizzo");
content.append(header);

let dogContent = document.createElement("div");
let image = document.createElement("img");
dogContent.setAttribute("class", "dog-content");
image.setAttribute("class", "dog-image");
image.setAttribute("src", "./assets/rizzo.jpg");

content.append(dogContent);
dogContent.append(image);

let dogDetails = document.createElement("div");
dogDetails.setAttribute("class", "dog-details");

dogContent.append(dogDetails);

let subHeader = document.createElement("h3");
subHeader.textContent = "Description:";

dogDetails.append(subHeader);

let description = document.createElement("p");
description.textContent =
  "This gentle dog is aloof toward her owner, and never comes when called.\
                        She always acts as though any stranger she meets will harm her,\
                        and dislikes other animals.";

dogDetails.append(description);

let times = document.createElement("h3");
times.textContent = "Feeding Times:";

dogDetails.append(times);

let list = document.createElement("ul");
let listItemOne = document.createElement("li");
let listItemTwo = document.createElement("li");
let listItemThree = document.createElement("li");

listItemOne.textContent = "9:00 am";
listItemTwo.textContent = "12:00 pm";
listItemThree.textContent = "5:00 pm";

dogDetails.append(list);
list.append(listItemOne);
list.append(listItemTwo);
list.append(listItemThree);
