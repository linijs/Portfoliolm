window.onload = () => {
    //when everything loads call this funcktion
    const transition_el = document.querySelector(".transition");
    const anchors = document.querySelectorAll("a.transition"); //all links on the page

    setTimeout(() => {
        //transitions on page load
        transition_el.classList.remove("is-active");
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        //loop through every anchor tag on page
        //delay page change
        const anchor = anchors[i];

        anchor.addEventListener("click", (e) => {
            //everytime you click on a link
            e.preventDefault(); //not going to link to a different page

            let target = e.target.href; //gets the link where you're supposed to go

            transition_el.classList.add("is-active"); //adds overlay on top of the page when clicking link

            setTimeout(() => {
                window.location.href = target; //goes to stored target link after given delay
            }, 500);
        });
    }
};
