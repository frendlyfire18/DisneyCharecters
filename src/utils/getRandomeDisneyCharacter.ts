const MAX_CHAR_ID = 400;

export const getRandomDisneyChar:(notThisOne?:number)=>number=(
    notThisOne
)=>{
    const char_id = Math.floor(Math.random()*MAX_CHAR_ID-1);
    if(char_id !== notThisOne) return char_id;
    return getRandomDisneyChar(notThisOne);
}

export const getOptionsForVote =()=>{
    const first_char = getRandomDisneyChar();
    const second_char = getRandomDisneyChar(first_char);

    return [first_char,second_char];
}