let table = document.getElementById('wrapper');
let job_number = 1;

function addJob(){

    window.location = "AddPage.html";

    let job = document.createElement('div');
    job.setAttribute('class', 'item');
    job.innerText = "job_"+job_number;
    job_number++;
    
    table.append(job);

}