let section = document.querySelectorAll("section");
let bubble = document.querySelector('.bubble');
let gradients = [
  "linear-gradient(to right top, #f46b45, #eea849)",
  "linear-gradient(to right top, #005c97, #363795)",
   "linear-gradient(to right top, #e53935, #e35d5b)"
];

let options = {
    threshold: 0.5
}

let view = new IntersectionObserver(callback,options);

function callback(entries)
{
    entries.forEach(entry => 
        {
            const className = entry.target.className;
            console.log(className);
            const activeAnchor = document.querySelector(`[data-page=${className}]`  );
            const gradientIndex = entry.target.getAttribute("data-index");
            activeAnchor.style.color = 'black';
            const coords = activeAnchor.getBoundingClientRect();
            const direction = {
                height: coords.height,
                width: coords.width,
                top: coords.top,
                left: coords.left
            };
            if(entry.isIntersecting)
            {
                bubble.style.setProperty("left", `${direction.left}px`);
                bubble.style.setProperty("top", `${direction.top}px`);
                bubble.style.setProperty("width", `${direction.width}px`);
                bubble.style.setProperty("height", `${direction.height}px`);
                bubble.style.background = gradients[gradientIndex];
                activeAnchor.style.color = 'white';
            }
        });
}


section.forEach(sec => {
    view.observe(sec);
})

