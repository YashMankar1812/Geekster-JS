document.getElementById('ageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const birthdate = new Date(document.getElementById('birthdate').value);
        const age = calculateAge(birthdate);

        document.getElementById('result').textContent = ` You are ${age.years}  years ,  ${age.months} months , ${age.days} days old `;
    });
    
    function calculateAge(birthdate) {
        const today = new Date();
        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let days = today.getDate() - birthdate.getDate();
    
        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days = lastMonth.getDate() + days; 
        }
    
    
        if (months < 0) {
            years--;
            months += 12; 
        }
    
        return { years, months, days };
    }
    
