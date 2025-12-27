document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('text-area');
    const colorPicker = document.getElementById('color');
    const addBtn = document.getElementById('btn');
    const notesContainer = document.getElementById('notes_container');
    const clickSound = document.getElementById('click-sound');
    const addSound = document.getElementById('add-sound');
    
    // Load notes from localStorage
    loadNotes();
    
    // Add note event
    addBtn.addEventListener('click', function() {
        addNote();
    });
    
    // Add note when Enter is pressed with Ctrl
    textArea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            addNote();
        }
    });
    
    function addNote() {
        const noteText = textArea.value.trim();
        const noteColor = colorPicker.value;
        
        if (noteText) {
            // Play add sound
            addSound.currentTime = 0;
            addSound.play();
            
            // Create note element
            const note = document.createElement('div');
            note.className = 'note';
            note.style.backgroundColor = noteColor;
            
            const noteContent = document.createElement('div');
            noteContent.className = 'note-content';
            noteContent.textContent = noteText;
            
            const noteActions = document.createElement('div');
            noteActions.className = 'note-actions';
            
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.addEventListener('click', function() {
                clickSound.currentTime = 0;
                clickSound.play();
                note.remove();
                saveNotes();
                checkEmptyState();
            });
            
            noteActions.appendChild(deleteBtn);
            note.appendChild(noteContent);
            note.appendChild(noteActions);
            
            // Remove empty state if it exists
            const emptyState = notesContainer.querySelector('.empty-state');
            if (emptyState) {
                emptyState.remove();
            }
            
            notesContainer.appendChild(note);
            
            // Clear textarea
            textArea.value = '';
            
            // Save notes to localStorage
            saveNotes();
        }
    }
    
    function saveNotes() {
        const notes = [];
        document.querySelectorAll('.note').forEach(note => {
            notes.push({
                text: note.querySelector('.note-content').textContent,
                color: note.style.backgroundColor
            });
        });
        localStorage.setItem('sticky-notes', JSON.stringify(notes));
    }
    
    function loadNotes() {
        const savedNotes = JSON.parse(localStorage.getItem('sticky-notes'));
        if (savedNotes && savedNotes.length > 0) {
            // Remove empty state
            const emptyState = notesContainer.querySelector('.empty-state');
            if (emptyState) {
                emptyState.remove();
            }
            
            // Add saved notes
            savedNotes.forEach(note => {
                const noteElement = document.createElement('div');
                noteElement.className = 'note';
                noteElement.style.backgroundColor = note.color;
                
                const noteContent = document.createElement('div');
                noteContent.className = 'note-content';
                noteContent.textContent = note.text;
                
                const noteActions = document.createElement('div');
                noteActions.className = 'note-actions';
                
                const deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
                deleteBtn.addEventListener('click', function() {
                    clickSound.currentTime = 0;
                    clickSound.play();
                    noteElement.remove();
                    saveNotes();
                    checkEmptyState();
                });
                
                noteActions.appendChild(deleteBtn);
                noteElement.appendChild(noteContent);
                noteElement.appendChild(noteActions);
                
                notesContainer.appendChild(noteElement);
            });
        }
    }
    
    function checkEmptyState() {
        if (notesContainer.children.length === 0) {
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <i class="fas fa-sticky-note"></i>
                <p>No notes yet. Add your first note!</p>
            `;
            notesContainer.appendChild(emptyState);
        }
    }
    
    // Play click sound for all buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            clickSound.currentTime = 0;
            clickSound.play();
        });
    });
});