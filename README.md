# NikoboiNFTB Web Tools

This repository contains several lightweight, open-source web tools. All tools are fully client-side, easy to use, and open-source under the **GPLv3 License**.  

---

## Available Tools

| Tool | Description | Live Demo | Source |
|------|------------|-----------|--------|
| **Links** | Simple site for easy access to all of my socials | [links](https://nikoboinftb.github.io/links) | [links](https://github.com/NikoboiNFTB/nikoboinftb.github.io/tree/main/links) |
| **Open Links** | Quickly open multiple URLs in new browser tabs. | [open-links](https://nikoboinftb.github.io/open-links) | [open-links](https://github.com/NikoboiNFTB/nikoboinftb.github.io/tree/main/open-links) |
| **Video Player** | Embed multiple 111Movies video URLs at once and download them using Video DownloadHelper. | [video-player](https://nikoboinftb.github.io/video-player) | [video-player](https://github.com/NikoboiNFTB/nikoboinftb.github.io/tree/main/video-player) |

---

## Links

A simple, free and open-source portal where all of my public social media accounts can be found. The code is also reusable, so others can create their own social portals based on this project (feel free to do so :D).

### Features

- Centralized hub for all social media links.  
- Clean, minimal interface.  
- Fully open-source and easily forkable for personal use.

### Usage

1. **Open Live Version:**  
   [https://nikoboinftb.github.io/links](https://nikoboinftb.github.io/links)  
   Or Download & Run/Edit Locally:  
   The main HTML file is `/links/index.html`, and the main CSS file is `/links/style.css`.

### Screenshot

![Screenshot of Links](https://github.com/NikoboiNFTB/nikoboinftb.github.io/blob/main/assets/screenshot/links.png)

---

## Open Links

A lightweight tool for opening multiple URLs at once in new tabs. Useful for bulk opening tabs. A great extra tool to use with [Link Gopher](https://addons.mozilla.org/en-US/firefox/addon/link-gopher/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) (just as they likely intended "... or copy and paste into other systems").

### Features

- Open multiple URLs in a single click.  
- Ignores invalid links (must start with `http://` or `https://`).  
- Clean, dark-themed interface.  
- Fully client-side; no data is sent anywhere.  
  - Well, GitHub is owned by Microsoft, so... Download it and run locally if you want FULL privacy.  
  - (And use Linux)

### Usage

1. **Open Live Version:**  
   [https://nikoboinftb.github.io/open-links](https://nikoboinftb.github.io/open-links)  
   Or Download & Run Locally:  
   Clone the repository and open `open-links/index.html`.  
   - Technically even better for privacy, since not even GitHub can track you anymore  

2. Paste URLs (one per line), click **Open All Links**, or **Clear Links** to reset.

### Example input:  
https://github.com/NikoboiNFTB  
https://www.instagram.com/nikoboi  
https://www.youtube.com/@NikoboiNFTB  
(shameless plug)

### Screenshot

![Screenshot of Open Links](https://github.com/NikoboiNFTB/nikoboinftb.github.io/blob/main/assets/screenshot/open-links.png)

---

## Video Player

A web app that allows you to bulk add video players from 111Movies. Videos can then be downloaded using the [Video DownloadHelper](https://www.downloadhelper.net/) extension for Firefox.

### Features

- Paste multiple 111Movies URLs (one per line).  
- Embed multiple video players at once and remove them all with one click.  
- Shows the total number of added players.  
- Supports downloading videos via Video DownloadHelper.

### Usage

1. **Open Live Version:**  
   [https://nikoboinftb.github.io/video-player](https://nikoboinftb.github.io/video-player)  
   Or Download & Run Locally:  
   Clone the repository and open `video-player/index.html` in Firefox.  

2. Paste your URLs, click **Add Players**, then download via Video DownloadHelper.  
3. Clear all players with **Clear All** if needed.  
> Recommended to download a few players at a time for best performance.

### Screenshot

![Screenshot of Video Player](https://github.com/NikoboiNFTB/nikoboinftb.github.io/blob/main/assets/screenshot/video-player.png)

---

## Repository Structure

nikoboinftb.github.io/  
├── assets/  
│   ├── screenshot/  
│   ├── svg/  
│   ├── clippy.png (used as Favicon)  
├── links/  
│   ├── index.html  
│   ├── style.css  
├── open-links/  
│   ├── index.html  
│   ├── style.css  
│   └── script.js  
├── video-player/  
│   ├── index.html  
│   ├── style.css  
│   └── script.js  
├── LICENSE  
└── README.md  

---

## License

All projects in this repository are licensed under the [GPLv3 License](LICENSE).

---

## Credits

- Created by **Nikoboi**  
- Script logic fine-tuned with **ChatGPT**  
- Colors inspired by the great nation of Finland 🇫🇮
