function toogleRun(element, class_) {
    if (element !== undefined && element !== null) {
        if (element.classList.contains(class_)) {
              log('contains class = ' +  class_);
              element.classList.remove(class_);
        } else { 
              element.classList.add(class_);
              log('not-contains class = ' +  class_);
        };
    } else {
        log("undefined element");
        return;
    }
};


function log(message) {
    console.log(message);
};