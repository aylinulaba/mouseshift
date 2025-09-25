# MouseShift

A simple interactive web demo where a box element subtly shifts position based on your mouse movement, creating a parallax-like effect.

## Demo
- Move your mouse around the viewport.
- The `.box` element (with a background image) smoothly shifts relative to the mouse position.

## How It Works
- JavaScript tracks the mouse position relative to the center of the screen.
- Easing values (`ease` and `easeMove`) control how smoothly and how far the box lags behind.
- [GSAP](https://greensock.com/gsap/) is used to set transform properties on each animation frame.
- `requestAnimationFrame` drives the animation loop.

## Project Structure
```
index.html      # main HTML page
main.js         # JavaScript logic (mouse tracking + GSAP)
```

### index.html
Includes:
- A `.box` div styled with CSS
- GSAP loaded via CDN
- `main.js` script

### main.js
Core logic:
- Tracks mouse movement
- Updates position with easing
- Animates using GSAP

## Getting Started

1. Clone or download the project.
2. Open `index.html` in your browser.
3. Move your mouse to see the parallax effect.

No build step required — this runs directly in the browser.

## Dependencies
- [GSAP 3](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js)

## Customization
- Adjust `ease` to change smoothing of the cursor tracking.
- Adjust `easeMove` to control how much the box shifts relative to the cursor.
- Change `.box` styles in CSS to use your own background image, size, or colors.

## License
MIT
