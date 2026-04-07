let brazilScore = 0;
let franceScore = 0;

/* ----- helper to refresh the UI ----- */
function renderScores() {
  document.getElementById('scoreBrazil').textContent = brazilScore;
  document.getElementById('scoreFrance').textContent = franceScore;
}

/* ----- Brazil button handlers ----- */
function brasilOnePoint()   { brazilScore += 1; renderScores(); }
function brasilTwoPoints() { brazilScore += 2; renderScores(); }
function brasilThreePoints(){ brazilScore += 3; renderScores(); }

/* ----- France button handlers ----- */
function franceAddOnePoint()   { franceScore += 1; renderScores(); }
function franceAddTwoPoints() { franceScore += 2; renderScores(); }
function franceAddThreePoints(){ franceScore += 3; renderScores(); }

/* initialise display (in case the page is reloaded) */
renderScores();

// NEW
function resetScore() {
    brazilScore = 0;
    franceScore = 0;
    renderScores();
}





        // =====================
        // SHOT CLOCK (24 seconds)
        // =====================
        const SHOT_MAX_TIME = 24;
        let shotTimeLeft = SHOT_MAX_TIME;
        let shotTimerInterval = null;
        let shotIsRunning = false;

        const shotDisplayEl = document.getElementById('shotDisplay');
        const shotStartBtn = document.getElementById('shotStartBtn');
        const shotResetBtn = document.getElementById('shotResetBtn');

        function shotUpdateDisplay() {
            shotDisplayEl.textContent = shotTimeLeft;
        }

        function shotToggleTimer() {
            if (shotIsRunning) {
                clearInterval(shotTimerInterval);
                shotIsRunning = false;
                shotStartBtn.textContent = "Resume";
            } else {
                if (shotTimeLeft === 0) {
                    shotTimeLeft = SHOT_MAX_TIME;
                }
                
                shotIsRunning = true;
                shotStartBtn.textContent = "Pause";

                shotTimerInterval = setInterval(() => {
                    if (shotTimeLeft > 0) {
                        shotTimeLeft--;
                        shotUpdateDisplay();
                    } else {
                        clearInterval(shotTimerInterval);
                        shotIsRunning = false;
                        shotStartBtn.textContent = "Start";
                    }
                }, 1000);
            }
        }

        function shotResetTimer() {
            clearInterval(shotTimerInterval);
            shotIsRunning = false;
            shotTimeLeft = SHOT_MAX_TIME;
            shotUpdateDisplay();
            shotToggleTimer(); // Auto-start on reset
        }

        shotStartBtn.addEventListener('click', shotToggleTimer);
        shotResetBtn.addEventListener('click', shotResetTimer);
        shotUpdateDisplay();


        // =====================
        // MINUTE TIMER (10 minutes)
        // =====================
        const MINUTE_MAX_TIME = 600; // 10 minutes in seconds
        let minuteTimeLeft = MINUTE_MAX_TIME;
        let minuteTimerInterval = null;
        let minuteIsRunning = false;

        const minuteDisplayEl = document.getElementById('minuteDisplay');
        const minuteStartBtn = document.getElementById('minuteStartBtn');
        const minuteResetBtn = document.getElementById('minuteResetBtn');

        function formatMinuteTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        function minuteUpdateDisplay() {
            minuteDisplayEl.textContent = formatMinuteTime(minuteTimeLeft);
        }

        function minuteToggleTimer() {
            if (minuteIsRunning) {
                clearInterval(minuteTimerInterval);
                minuteIsRunning = false;
                minuteStartBtn.textContent = "Resume";
            } else {
                if (minuteTimeLeft === 0) {
                    minuteTimeLeft = MINUTE_MAX_TIME;
                }
                
                minuteIsRunning = true;
                minuteStartBtn.textContent = "Pause";

                minuteTimerInterval = setInterval(() => {
                    if (minuteTimeLeft > 0) {
                        minuteTimeLeft--;
                        minuteUpdateDisplay();
                    } else {
                        clearInterval(minuteTimerInterval);
                        minuteIsRunning = false;
                        minuteStartBtn.textContent = "Start";
                    }
                }, 1000);
            }
        }

        function minuteResetTimer() {
            clearInterval(minuteTimerInterval);
            minuteIsRunning = false;
            minuteTimeLeft = MINUTE_MAX_TIME;
            minuteUpdateDisplay();
            minuteStartBtn.textContent = "Start"; // Does NOT auto-start
        }

        minuteStartBtn.addEventListener('click', minuteToggleTimer);
        minuteResetBtn.addEventListener('click', minuteResetTimer);
        minuteUpdateDisplay();