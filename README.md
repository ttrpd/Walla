# Walla
Walla is a functional programming language whose syntax allows it to be read as, or interpreted from, normal speech/text.
It is named after a sound effect used to [imitate the murmur of a crowd](https://en.wikipedia.org/wiki/Walla).

## Syntax
Walla syntax is structured as a series of lines, parsed from top to bottom, each representing a prefix operator or literal.
The total number of syllables (as decided by the [syllable](https://github.com/words/syllable) package) in the line corresponds
to one of a list of operators, each of which consume some number of subsequent lines as operands. For example:

```
daylight's back.    #   3   output
I say:              #   2   convert_to_string
"hello world"       #   -   (string literal)
```
prints
```
"hello world"
```
and
```
under foot                                  # 3         output
    deliberating                            # 5         sub
        impatiently                         # 4         add
            ants                            # 1         convert_to_number
                say "hello"                 # 1-2       10
            then                            # 1         convert_to_number
                say "goodby"                # 1-2       10
        moving along                        # 4         add
            now                             # 1         convert_to_number
                underground and under foot  # 3-1-2-1   1101
            gone                            # 1         convert_to_number
                once again                  # 1-2       10
```
evaluates `(2+2) - (13+2)` prints the result
```
-11
```
