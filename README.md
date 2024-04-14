

Click here to copy: <span id="copyText">Text to copy</span>

<script>
    document.getElementById("copyText").onclick = function() {
        var textToCopy = "Text to copy"; // Replace with the actual text you want to copy
        var textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Text copied to clipboard: " + textToCopy);
    };
</script>
