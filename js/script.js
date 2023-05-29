// blog page 
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href="blog.html";
})

// Triangle part
document.getElementById('btn-triangle').addEventListener('click', function(){
    // // get the privious number
    const trianglePreviousNumber = getElementValueById('triangle-pre-number');
    // // get the left input number
    const triangleInputLeft = inputField('triangle-left');
    // set the input value in previous number
    addElement('triangle-b', triangleInputLeft);
    // // get the right input value 
    const triangleInputRight = inputField('triangle-right');
    if(triangleInputRight === '' || triangleInputLeft === ''){
        alert('please enter valid number');
        return ;
    }
    // set the input value in precious number
    addElement('triangle-h', triangleInputRight);
    // multipication lef and right input number
    const multipleTotalArea = trianglePreviousNumber * triangleInputLeft * triangleInputRight;
    // set the input multipication result in are calculation
    setCalculationResul('triangle-result', multipleTotalArea);

    // show are result
    const list = document.querySelector('.triangle-none')
    console.log(list);
    list.classList.remove("triangle-none");
    
})

// Triangle calculation "convert to m2" button
document.getElementById('btn-convert').addEventListener('click', function(){
    const trianglePreviousNumber = getElementValueById('triangle-pre-number');
    const triangleInputLeft = inputField('triangle-left');
    const triangleInputRight = inputField('triangle-right');
    const multipleTotalArea = trianglePreviousNumber *  triangleInputLeft * triangleInputRight;
    // get the calculation result
    const convertCmToM2 = multipleTotalArea / 10;
    const convertResult = convertCmToM2.toFixed(2);
    setCalculationResul('triangle-result', convertResult);
})

// Ractabgle part
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleInputLeft = inputField('rectangle-left');
    addElement('rectangle-w', rectangleInputLeft);
    const rectangleInputRight = inputField('rectangle-right');
    if(rectangleInputLeft === '' || rectangleInputRight === ''){
        alert('please enter valid number');
        return
    }

    addElement('rectangle-l', rectangleInputRight);
    const multipleTotalArea = rectangleInputLeft * rectangleInputRight;
    setCalculationResul('rectangle-result', multipleTotalArea);
    // show are result
    const list = document.querySelector('.rectangle-none')
    console.log(list);
    list.classList.remove("rectangle-none");
})

// ractangle calculation "convert to m2" button
document.getElementById('ractangle-convert').addEventListener('click', function(){
    const rectangleInputLeft = inputField('rectangle-left');
    const rectangleInputRight = inputField('rectangle-right');
    const multipleTotalArea = rectangleInputLeft * rectangleInputRight;
    // get the calculation result
    const convertCmToM2 = multipleTotalArea / 10;
    const convertResult = convertCmToM2.toFixed(2);
    setCalculationResul('rectangle-result', convertResult);
})


// set the random bg color
randomColor = function(e) {
	e.style.background =  "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
}

