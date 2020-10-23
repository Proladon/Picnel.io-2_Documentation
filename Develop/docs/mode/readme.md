# View Mode
Currently, we have three kinds view mode：`Random`、`PreNext`、`Multiple`.

## Random
Obviously, it will random choice a file from current mainfolder to showing on view area.

## PreNext
`previous`&`next` file, it's a more controlable mode. some time using in random mode, user click too fast and cause to skip the file they want to deal with.

## Multiple
More efficient, it can show 10 file in a page. and sure, you can deal multiple files in the same time.
### Why using pagination
Because of performance problem, if we rendering all files in the same page, you will see whole application freezing then.