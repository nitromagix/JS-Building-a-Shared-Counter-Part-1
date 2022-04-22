const HTTP = "https://";

async function getData() {
    let response = await fetch("http://127.0.0.1:9002/goobi");
    let responseText =  await response.text();
    return responseText;
}

let cr = console.log;

// cr("test");
// cr(getUrl("www.google.com"));

const main = async () => {
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    let text = await getData();
    let jsonString = JSON.stringify(text);
    cr(jsonString);

    let countValue = 0;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}



main()


