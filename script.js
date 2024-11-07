

let currentplayer="X";
let array=Array(9).fill(null);

function checkWinner()
{
   if(
    (array[0] !== null && array[0] == array[1] && array[1] == array[2] )||
   (array[3]!==null && array[3]==array[4] && array[4]==array[5]) ||
    (array[6]!==null && array[6]==array[7] && array[7]==array[8]) || 
    (array[0]!==null &&  array[0]==array[4] && array[4]==array[8]) ||
    (array[2]!==null &&  array[2]==array[4] && array[4]==array[6]) ||
    (array[0]!==null &&  array[0]==array[3] && array[3]==array[6]) ||
    (array[2]!==null &&  array[2]==array[5] && array[5]==array[8]) ||
    (array[1]!==null &&  array[1]==array[4] && array[4]==array[7])
    )
   
    {
  document.write(`winner is ${currentplayer}`);
  return;
    }  
   if(!array.some((e)=> e === null))
   {
    document.write(`Draw!!`);
    return;
   }
}

function handleclick(el)
{
   
       const id=Number(el.id);
       if(array[id]!==null) return;
       array[id]=currentplayer;
       el.innerText=currentplayer;
    
       checkWinner();
       currentplayer=currentplayer === 'X' ? '0': 'X';
  
       console.log(array);
}