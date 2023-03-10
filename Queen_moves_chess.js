/* 
     In a chess board, the Queen can move diagonally, and streight in all the direction. Identify all the blocks
     where queen can go. given starting positions (i,j) 0<i<9 and 0<j<9
      ___ ___ ___ ___ ___ ___ ___ ___
   8 |___|___|___|_^_|___|___|___|_/_|
   7 |_\_|___|___|_^_|___|___|_/_|___|
   6 |___|_\_|___|_^_|___|_/_|___|___|
   5 |___|___|_\_|_^_|_/_|___|___|___|
   4 |_<_|_<_|_<_|_Q_|_>_|_>_|_>_|_>_|
   3 |___|___|_/_|_v_|_\_|___|___|___|
   2 |___|_/_|___|_v_|___|_\_|___|___|
   1 |_/_|___|___|_v_|___|___|_\_|___|
        1  2   3   4   5   6   7   8
   */

// given n= vertical blocks , m = horizontal blocks, qr= queen position i, qc= queen position j
queen_steps(4, 4, 4, 4)
function queen_steps(n, m, qr, qc) {
    let x = 0
    let y = 0;
    // top right
    y = qr;
    x = qc;
    
    while (y < n && x < m) {
        y++;
        x++;
        console.log('Top Right:', y, x)
    }
    
    // bottom right
    y = qr;
    x = qc;
    
    while (y > 1 && x < m) {
        y--;
        x++;
        console.log('Bottom Right:', y, x)
    }
    
    // top left
    y = qr;
    x = qc;
    while (y < n && x > 1) {
        y++;
        x--;
        console.log('Top Left:', y, x)
    }
    
    // bottom left
    y = qr;
    x = qc;
    while (y > 1 && x > 1) {
        x--;
        y--;
        console.log('Bottom Left:', y, x)
    }
    
    // top
    y = qr;
    x = qc;
    while (y < n) {
        y++
        console.log('top:', y, x)
    }
    
    
    // right
    y = qr;
    x = qc;
    while (x < m) {
        x++
        console.log('right:', y, x)
    }
    
    // bottom
    y = qr;
    x = qc;
    while (y > 1) {
        y--
        console.log('bottom:', y, x)
    }
    // left
    y = qr;
    x = qc;
    while (x > 1) {
        x--
        console.log('left:', y, x)
    }
    }
