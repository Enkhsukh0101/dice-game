// Тоглоом дуусах эсэхийг хадгалах төлөвийн хувьсагч.
var isNewGame;
// Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
// Тоглогчын цуглуулсан оноог хадгалах хувьсагч.
var scores = [0, 0];
// Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч.
var roundScore = 0;
// Шооны аль талаараа аль талаараа буусаныг хадгалах хувьсагч,1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

var diceDom = document.querySelector(".dice");
//Тоглоомыг эхлүүлнэ.
initGame(); 

//Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame(){
// Тоглоом эхллээ гэдэг төлөвт оруулна.
isNewGame = true;

    // Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
    activePlayer = 0;
    // Тоглогчын цуглуулсан оноог хадгалах хувьсагч.
    scores = [0, 0];
    // Тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч.
    roundScore = 0;
    // Шооны аль талаараа аль талаараа буусаныг хадгалах хувьсагч,1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

//<div class="player-score" id="score-0">43</div>
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
//Тоглогчдын нэрийг буцааж гаргая.
document.getElementById('name-0').textContent = "Player 1";
document.getElementById('name-1').textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display = "none";
}

// document.querySelector(".dice").style.display = "none"; ийм аргаар бас бичиж болно.
    
    //Шоог шидэх эвент листенер.
    document.querySelector(".btn-roll").addEventListener("click",function(){
    if(isNewGame){
            //1-6 доторх санамсаргүй нэг тоог гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    
    //Шооны зурагыг вэб дээр гаргаж ирнэ.
    // document.querySelector(".dice").style.display = "block"; 
    
    //Буусан санамсаргүй тоонд харгалзах шооны зургыг вэб дээр гаргаж ирнэ.
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
    
    //Тоглогчын ээлжийн оноог өөрчилнө.

    if(diceNumber !== 1){
        //1-ээс ялгаатай тоо буулаа.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        switchToNextPlayer();
    }
    } else {
        alert("Тоглоом дуусан байна.NEW GAME товчийг дарж шинээр эхлүүлнэ үү.")
    }

});

//HOLD товчны эвент листенэр.
document.querySelector('.btn-hold').addEventListener('click', function () {
    if(isNewGame){
        scores[activePlayer] = scores[activePlayer] + roundScore;
    
        //Дэлгэц дээр оноог өөрчилнө.
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        
        // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах.
        if(scores[activePlayer] >= 10){
            // Тоглоомыг дууссан төлөвт оруулна.
            isNewGame = false;
            
            // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана. 
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
            
            //Улаан цэгийг шилжүүлнэ.
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        } else {
            // Шоог түр алга болгоно.
            switchToNextPlayer();       
        }
        } else {
            alert("Тоглоом дуусан байна.NEW GAME товчийг дарж шинээр эхлүүлнэ үү.");
        }
    
        });

    function switchToNextPlayer(){
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;

        //Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлэх.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); 
        
        //Улаан цэгийг алга болгоно.
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        
        //Шоог түр алга болгоно.
        diceDom.style.display = "none";
}
//Шинэ тоглоом эхлүүлэх товчны эвент листенер.
document.querySelector(".btn-new").addEventListener("click", initGame);



