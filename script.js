function detectDevice() {
    var deviceType = document.getElementById("deviceType");
    var featureList = document.getElementById("featureList");

    if (window.innerWidth < 768) {
        deviceType.textContent = "You are using a mobile device.";

        featureList.innerHTML = `
            <div class="border rounded p-3 bg-gray-50">Mobile Feature 1</div>
            <div class="border rounded p-3 bg-gray-50">Mobile Feature 2</div>
        `;
    } 
    else if (window.innerWidth < 1024) {
        deviceType.textContent = "You are using a tablet.";

        featureList.innerHTML = `
            <div class="border rounded p-3 bg-gray-50">Tablet Feature 1</div>
            <div class="border rounded p-3 bg-gray-50">Tablet Feature 2</div>
        `;
    } 
    else {
        deviceType.textContent = "You are using a desktop.";

        featureList.innerHTML = `
            <div class="border rounded p-3 bg-gray-50">Desktop Feature 1</div>
            <div class="border rounded p-3 bg-gray-50">Desktop Feature 2</div>
        `;
    }
}

window.onload = detectDevice;
window.onresize = detectDevice;
