export const jobTemplate = (job, currency) => {
    let salaryString = "";
    if (job.salary_max){
      salaryString = ` up to ${currency}${job.salary_max}`;
    }else{
      //Set salaryString equal to a new string that lets the user know they didn't list a salary
    }
  
    return `
    <div class="card">
      <div class="card-body">
      <h4 class="card-title">${job.title}${salaryString}</h4>
      <h5>${job.location.display_name}</h5>
      <p class="card-text">${job.description}</p>
      <a href="${job.redirect_url}">View Job</a>
      </div>
    </div>
    `;
  }

//export const jobTemplate = (job, currency) => `
//<div class="card">    
//    <div class="card-body">
//        <h4 class="card-title">${job.title} up to ${currency}${job.salary_max}</h4>
//        <h5>${job.location.display_name}<h5>
//        <p class="card-text">${job.description}</p>
//        <a href="${job.redirect_url}" target="_blank">View Job</a>
//    </div>
//</div>
//`;