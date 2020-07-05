class NYTIME {
  constructor() 
  {
    this.client_id = '9f0a9056-7b56-4588-a92f-0812c106cdd2';
	this.client_key='XIcIoEHd3VYGqLa1wfNimqVDfbZqnsqY';
    this.client_secret = 'i0mzuGPn20LryIIq';
    this.news_count = 10;
    this.news_sort = 'created: asc';
  }
   
  async getUser(startyear,endyear,article_topic) {
	 
    const Response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${article_topic}&fq=source:("The New York Times")&page=0&sort=oldest&api-key=XIcIoEHd3VYGqLa1wfNimqVDfbZqnsqY`); 
    console.log(Response)
    const profile=await Response.json();
	
	for (var i=0;i<10;i++)
	{
	console.log(profile.response.docs[i]);
	console.log(profile.response.docs[i].abstract);
	console.log(profile.response.docs[i].web_url);
	console.log(profile.response.docs[i]._id);
	console.log(profile.response.docs[i].headline.print_headline);
	console.log(profile.response.docs[i].print_page);
	
	
	document.getElementById('pro'+i).innerHTML = `
	<div></div>
      <div class="card card-body mb-3">
        <div class="row">  
           
	<a href=${profile.response.docs[i].web_url}>${profile.response.docs[i].headline.print_headline}-->${profile.response.docs[i].abstract}/page_no:${profile.response.docs[i].print_page}</a>		
			
		  </div>
		 </div>
	 </div>
    `;
	}
    
	return {
      profile:profile.response
    }
	
  }
}