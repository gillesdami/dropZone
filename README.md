# dropZone
Transform any DOMElement into a drag and drop zone to download files in one line of code

# License: MIT
# Doc
## dropZone(domElement, callback, readingMethod)
  - __DOMElement domElement__ that will proc file loading on drop
  - __function callback__ function receiving the content of the file
  - __String readingMethod (optional)__ reading method should be "readAsArrayBuffer"|"readAsBinaryString"|"readAsDataURL"(default)|"readAsText"
