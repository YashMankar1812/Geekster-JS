document.addEventListener('DOMContentLoaded', function() {
    const playerForm = document.getElementById('playerForm');
    const playersList = document.getElementById('playersList');
    let players = [];
    
    // Load data from localStorage if available
    if(localStorage.getItem('leaderboardPlayers')) {
        players = JSON.parse(localStorage.getItem('leaderboardPlayers'));
        renderPlayers();
    }
    
    // Add new player
    playerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fname = document.querySelector('.fname').value.trim();
        const lname = document.querySelector('.lname').value.trim();
        const country = document.querySelector('.country').value.trim();
        const score = parseInt(document.querySelector('.score').value);
        
        if(!fname || !lname || !country || isNaN(score)) {
            showAlert('Please fill all fields with valid data');
            return;
        }
        
        const newPlayer = {
            id: Date.now(),
            fname,
            lname,
            country,
            score
        };
        
        players.push(newPlayer);
        saveData();
        renderPlayers();
        playerForm.reset();
        
        // Add animation to new player
        const newPlayerElement = document.querySelector(`[data-id="${newPlayer.id}"]`);
        if(newPlayerElement) {
            newPlayerElement.classList.add('fade-in');
        }
    });
    
    // Handle player actions
    playersList.addEventListener('click', function(e) {
        const playerId = parseInt(e.target.closest('.player-row')?.dataset.id);
        if(!playerId) return;
        
        const playerIndex = players.findIndex(p => p.id === playerId);
        if(playerIndex === -1) return;
        
        if(e.target.classList.contains('delete-btn')) {
            // Delete player
            players.splice(playerIndex, 1);
        } else if(e.target.classList.contains('add-points-btn')) {
            // Add 5 points
            players[playerIndex].score += 5;
        } else if(e.target.classList.contains('remove-points-btn')) {
            // Remove 5 points (minimum 0)
            players[playerIndex].score = Math.max(0, players[playerIndex].score - 5);
        }
        
        saveData();
        renderPlayers();
    });
    
    // Render players list
    function renderPlayers() {
        // Sort by score (descending)
        players.sort((a, b) => b.score - a.score);
        
        if(players.length === 0) {
            playersList.innerHTML = `
                <div class="player-header">
                    <div>Player Name</div>
                    <div>Country</div>
                    <div>Score</div>
                    <div class="player-actions">Actions</div>
                </div>
                <div class="empty-state">
                    <i class="fas fa-users fa-3x" style="opacity: 0.3; margin-bottom: 15px;"></i>
                    <h3>No players yet</h3>
                    <p>Add players to see them on the leaderboard</p>
                </div>
            `;
            return;
        }
        
        let html = `
            <div class="player-header">
                <div>Player Name</div>
                <div>Country</div>
                <div>Score</div>
                <div class="player-actions">Actions</div>
            </div>
        `;
        
        players.forEach((player, index) => {
            let medal = '';
            if(index === 0) medal = '<i class="fas fa-trophy gold medal"></i>';
            else if(index === 1) medal = '<i class="fas fa-trophy silver medal"></i>';
            else if(index === 2) medal = '<i class="fas fa-trophy bronze medal"></i>';
            
            html += `
            <div class="player-row" data-id="${player.id}">
            <div class="player-name">${medal}${player.fname} ${player.lname}</div>
            <div class="player-country">
                <i class="fas fa-globe"></i> ${player.country}
            </div>
            <div class="player-score">${player.score}</div>
            <div class="player-actions">
                <button class="action-btn delete-btn" title="Delete player">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="action-btn add-points-btn" title="Add 5 points">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="action-btn remove-points-btn" title="Remove 5 points">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
            `;
        });
        
        playersList.innerHTML = html;
    }
    
    // Save data to localStorage
    function saveData() {
        localStorage.setItem('leaderboardPlayers', JSON.stringify(players));
    }
    
    // Show alert message
    function showAlert(message) {
        const alert = document.createElement('div');
        alert.style.position = 'fixed';
        alert.style.top = '20px';
        alert.style.left = '50%';
        alert.style.transform = 'translateX(-50%)';
        alert.style.backgroundColor = '#e74c3c';
        alert.style.color = 'white';
        alert.style.padding = '15px 25px';
        alert.style.borderRadius = '5px';
        alert.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
        alert.style.zIndex = '1000';
        alert.style.animation = 'fadeIn 0.3s ease forwards';
        alert.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => alert.remove(), 300);
        }, 3000);
    }
});