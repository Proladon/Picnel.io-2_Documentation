# Cache Mode
When the number of files in the folder exceeds 3000, it will automatically switch to the `Cache Mode`, that's means picnel.io will using `Cached file list`.

Under normal circumstances, all actions, including switching files, deleting files, etc., will immediately re-read all files in the folder to obtain information about the updated folder, and facilitate the processing of various tasks. However, when the number of files in the folder is too large, it will take a lot of time to read, causing execution blockage and performance problems.



## Advantages
`Cached file list` will only get all files in the folder and save them as a temporary static file list for use when the folder is initially loaded. All operations, such as switching files, deleting files, moving files, etc., directly modify the `cached file list`, so there is no need to spend a lot of time to retrieve the files in the folder each time, thereby improving performance .

## Disadvantages
Since the actual file data in the folder will only be obtained for the first time, any operations performed on the folder outside of Picnel.io 2 will not be updated and recorded.

### Patch
The status bar at the bottom provides a button for refreshing. When the button is pressed, the file information inside the folder will be read again to update the cached file list.

---

![cachemode](./../assets/cacheMode/cache_mode.png)
- When in the cache mode, it will show Cache word right of mainfolder name
- Refresh button only show in cache mode