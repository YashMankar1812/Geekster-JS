const timeFactButton = document.getElementById("time-fact");  
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  let message = '';
  
  if (h > 12) {
      h = h - 12;
      ampm = "PM";
    }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
 

// add script for this 

timeFactButton.addEventListener("click", function() {
    const fact = ["The oldest person to walk on the moon was Neil Armstrong in 1969.", "The world's oldest clock is the Egyptian Pyramids' Great Clock at Giza.", "The oldest man to play piano was Antonio Vivaldi, who lived from 1685 to 1750.", "The oldest known book is the 'Great Expectations' by Charles Dickens.", "The oldest living person"
     ];
    const randomFact = fact[Math.floor(Math.random() * fact.length)];
    document.getElementById("fact").innerText = randomFact;
    document.getElementById("message").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("message").classList.add("hidden");
    }, 3000);
    });
   

    
    


    // <!-- add theme section ike retro digital and analog  -->
    // <div class="theme-section">
    //     <h2>Choose Your Theme</h2>
    //     <label for="retro">Retro Digital Clock</label>
    //     <input type="radio" id="retro" name="theme" value="retro">
    //     <label for="analog">Analog Clock</label>
    //     <input type="radio" id="analog" name="theme" value="analog" checked>
    // </div>
    // <!-- add button to change time format -->
    // <button class="button" id="change-time-format">Change Time Format</button>
     
    // make code for this 


    document.addEventListener("DOMContentLoaded", function() {
      const themeSelect = document.getElementById('theme-select');
  
      themeSelect.addEventListener('change', function() {
          const selectedTheme = themeSelect.value;
  
          // Remove any previously applied theme classes
          document.body.classList.remove('digital-theme', 'analog-theme', 'retro-theme');
  
          // Apply the selected theme class
          if (selectedTheme === 'digital') {
              document.body.classList.add('digital-theme');
              // Add the appropriate time format button
              document.getElementById('change-time-format').innerText = 'Change to 12-hour Format';
              // Change the time format button click event
              document.getElementById('change-time-format').addEventListener('click', function() {
                  const currentFormat = document.getElementById('change-time-format').innerText;
                  const newFormat = currentFormat === 'Change to 12-hour Format'? 'Change to 24-hour Format' : 'Change to 12-hour Format';
                  document.getElementById('change-time-format').innerText = newFormat;
              });
            

          } else if (selectedTheme === 'analog') {
              document.body.classList.add('analog-theme');
          } else if (selectedTheme === 'retro') {
              document.body.classList.add('retro-theme');
          }
      });
  });
  
  



    




    
