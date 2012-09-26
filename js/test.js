(function () {

    Test = function(id) {
        var that = this;
        that.id = id;
        that.el = document.getElementById(id);
        that.init();
    };

    Test.prototype = {
        init: function() {
             that = this;
             alert(that.el);
             that.handler();
        },
        handler: function() {
             that = this;
             that.el.addEventListener('click', that.click, false);

        },
        click: function() {
             that = this;
             alert(that.id);

        }
    }
})();
