document.getElementById("other_pets").addEventListener("change", toggleSpeciesInput);
function toggleSpeciesInput() {
    var otherPetsCheckbox = document.getElementById('other_pets');
    var speciesInput = document.getElementById('species_input');
    if (otherPetsCheckbox.checked) {
        speciesInput.style.display = 'block';
    } else {
        speciesInput.style.display = 'none';
    }
}
function toggleChildAgeInput() {
    var childrenCheckbox = document.getElementById('children');
    var childAgeInput = document.getElementById('child_age_input');
    if (childrenCheckbox.checked) {
        childAgeInput.style.display = 'block';
    } else {
        childAgeInput.style.display = 'none';
    }
}