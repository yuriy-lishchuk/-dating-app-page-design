document.addEventListener("DOMContentLoaded", function() {

    // Navigation
    var toggleNavJs = document.querySelector('.toggle-nav-js');

    if (toggleNavJs) {
        document.querySelector('.toggle-nav-js').addEventListener('click', function (e) {
            e.preventDefault();
            toggleNavigation();
        });
    }

    function toggleNavigation() {
        var body = document.querySelector('body');
        var className = 'toggle';
        if(body.classList.contains(className)) {
            body.classList.remove(className);
            // document.onkeydown = false;
        }
        else {
            body.classList.add(className);
            // document.onkeydown = function(evt) {
            //     evt = evt || window.event;
            //     if (evt.keyCode == 27) {
            //         toggleNavigation();
            //     }
            // };
        }
    }

    // Interests
    var showInterests = document.querySelector('[data-toggle="showInterests"]');

    if (showInterests) {
      showInterests.addEventListener('click', function (e) {
        e.preventDefault();
        toggleInterests(showInterests.getAttribute('data-target'));
      });
    }

    function toggleInterests(target) {
      var body = document.querySelector('body');
      var bodyClassName = 'modal-open';
      var interests = document.getElementById(target);
      if(!interests) return false;
      if (body.classList.contains(bodyClassName)) {
        body.classList.remove(bodyClassName);
        interests.classList.remove('show');
        var modalBackdrop = document.querySelector('.modal-backdrop');
        modalBackdrop.classList.remove('show');
        setTimeout(function() {modalBackdrop.remove()}, 500);
        // document.onkeydown = false;
      }
      else {
        body.classList.add(bodyClassName);
        interests.classList.add('show');
        var node = document.createElement('div');
        node.className = 'modal-backdrop fade';
        body.appendChild(node);

        setTimeout(function () {node.classList.add('show')}, 50);
        node.addEventListener('click', function (e) {
          e.preventDefault();
          toggleInterests(target);
        });
        // document.onkeydown = function(evt) {
        //     evt = evt || window.event;
        //     if (evt.keyCode == 27) {
        //         toggleNavigation();
        //     }
        // };
      }
    }

    // Copy to Clipboard
    var copyTarget = document.querySelector('[data-copy]');
    if (copyTarget) {
      copyTarget.addEventListener('click', function (e) {
        e.preventDefault();
        copyToClipboard(copyTarget.getAttribute('data-copy'));
      });
    }
    function copyToClipboard(targetID) {
      var copyText = document.getElementById(targetID);
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
      setTimeout(function() {
        document.getSelection().removeAllRanges();
      }, 300);
    }

});
