;(function ($) {
    var fn = $.fn
    var expr = $.expr
    var pseudo = expr[':']
    var super_map = fn.map

    var fn_or =
        fn.or = function (arg) {
            return this.length > 0 ? $(this) : fn_or_dispatch[typeof arg].call(this, arg)
        }

    var fn_or_dispatch =
        fn_or.dispatch = {}

        fn_or_dispatch['object'] = function (arg) {
            return arg
           }

        fn_or_dispatch['string'] = function (arg) {
            return fn_or_dispatch['object'].call(this, $(arg))
        }

        fn_or_dispatch['function'] = function (arg) {
            return arg.call(this)
        }

    var fn_map =
        fn.map = function (callback) {
            if ('string' == typeof callback) callback = fn[callback]
            return super_map.call(this, callback)
        }

    var fn_max =
        fn.max = fn.maximum = function (key) {
            return Math.max.apply(Math, $(this).map(key).toArray())
        }

    var fn_min =
        fn.min = fn.minimum = function (key) {
            return Math.min.apply(Math, $(this).map(key).toArray())
        }

    var fn_top =
        fn.top = function () {
            return $(this).offset().top
        }

    var fn_left =
        fn.left = function () {
            return $(this).offset().left
        }

    var fn_right =
        fn.right = function () {
            var $this = $(this)
            return $this.left() + $this.width()
        }

    var fn_bottom =
        fn.bottom = function () {
            var $this = $(this)
            return $this.top() + $this.height()
        }

    var fn_grandparent =
        fn.grandparent = function () {
            return $(this).map(el_grandparent)
        }

    var el_grandparent = function () {
            return this.parentElement.parentElement
        }

    var fn_swapClass =
        fn.swapClass = function () {
            return fn_swapClass_dispatch[arguments.length].apply(this, arguments)
        }

    var fn_swapClass_dispatch =
        fn_swapClass.dispatch = []

        fn_swapClass_dispatch[1] = function (between) {
            for (var left in between)
                if (el_swapClass.call(this, left, between[left])) return this
            return this
        }

        fn_swapClass_dispatch[2] = function (left, right) {
            el_swapClass.call(this, left, right)
            return this
        }

    var el_swapClass = function (left, right) {
            var $this = $(this)
            if ($this.hasClass(left)) {
                $this.removeClass(left)
                $this.addClass(right)
                return true
            }
            else if ($this.hasClass(right)) {
                $this.removeClass(right)
                $this.addClass(left)
                return true
            }
            return false
        }

    var pseudo_localURL =
        pseudo.localURL =  pseudo['local-url'] = function (e, i, m) {
            return localURL.call(e, m[3])
        }

    var pseudo_internalURL =
        pseudo.internalURL = pseudo['internal-url'] = function (e, i, m) {
            return el_internalURL.call(e, m[3])
        }

    var pseudo_externalURL =
        pseudo.externalURL = pseudo['external-url'] = function (e, i, m) {
            return el_externalURL.call(e, m[3])
        }

    var el_localURL = function (k) {
            return ! /^\w+:\/+/.test(this[k])
        }

    var el_internalURL = function (k) {
            return el_localURL.call(this, k) ||
                new RegExp('^\\w+:\\/+' + window.location.hostname + '\\b').test(this[k])
        }

    var el_externalURL = function (k) {
            return ! el_internalURL.call(this, k)
        }
})(jQuery);
