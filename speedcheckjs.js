const strings =[
    "The quick brown fox jumps over the lazy dog, demonstrating speed and agility in seconds.",
    "Students study diligently, striving for excellence in their academic pursuits and future careers.",
    "In a digital age, information flows rapidly, requiring students to adapt and process data efficiently.",
    "History's lessons guide us forward, shaping our understanding of society and culture.",
    "Curiosity fuels exploration, from the depths of the ocean to the far reaches of space.",
    "Artistic expression knows no bounds, allowing students to convey emotions and ideas.",
    "Music, with its melodies and rhythms, resonates deeply with the human soul.",
    "Sports instill discipline, teamwork, and determination in young athletes.",
    "The written word holds immense power, shaping minds and influencing perspectives.",
    "Students engage with technology, mastering tools that connect our global community.",
    "Environmental awareness inspires sustainable practices and stewardship of our planet.",
    "Leadership skills empower students to effect positive change in their communities.",
    "The bonds of friendship form during school years, enduring the tests of time.",
    "Cultural diversity enriches society, fostering tolerance and acceptance.",
    "Volunteering builds character and empathy, benefiting both students and society.",
    "Science fairs spark innovation, as students tackle real-world problems with creativity.",
    "Literature's characters and stories resonate with readers across generations.",
    "Nature's beauty beckons students outdoors, promoting physical and mental well-being.",
    "Exploration of the universe captivates young astronomers and space enthusiasts.",
    "Problem-solving skills are honed through challenging puzzles and games.",
    "Debates and discussions sharpen critical thinking and communication abilities.",
    "Educational goals drive students forward, fueling dreams of achievement.",
    "Art museums house treasures that inspire, allowing students to explore creativity.",
    "Historical sites tell the tales of the past, preserving our shared heritage.",
    "The power of education lies in its ability to shape the future of society.",
    "Science experiments provide hands-on learning, fostering a spirit of inquiry.",
    "Technology advances continue to revolutionize the way students learn and interact.",
    ]
        
    // appending the ist 
    function appendRandomString() {
    const randomIndex = Math.floor(Math.random() * strings.length);
    const randomString = strings[randomIndex];

    const output = document.getElementById('paragraph');
    output.textContent = randomString;
    resetCounter();
    if(x>0){
    x=x-1;
    }
   
    const resultElement = document.getElementById('result');
    resultElement.textContent = "";
    const accuracyElement=document.getElementById('accuracy');
    accuracyElement.textContent="";
    // var textareea=document.getElementById('textarea');

    // textareea.value= " ";
    clearTextarea()
    updatePlaceholder();
    // textareea.placeholder ="Start Typing the above sentence here...!!!";
    
//    


}
function clearTextarea() {
                // Get the textarea element by its ID
                var textarea = document.getElementById('textarea');
    
                // Clear the textarea's value
                textarea.value = "";
            }
        function updatePlaceholder() {
            // Get the textarea element by its ID
            var textarea = document.getElementById('textarea');

            // Set the placeholder attribute to your desired text
            textarea.placeholder = "Start Typing the above sentence here...!!!";
        }
//accuracy
function accuracyy(){
    const paragraphText = document.getElementById('paragraph').textContent;
    var userInput = document.getElementById('textarea').value;
    const accuracyElement = document.getElementById('accuracy');
    ac=0;
    for(let i=0;i<userInput.length;i++){
        if (paragraphText[i]===userInput[i]){
            ac=ac+1;
        }
    }
    var a=paragraphText.length;
    var b=userInput.length;
    let re=Math.ceil((ac/a)*100);
    accuracyElement.textContent = 'Accuuracy : '+re+'%';
    document.getElementById('accuracy').style.color="rgb(193, 193, 13)";

}
// comparing the values 
function compareStrings() {
    const paragraphText = document.getElementById('paragraph').textContent;
    var userInput = document.getElementById('textarea').value;
    const resultElement = document.getElementById('result');
    const accuracyElement=document.getElementById('accuracy');
    accuracyElement.textContent="";

    if (paragraphText === userInput) {

        resultElement.textContent = "Match! The strings are the same.";
        document.getElementById('result').style.color="rgb(23, 170, 23)";
        stopCounter();
        accuracyy();
    } else {
        resultElement.textContent = "No match. The strings you typed contains error.";
        document.getElementById('result').style.color="red";
        accuracyy();
    }
}
// timing 
let seconds = 0;
let intervalId;
let x=0;
function startCounter() {
    if(x==0){
        
        x=x+1;
    intervalId = setInterval(updateCounter, 1000); // Update the counter every 1000ms (1 second)
    }
}


function updateCounter() {
    seconds++;
    document.getElementById('counter').textContent = `${seconds} second${seconds !== 1 ? 's' : ''}`;
}
function stopCounter() {
    clearInterval(intervalId);
}
function resetCounter() {
    stopCounter(); // Stop the counter if it's running
    seconds = 0; // Reset the seconds
    document.getElementById('counter').textContent = '0 seconds'; // Update the display
}
