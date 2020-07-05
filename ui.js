class UI {
  constructor() {
    this.prof = document.getElementById('docm');
  }

  // Display profile in UI
  showProfile(user) {	  
    document.getElementById('docm').innerHTML = `
	<div></div>
      <div class="card card-body mb-3">
        <div class="row">  
           
            <a href=${user.web_url}>${user.headline.print_headline}+"\n"+${user.abstract}</a>		
			
		  </div>
		 </div>
	 </div>
    `;
  }
  showAlert(message){	  
	  this.prof.innerHTML='<div class="card card-body mb-3">"NOT FOUND"</div>';
  }
}