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
