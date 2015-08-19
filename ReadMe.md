# JQuery Lubricants
> Keeps your page running smoothly...

## Description

JQuery Lubricants (JQL) provides a number of helper functions intended to make code a bit more streamlined (and fun!).

Here's a rundown of what's inside...

### Methods

#### or(alternative)

Evaluates and returns it argument if the current selection is empty:

```js
$selection.or('.alternative')
$selection.or($('.alternative'))
$selection.or(function () { $('.alternative') })
```

#### map(method)

A new and improved map that can apply a method based on the given string:

```js
$selection.map('offset')
$selection.map($.fn.offset)
```

#### max(method)

Determines the maximum over the current selection of the given attribute:

```js
$selection.max('width')
$selection.max($.fn.width)
```

#### min(method)

Determines the minimum over the current selection of the given attribute:

```js
$selection.min('width')
$selection.min($.fn.width)
```

#### top()

A shortcut for `.offset().top` intended to be used with the methods above:

```js
$selection.top()
$selection.offset().top
```

#### left()

A shortcut for `.offset().left` intended to be used with the methods above:

```js
$selection.left()
$selection.offset().left
```

#### right()

A shortcut for `.offset().right` intended to be used with the methods above:

```js
$selection.right()
$selection.offset().right
```

#### bottom()

A shortcut for `.offset().bottom` intended to be used with the methods above:

```js
$selection.bottom()
$selection.offset().bottom
```

#### grandparent()

A shortcut for `.parent().parent()`:

```js
$selection.grandparent()
$selection.parent().parent()
```

#### swapClass(from, to) and swapClass({ from: to })

Swaps the class(es) on the left with the class(es) on the right:

```js
$selection.swapClass ('off', 'on')
$selection.swapClass ({ off: 'on', down: 'up' })
```

### Pseudoselectors

#### localURL / local-url

Selects absolute and relative local URLS (sans protocol).

#### internalURL / internal-url

Selects URLs from the current domain.

#### externalURL / external-url

Selects URLs from any external domain:

```js
$ (document).on('click', ':external-url(href)', function () { this.target = '_blank' })
```
