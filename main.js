// The Turn For Player
let turn = 'x' ;

// The title
let title = document.querySelector('.title') ;

// Array The Game
let square = [] ;

// End Function
function end(num1,num2,num3) {
    document.getElementById('item' + num1).style.background = "rgb(3, 0, 207)";
    document.getElementById('item' + num2).style.background = "rgb(3, 0, 207)";
    document.getElementById('item' + num3).style.background = "rgb(3, 0, 207)";
    title.innerHTML = `Winner is ${square[num1]}`;
    setInterval(function() {
        title.innerHTML += '.' ;
    },1000);
    setTimeout( function () {
        location.reload();
    },4000);
}

// Draw function
function Draw() {
    title.innerHTML = `Draw`;
    setInterval(function() {
        title.innerHTML += '.' ;
    },1000);
    setTimeout( function () {
        location.reload();
    },4000);
}

// Function Winner
function winner () {
    // Save The Element In The Array
    for(let i = 1 ; i < 10 ; i++) {
        square[i] = document.getElementById('item' + i).innerHTML;
    }
    // The row
    if(square[1] === square[2] && square[2] === square[3] && square[1] !== '') {
        end(1,2,3);
    } else if(square[4] === square[5] && square[5] === square[6] && square[4] !== '') {
        end(4,5,6);
    } else if(square[7] === square[8] && square[8] === square[9] && square[7] !== '') {
        end(7,8,9);
    }
    // The Column
    else if (square[1] === square[4] && square[4] === square[7] && square[1] !== '') {
        end(1,4,7);
    } else if (square[2] === square[5] && square[5] === square[8] && square[2] !== '') {
        end(2,5,8);
    }else if (square[3] === square[6] && square[6] === square[9] && square[3] !== '') {
        end(3,6,9);
    }
    // The Quter
    else if (square[1] === square[5] && square[5] === square[9] && square[1] !== '') {
        end(1,5,9);
    }
    else if (square[3] === square[5] && square[5] === square[7] && square[3] !== '') {
        end(3,5,7);
    } else {
        if(square[1] !== '' && square[2] !== '' && square[3] !== '' && square[4] !== '' && square[5] !== '' && square[6] !== '' && square[7] !== '' && square[8] !== '' && square[9] !== '') {
            Draw();
        }
    }
}


// Function Inputs
function game(id) {
    let ele = document.getElementById(id);
    if(turn === 'x' && ele.innerHTML === '') {
        ele.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'o' ; 
        title.classList.add("word");
        // ele.classList.add("clicked");
        // console.log(id);
    } else if (turn === 'o' && ele.innerHTML === '') {
        ele.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'x';
        title.classList.add("word");
        // ele.classList.add("clicked");
    }
    winner();
}

