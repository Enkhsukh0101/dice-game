// Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
// Тоглогчын цуглуулсан оноог хадгалах хувьсагч.
var scores = [0, 0];
// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч.
var roundScore = 0;
// Шооны аль талаараа аль талаараа буусаныг хадгалах хувьсагч,1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

//<div class="player-score" id="score-0">43</div>
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// document.querySelector(".dice").style.display = "none"; ийм аргаар бас бичиж болно.
    //Шоог шидэх эвент листенер.
document.querySelector(".btn-roll").addEventListener("click",function(){
    //1-6 доторх санамсаргүй нэг тоог гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шооны зурагыг вэб дээр гаргаж ирнэ.
    document.querySelector(".dice").style.display = "block"; 
    //Буусан санамсаргүй тоонд харгалзах шооны зургыг вэб дээр гаргаж ирнэ.
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
    //Тоглогчын ээлжийн оноог өөрчилнө.

    if(diceNumber !== 1){
        //1-ээс ялгаатай тоо буулаа.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {

        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;


        // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); 

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        // diceDom.style.display = "none";

         //  1 - буусан тул тоглогчийн ээлжийг сольж өгнө.
        if(activePlayer === 0 ){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        

    }

});
