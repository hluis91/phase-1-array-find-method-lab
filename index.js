// code your solution here

function superbowlWin(array){
    const yearWin = array.find(win => win.result === 'W')
    if(yearWin){
        return yearWin.year
    } else{
        return undefined
    }
}





















































// function superbowlWin(win) {
//     const winFound = win.find(obj => obj.result === "W");
//     if (winFound){
//         return winFound.year;
//     } else {
//         return undefined;
//     }
// }






















