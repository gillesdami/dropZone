/**
 * Read the files dropped in a domElement with a specified method and return the result
 *
 * @licence MIT
 * @param domElement DOMElement that will proc file loading on drop
 * @param callback function receiving the content of the file
 * @param readingMethod String (optional) reading method should be
 * "readAsArrayBuffer"|"readAsBinaryString"|"readAsDataURL"(default)|"readAsText"
 */
function dropZone(domElement, callback, readingMethod) {
    if(!readingMethod) {
        readingMethod = "readAsDataURL";
    }

    //optional, add visual effect on compatible browser
    domElement.addEventListener('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });

    domElement.addEventListener('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();

        var files = e.dataTransfer.files; // Array of all files (empty if none)

        for (var i = 0, file; file = files[i]; i++) {
            var reader = new FileReader();

            reader.onload = function (e2) {
                callback(e2.target.result);
            };

            reader[readingMethod](file);
        }
    });
}
