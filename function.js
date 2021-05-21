
let hisBirthTime = new Date( 1897, 5, 21, 0, 0 );

function updateP() {
  let now = new Date();
  let seconds = (now.getTime()-hisBirthTime.getTime())/1000;
  let message = `生まれてから${Math.floor(seconds)}秒経過しています。`;
  document.getElementById('birth-time').innerText = message;
   }
  
  function updateDiv() {
  	let now = new Date();
    let days = (now.getTime()-hisBirthTime.getTime())/(1000*60*60*24);
    let bun = `生まれてから${Math.floor(days)}日目です。`;
    document.getElementById('birth-days').innerText= bun;
  }

  setInterval(updateP,1000);
  setInterval(updateDiv,1000);