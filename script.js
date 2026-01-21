//your JS code here. If required.
function removeColor() {
    const selectElement = document.getElementById("colorSelect");

    if (selectElement.selectedIndex !== -1) {
        selectElement.remove(selectElement.selectedIndex);
    }
}