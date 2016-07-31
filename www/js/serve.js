<script>
(function() {
        var methods = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" ");
        var console = (window.console=window.console || {});
        var logCount = 0;
        window.onerror = function(msg, url, line) {
          if(msg && url) console.error(msg, url, (line ? "Line: " + line : ""));
        };
        function sendConsoleLog(method, args) {
          try {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/__ionic-cli/console", true);
            xhr.send(JSON.stringify({ index: logCount, method: method, ts: Date.now(), args: args }));
            logCount++;
          } catch(e){}
        }
        for(var x=0; x<methods.length; x++) {
          (function(m){
            var orgConsole = console[m];
            console[m] = function() {
              try {
                sendConsoleLog(m, Array.prototype.slice.call(arguments));
                if(orgConsole) orgConsole.apply(console, arguments);
              } catch(e){}
            };
          })(methods[x]);
        }
}());
</script>');