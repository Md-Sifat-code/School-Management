document.getElementById('singin').addEventListener('click',function(){
    window.location = 'singup.html';
})
// login success or not

document.getElementById('login').addEventListener('click',function(event){
    event.preventDefault();
    const x = document.getElementById('gmail').value;
    const y = document.getElementById('pass').value;
    if(x === '0112330046' && y === 'SifatCSE#0112330046'){
        window.location = 'Dash_board.html';
    }else{
        document.getElementById('login').onclick = function() {
            my_modal_1.showModal();
        };
        
    }

})