let jobTable = document.getElementById('wrapper');
let jobsAdded = 0;

function addJob(){
    jobsAdded++;

    // Get job info from user
    
    // Load data into db somehow

    // display job object
    const job = document.createElement('div');
    job.setAttribute('class', 'item');
    job.style.minHeight = '15vh';
    job.style.background = 'blue';
    job.innerHTML = `Job #${jobsAdded}`;
    jobTable.prepend(job);
}