
const nytime = new NYTIME;
// Init UI
const ui = new UI;

// Search input

// Search input event listener
getit.addEventListener('click', () => {
  // Get input text
 startyear = document.getElementById("startyear").value;
 endyear= document.getElementById("endyear").value;
 article_topic = document.getElementById("article").value;
 
  if(article_topic !== ''){
   // Make http call
   nytime.getUser(startyear,endyear,article_topic)
    .then(profile => {
      if(profile == '') {
        // Show alert
        ui.showAlert('User not found');
      } else {
        // Show profile
        ui.showProfile(profile.response.docs);          		
      }
    });
  } else {
    // Clear profile
    ui.clearPro();
  }
}); 
