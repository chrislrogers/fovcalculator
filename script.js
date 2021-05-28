const message = document.getElementById('message');

function calculateFOV() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let horizontalFOV = document.getElementById("horizontalFOV").value;
    let verticalFOV;

    if (width !== "" && height !== "" && horizontalFOV !== "") {

        // convert to radians
        horizontalFOV = horizontalFOV * (Math.PI / 180);

        // calculate vertical fov
        verticalFOV = 2 * Math.atan(Math.tan(horizontalFOV / 2) * (height / width));

        // convert to degrees
        verticalFOV = Math.round(verticalFOV * (180 / Math.PI));

        message.textContent = "Calculated vertical FOV: " + verticalFOV;
    } else {
        message.textContent = "All fields must be filled out.";
    }
}
