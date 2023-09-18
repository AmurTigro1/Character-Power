function calculatePowerLevel() {
    const strength = parseInt(document.getElementById("strength").value);
    const intelligence = parseInt(document.getElementById("intelligence").value);
    const agility = parseInt(document.getElementById("agility").value);

   
    const powerLevel = strength + intelligence + agility;

    
    document.getElementById("powerLevel").textContent = `Power Level: ${powerLevel}`;
}


const characterInputs = document.querySelectorAll("input[type='number']");
characterInputs.forEach(input => {
    input.addEventListener("input", calculatePowerLevel);
});

calculatePowerLevel();