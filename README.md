# NikoboiNFTB Web Tools

This repository contains several lightweight, open-source web tools created by **[Nikoboi](https://github.com/NikoboiNFTB)**. All tools are fully client-side, easy to use, and open-source under the **GPLv3 License**.  

## Available Tools

| Tool | Description | Live Demo | Source |
|------|------------|-----------|--------|
| **Video Player** | Embed multiple 111Movies video URLs at once and download them using Video DownloadHelper. | [https://nikoboinftb.github.io/video-player](https://nikoboinftb.github.io/video-player) | [video-player](https://github.com/NikoboiNFTB/nikoboinftb.github.io/tree/main/video-player) |
| **Open Links** | Quickly open multiple URLs in new browser tabs. | [https://nikoboinftb.github.io/open-links](https://nikoboinftb.github.io/open-links) | [open-links](https://github.com/NikoboiNFTB/nikoboinftb.github.io/tree/main/open-links) |
| **MyLinks** | Organize and open your personal collection of links efficiently. | [https://nikoboinftb.github.io/links](https://nikoboinftb.github.io/links) | [links](https://github.com/NikoboiNFTB/nikoboinftb.github.io/tree/main/links) |

---

## 1. Video Player

A web app that allows you to bulk add video players from 111Movies. Videos can then be downloaded using the [Video DownloadHelper](https://www.downloadhelper.net/) extension for Firefox.

![Video Player screenshot](video-player/player.png)

### Features

- Paste multiple 111Movies URLs (one per line).  
- Embed multiple video players at once.  
- Clear all players with a single click.  
- Shows the total number of added players.  
- Supports downloading videos via Video DownloadHelper.

### Usage

1. **Open Live Version:**  
   [https://nikoboinftb.github.io/video-player](https://nikoboinftb.github.io/video-player)  
2. **Run Locally:**  
   Clone the repository:  
   git clone https://github.com/NikoboiNFTB/nikoboinftb.github.io  
   Open `video-player/index.html` in Firefox.  

3. Paste your URLs, click **Add Players**, then download via Video DownloadHelper.  
4. Clear all players with **Clear All** if needed.  
> Recommended to download a few players at a time for best performance.

---

## 2. Open Links

A lightweight tool for opening multiple URLs at once in new tabs.

### Features

- Open multiple URLs in a single click.  
- Ignores invalid links (must start with `http://` or `https://`).  
- Clean, dark-themed interface.  
- Fully client-side; no data is sent anywhere.

### Usage

1. **Open Live Version:**  
   [https://nikoboinftb.github.io/open-links](https://nikoboinftb.github.io/open-links)  
2. **Run Locally:**  
   Open `open-links/index.html` from a cloned repository.

3. Paste URLs (one per line), click **Open All Links**, or **Clear Links** to reset.

**Example input:**  
https://nikoboinftb.github.io/open-links  
https://nikoboinftb.github.io/video-player  
https://nikoboinftb.github.io/links

---

## 3. MyLinks

A personal link organizer for storing, managing, and opening collections of URLs.

### Features

- Save and organize links locally in your browser.  
- Open multiple links with a single click.  
- Minimalistic interface for quick access.

### Usage

1. **Open Live Version:**  
   [https://nikoboinftb.github.io/links](https://nikoboinftb.github.io/links)  
2. **Run Locally:**  
   Open `links/index.html` from a cloned repository.

---

## Repository Structure

nikoboinftb.github.io/  
├── video-player/  
│   ├── index.html  
│   ├── style.css  
│   └── script.js  
├── open-links/  
│   ├── index.html  
│   ├── style.css  
│   └── script.js  
├── links/  
│   ├── index.html  
│   ├── style.css  
│   └── script.js  
├── README.md  
└── LICENSE  

Each tool is self-contained with its own HTML, CSS, and JavaScript files.

---

## License

All projects in this repository are licensed under the [GPLv3 License](https://github.com/NikoboiNFTB/nikoboinftb.github.io/blob/main/LICENSE).

---

## Credits

Created by **[Nikoboi](https://github.com/NikoboiNFTB)**.
