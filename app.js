const content = document.getElementsByClassName('contentBox');
    for (i = 0; i < content.length; i++) {
    content[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });   
    } 