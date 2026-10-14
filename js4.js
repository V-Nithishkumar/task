let textname = document.getElementById('textname');
let idsubmit = document.getElementById('idsubmit');
let tasklist = document.getElementById('tasklist');
let totask = document.getElementById('totask');
let comp = document.getElementById('comp');
let rem = document.getElementById('rem');

let list = [];
let compcount = 0;

function update() {
    let total = list.length;
    let remaining = total - compcount;
    
    totask.innerText = total;
    comp.innerText = compcount;
    rem.innerText = remaining;
}

idsubmit.addEventListener('click', () => {
    if (textname.value.trim() === '') {
        alert("PLEASE ENTER A VALUE FOR FURTHER PROCESS")
        return
    }
    let tasktext=textname.value
    list.push(tasktext)

    


    let li = document.createElement('li');
    li.classList.add('tasklist','listval')
    li.innerText = tasktext;
//below code for marking thr task is completed or not and change number
    li.style.cursor = 'pointer';
    li.addEventListener('click', () => {
        if (li.style.textDecoration === 'line-through') {
            li.style.textDecoration = 'none';
            compcount--;
        } else {
            li.style.textDecoration = 'line-through';
            compcount++;
        }
        update();
    });
    // below code for delete btnn
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('tasklist','delete');
    deleteBtn.addEventListener('click', (e) => {                                                                                                    
        e.stopPropagation();// stp the code from further executions if this reached
        if (li.style.textDecoration === 'line-through') {
            compcount--;
        }
        let currentind=list.indexOf(tasktext)
        if(currentind>-1){
            list.splice(currentind,1);
        }
        li.remove();
        update();
    });
    li.appendChild(deleteBtn);
    tasklist.appendChild(li);
    textname.value = '';

    update();
});
