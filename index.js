// Typewriter Effect STARTS
class TypeWriter {
    constructor(txtElement, words, wait = 200) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
  
  //TypeWriter Effect ENDS
  
const logo = document.querySelectorAll('.logo path');

for(let i=0; i<logo.length; i++)
{
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

const aboutme = document.querySelectorAll('.abou path');

for(let i=0; i<aboutme.length; i++)
{
    console.log(`Letter ${i} is ${aboutme[i].getTotalLength()}`);
}

const logop = document.querySelectorAll('.logop path');

for(let i=0; i<logop.length; i++)
{
    console.log(`Letter ${i} is ${logop[i].getTotalLength()}`);
}

let mousecursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove',cursor);

function cursor(e){
  mousecursor.style.top = e.pageY + 'px';
  mousecursor.style.left = e.pageX + 'px';
}

navlinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mousecursor.classList.remove("link-grow");
    link.classList.remove("hlink");
  });
  link.addEventListener('mouseover', () => {
    mousecursor.classList.add("link-grow");
    link.classList.add("hlink");
  });
});
