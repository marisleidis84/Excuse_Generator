function onLoad() {


    let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
    let what = ['eat', 'pissed', 'crushed', 'broked'];
    let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];
    
    let whoLength = 0;
    let whatLength = 0;
    let whenLength = 0;

    whoLength = Math.floor(Math.random() * who.length);
    whatLength = Math.floor(Math.random() * what.length);
    whenLength = Math.floor(Math.random() * when.length);

    return(`${who[whoLength]} ${what[whatLength]} ${when[whenLength]}`);
}
document.querySelector('#excusa').innerHTML = onLoad();