const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


function flipCard() {
  var card = document.getElementById('card');
  card.classList.toggle('flipped');
}




const sumMoonContainer = document.querySelector('.sun-moon-container')
const newe= document.querySelector('.navbar-toggler-icon')


document.querySelector('.them-toogle-btn').addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
        // document.querySelector('.them-toogle-btn').textContent ="Dark"
        // nav.classList.add('navbar-dark')
        document.querySelector('.them-toogle-btn').textContent ="Dark"
        console.log('dark')
        
    }
    else{
        document.getElementsByClassName('dark')
        document.body.classList.remove('dark')
    
        // document.querySelector('.them-toogle-btn').textContent ="Light"
        // nav.classList.remove('navbar-dark')
        // document.addEventListener('DOMContentLoaded', function() {
            // });
            // navbarBrand.style.color = 'black';
            document.documentElement.style.setProperty('--bs-emphasis-color-rgb', '#822714');
        document.querySelector('.them-toogle-btn').textContent ="Light"

        
        console.log('light')
        // document.querySelector('.them-toogle-btn').textContent ="Light"
    }
    // const currentRotation = parseInt(getComputedStyle(sumMoonContainer).getPropertyValue('.--rotation'))
    // sumMoonContainer.style.setProperty('--rotation',currentRotation + 180)
})

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
    console.log('dark')
    document.documentElement.style.setProperty('--bs-emphasis-color-rgb', '#822714');
    document.body.classList.toggle('dark')
    document.querySelector('.them-toogle-btn').textContent ="Dark"
    
    document.querySelector('.them-toogle-btn').textContent ="Dark"
    
    
} else {
    document.body.classList.remove('dark')
    document.getElementsByClassName('dark')
    let nav = document.getElementById('nav')
    document.querySelector('.them-toogle-btn').textContent ="Light"
    console.log('light')
}




function toggleContent() {
    var content = document.querySelector('.content');
    var contentp = document.querySelector('.contparent');
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + 'px';
    }
  }

  function showMore() {
    var details = document.querySelector('details');
    details.open = true;
    
  }

  function toggleDetails() {
    var details = document.getElementById('moreDetails');
    details.open = !details.open;
  }

  function toggleContent() {
    var container = document.getElementById('contentContainer');
    container.style.display = (container.style.display === 'none') ? 'block' : 'none';
  }

    document.body.classList.toggle('see')
    const seemore = document.querySelector('.fixed-button')
    
    document.querySelector('.fixed-button').addEventListener('click',()=>{
      document.body.classList.toggle('see')
      if (document.body.classList.contains('see')) {
          document.querySelector('.fixed-button').textContent ="See more"
        }
        else{
    document.body.classList.remove('see')
    
    document.querySelector('.fixed-button').textContent ="See less"
    }
  })




  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')

        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))






