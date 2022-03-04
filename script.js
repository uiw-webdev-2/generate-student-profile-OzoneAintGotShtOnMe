const studentProfile = {
    firstName: "Noah",
    lastName: "Torrey",
    email: "torrey@student.uiwtx.edu",
    pidm: "54321",
    school:"University of the Incarnate Word",
    gradeLevel:"Senior",
    avatar:"image.png",
    ImageAlt: "my beautiful, well defined face complete with so many features"
  };
  
const content = `
      <h1>${studentProfile.firstName} ${studentProfile.lastName}</h1>
      <ul>
        <li>Email address:<span> ${studentProfile.email}</span></li>
        <li>PIDM:<span> ${studentProfile.pidm}</span></li>
        <li>School: <span> ${studentProfile.school}</span></li>
        <li>Current grade level:<span> ${studentProfile.gradeLevel}</span></li>
      </ul>  
  `;

const createImage = (dataObj) => {
    let newImage = document.createElement("pic");
    newImage.setAttribute("src", dataObj.avatar);
    newImage.setAttribute("alt", dataObj.imageAlt);
    return newImage;
}

const populate = (profile) => {//
    let newArticle = document.createElement("article");
    newArticle.innerHTML = content;
    newArticle.prepend(createImage(studentProfile));
    return newArticle;
}



document.querySelector("main").append(populate(profile));
