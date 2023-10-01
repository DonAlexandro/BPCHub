---
description: This document explains how the app works from the "helicopter" view
---

# 🚁 Overview

### :bar\_chart: Diagram

<figure><img src="../../.gitbook/assets/overview_architecture.svg" alt=""><figcaption></figcaption></figure>

### :information\_source: Explanation

Everything starts when the :timer:CRON job triggers the scrapper method:

1. First, it goes to the target website (BATK website obviously) and grabs the raw HTML
2. Then the scrapper parses the HTML, gets the text data out there, and puts it in JSON format
3. Next, the scrapper saves the JSON data to the database using backend REST API endpoints
4. Last but not least, the scrapper sends the WebSocket notification about the new data that has just been fetched
5. The client performs the real-time automatic synchronization with the backend
