export const getRandomColorHex = ()=>{
    return '#'+[...Array(6)].map(() => Math.floor((Math.random() * 10)+6).toString(16)).join('');
}