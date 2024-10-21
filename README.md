# Discord Emoji Rain

## Overview

**Discord Emoji Rain** is a fun JavaScript snippet that creates a whimsical visual effect in the Discord web app by making emojis "rain" down the screen. This harmless effect adds a touch of humor and liveliness to your chat experience!

## Features

- Random emojis will fall from the top of the page.
- Emojis spin and fade as they descend.
- Customizable emoji list to add your favorites.

## How to Use

### Prerequisites

- A web browser (Chrome, Firefox, Edge, etc.) to access the Discord web app.

### Steps to Run

1. **Open Discord**: Navigate to the [Discord web app](https://discord.com).
2. **Open Developer Tools**:
   - Right-click anywhere on the page and select **Inspect**.
   - Alternatively, press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Opt+I` (Mac).
3. **Go to the Console**: Click on the **Console** tab in the Developer Tools.
4. **Paste the Code**: Copy the following code and paste it into the console:

   ```javascript
   (function emojiRain() {
       const emojiList = ["😂", "😜", "🎉", "🍕", "🔥", "💀", "🤯", "💩", "😎", "👾", "🍔", "🍩"];
       
       function randomEmoji() {
           return emojiList[Math.floor(Math.random() * emojiList.length)];
       }
       
       function createEmoji() {
           const emoji = document.createElement('div');
           emoji.innerText = randomEmoji();
           emoji.style.position = 'fixed';
           emoji.style.zIndex = 1000;
           emoji.style.fontSize = Math.random() * 40 + 10 + 'px';
           emoji.style.left = Math.random() * window.innerWidth + 'px';
           emoji.style.top = '-50px';
           emoji.style.opacity = Math.random();
           document.body.appendChild(emoji);
           
           let fallSpeed = Math.random() * 3 + 1;
           let spinSpeed = Math.random() * 360;

           const interval = setInterval(() => {
               let currentTop = parseFloat(emoji.style.top);
               emoji.style.top = (currentTop + fallSpeed) + 'px';
               emoji.style.transform = `rotate(${spinSpeed += 10}deg)`;

               if (currentTop > window.innerHeight) {
                   clearInterval(interval);
                   emoji.remove();
               }
           }, 16);
       }

       setInterval(createEmoji, 200);
   })();
   ```

5. **Enjoy the Show**: Watch as emojis rain down your screen, adding a fun and lively atmosphere to your Discord experience!

### Stopping the Effect

To stop the emoji rain effect, simply refresh the Discord web page.

## Customization

You can customize the emoji list by modifying the `emojiList` array in the code. Feel free to add your favorite emojis!

## Disclaimer

This script is intended for fun and is harmless. Use it responsibly and be mindful of your surroundings while using it in chat environments. Refreshing the page will stop the effect.

Enjoy the emoji rain!

