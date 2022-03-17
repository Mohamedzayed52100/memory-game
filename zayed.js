document.getElementById('span').onclick = function() {
    let name = prompt('Enter a name');
    name = name.trim();
    if (name == '') {
        document.querySelector('.name span').innerHTML = 'unknow';

    } else {
        document.querySelector('.name span').innerHTML = name;

    }

    document.getElementById('controlbutton').remove();
}


let duration = 1000;
let blockscontainer = document.querySelector('.memorygameblocks');
let blocks = Array.from(blockscontainer.children);
console.log(blocks);

let orderrange = [...Array(blocks.length).keys()];
suffle(orderrange);

blocks.forEach(function(block, index) {

    block.style.order = orderrange[index];


    block.addEventListener('click', function() {



        filpflop(block);

    });


});
//suffle function

function suffle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp;


    }

    return array;

}


function filpflop(flop) {
    flop.classList.add('is_flipped');
    let allflipedblocks = blocks.filter(filppedblock => filppedblock.classList.contains('is_flipped'));

    if (allflipedblocks.length == 2) {
        stopclicking();
        checkmatchedblocks(allflipedblocks[0], allflipedblocks[1]);



    }

}

function stopclicking() {
    blockscontainer.classList.add('noclicking');
    setTimeout(function() {
        blockscontainer.classList.remove('noclicking');

    }, duration);


}



function checkmatchedblocks(one, two) {
    let triesElement = document.getElementById('haha');
    if (one.dataset.technology === two.dataset.technology) {
        one.classList.remove('is_flipped');
        two.classList.remove('is_flipped');
        one.classList.add('has_matched');
        two.classList.add('has_matched');

    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(function() {

            one.classList.remove('is_flipped');
            two.classList.remove('is_flipped');
        }, duration);

    }




}