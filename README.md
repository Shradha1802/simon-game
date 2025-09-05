# Simon Game

A browser-based implementation of the classic Simon memory game, built using HTML, CSS, and JavaScript.  
Players repeat an ever-growing sequence of colors and sounds to test memory and focus.  

Live Demo: [simon-game-two-swart.vercel.app](https://simon-game-two-swart.vercel.app)

---

<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/6675aec6-cda8-4dfa-bca8-db3c36b4ddb6" />
<img width="1918" height="970" alt="image" src="https://github.com/user-attachments/assets/9160052b-8cca-433d-86c1-cd975bba94d8" />
<img width="1919" height="974" alt="image" src="https://github.com/user-attachments/assets/ef5ef7f0-62a2-41e6-87c0-12fdbd20a488" />
<img width="463" height="893" alt="image" src="https://github.com/user-attachments/assets/19c67325-8374-452a-8de8-5e9e4d467d2c" />



## Features

- Classic Simon gameplay with progressive difficulty
- Score and high-score tracking (stored locally)
- Start and restart controls
- Sound and background music toggle
- Light/Dark mode switch
- Help panel with instructions
- Responsive design for desktop and mobile

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Deployment: Vercel

---

## Project Structure

├── index.html   # Main entry point
├── style.css    # Styling and theme support
├── script.js    # Game logic


---

## How to Play

1. Click Start to begin the game.  
2. Watch the sequence of flashing colors.  
3. Repeat the sequence by clicking the color buttons in the same order.  
4. Each round adds one more step to the sequence.  
5. The game ends when a wrong move is made.  
6. Use Restart to play again anytime.  

---

## Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/simon-game.git

# Navigate into the project folder
cd simon-game

# Open index.html in your browser

# Install Vercel CLI
npm install -g vercel

# Deploy the project
vercel
