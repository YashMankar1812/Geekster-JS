const dadJokes = [

    "What do you call a factory that makes okay products?   A satisfactory. 🏭",
    
    "Why don't some couples go to the gym? Because some relationships don't work out.  😜😜🤭💪" ,
        
    "Why don't 💀 skeletons fight each other?   They don't have the guts. 😜",
    
    "🤓I'm reading a book about anti-gravity. It's impossible to put down.",
    
    "I'm not a baker, but I'm feeling crumby today.",
    
    "How do you catch a squirrel? Climb a tree and act like a nut! 🌰",
    
    "What do you call cheese that isn't yours?  Nacho cheese! 🧀",
    
    "🤔 Why did the bicycle fall over? Because it was two-tired. 🚲 ",
    
    "🤔 Why do chicken coops only have two doors? Because if they had four, they would be a sedan. 🚘 😜",
    
    "How do you organize a space party? You planet. 🌌 ",
    
    " Why did the math book📚 look sad ☹️? Because it had too many problems. 🤣" ,
    
    "What did the ocean say to the beach? Nothing, it just waved. 🌊 ",
    
    "How do you make a tissue dance ? Put a little boogie in it. 🤧 ",
    
    " 🤨 Why don't eggs tell jokes? They'd crack each other up. 🥚  🤣🤣 ",
    
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    
    
    ];



    // Generate random Joke 
    
        function generateDadJoke() {
          const randomIndex = Math.floor(Math.random() * dadJokes.length);
          return dadJokes[randomIndex];
        }

        document.getElementById('generate-joke').addEventListener('click', function() {
          var messageElement = document.getElementById('message');
          messageElement.textContent = 'Processing...';
          messageElement.classList.add('hidden');
          messageElement.classList.remove('hidden');
          setTimeout(function() {
            messageElement.textContent = generateDadJoke();
          }, 2000);
          playClickSound();
      });
    
        function playClickSound() {
        const sound = document.getElementById('click-sound');
        sound.currentTime = 0; 
        sound.play(); 
    }
    
    
    
    
    
    //    Emoji generater 
    
        const emojis = [
          "😀", "😂", "😍", "😎", "🤔", "🤪", "😜", "🤓","🤣","🤭","🫠","🙃",
          "🤗", "🥳",  "😇", "🤖", "👻",
        ];
    
        const emojiElement = document.getElementById("emoji");
        let currentIndex = 0;
    
        function changeEmoji() {
          emojiElement.textContent = emojis[currentIndex];
          emojiElement.style.transform = 'scale(1.2)';
          
          setTimeout(() => {
            emojiElement.style.transform = 'scale(1)';
          }, 300);
    
          currentIndex = (currentIndex + 1) % emojis.length;
        }
    
        setInterval(changeEmoji, 2000); // Change emoji every 1000 milliseconds (1 second)






