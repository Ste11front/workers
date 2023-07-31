console.log('sono connesso');

function calculateResult(){
    const inputValue = document.getElementById('number').value;
    const number = parseFloat(inputValue);
    workerCalculus(number);
    const resultSpan = document.getElementById('result');
    resultSpan.innerText = 'sto lavorando, abbi pazienza...';
}


function workerCalculus(nbr){
    const worker = new Worker('./lavoratore.js');

    worker.postMessage(nbr)

    worker.onmessage = (msg) => {
        const resultSpan = document.getElementById('result');
        resultSpan.innerText = msg.data;
    };

}

// function strangeCalculus(nbr){
//     let res = 0;

//     for (let i = 0; i <= nbr; i++) {
//         if (i % 2 === 0) {
//             res += i;
//         }
//         if (i % 3 === 0) {
//             res -= i;
//         }
        
//     }

//     return res;
// }