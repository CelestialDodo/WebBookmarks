## These are the bookmarks for each website ##

trex-runner.com: javascript:(function(){    fetch('https://raw.githubusercontent.com/CelestialDodo/WebBookmarks/main/BookmarkCode/DinoGame.js')    .then(response => response.text())    .then(scriptText => {        (new Function(scriptText))();    });})();

<span onclick="copyTextToClipboard('Text to copy')">Click here to copy</span>

<script>
    function copyTextToClipboard(text) {
        var textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
</script>
