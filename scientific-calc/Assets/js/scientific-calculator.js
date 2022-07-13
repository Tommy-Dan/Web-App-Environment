var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
  
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
        if (
            button.textContent != "SHIFT" &&
            button.textContent != "MODE" &&
            button.textContent != "x ²" && 
            button.textContent != "log" && 
            button.textContent != "ln" &&
            button.textContent != "ON" &&  

            button.textContent != "<sup>ab</sup>&frasl;<sub>c</sub>" && 
            button.textContent != "rad" && 
            button.textContent != "hyp" && 
            button.textContent != "sin" && 
            button.textContent != "cos" && 
            button.textContent != "tan" && 
           
            button.textContent != "±" && 
            button.textContent != "&#9658;" &&
            button.textContent != "(" &&
            button.textContent != ")" &&
            button.textContent != "x^" &&
            button.textContent != "MR" &&

            button.textContent != "π" && 
            button.textContent != "√" && 
            button.textContent != "%" && 
            button.textContent != "x !" && 
            button.textContent != "∘" &&
            button.textContent != "MC" &&
            
            
            button.textContent != "C" && 
            button.textContent != "AC" && 
            button.textContent != "x" && 
            button.textContent != "÷" && 
            button.textContent != "=" && 
            button.textContent != "MC" && 
            button.textContent != "EXP") 
        {
            display.value += button.textContent;
        } else if(button.textContent === "=") {
            equals();
        } else if(button.textContent === "C") {
            clear();
        } else if(button.textContent === "x") {
            multiply();
        } else if(button.textContent === "÷") {
            divide();
        } else if(button.textContent === "±") {
            plusMinus();
        } else if(button.textContent === "AC") {
            backspace();
        } else if(button.textContent === "%") {
            percent();
        } else if(button.textContent === "π") {
            pi();
        } else if(button.textContent === "x ²") {
            square();
        } else if(button.textContent === "√") {
            squareRoot();
        } else if(button.textContent === "sin") {
            sin();
        } else if(button.textContent === "cos") {
            cos();
        } else if(button.textContent === "tan") {
            tan();
        } else if(button.textContent === "log") {
            log();
        } else if(button.textContent === "ln") {
            ln();
        } else if(button.textContent === "x^") {
            exponent();
        } else if (button.textContent === "x !") {
            factorial();
        } else if(button.textContent === "EXP") {
            exp();
        } else if(button.textContent === "rad") {
            radians();
        } else if (button.textContent === "∘") {
            degrees();
        }
        else if (button.textContent === "ab/c") {
            properToMixed();
        }

        else if(button.textContent === "hyp") {
            hyp();
        }
        else if(button.textContent === "MR") {
            mr();
        }
        else if(button.textContent === "MC") {
            mc();
        }
        else if(button.textContent === "M+") {
            mplus();
        }
        else if(button.textContent === "(") {
            openbrac();
        }
        else if(button.textContent === ")") {
            closebrac();
        }

    });
});

function syntaxError() {
  if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
    display.value == "Syntax Error";
  }
}

function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
    checkLength()
    syntaxError()
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}
function openbrac() {
    display.value += "(";
}

function closebrac() {
    display.value += ")";
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    display.value = number;
  }
}

function pi() {
  display.value = (display.value * Math.PI);
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}

// function properToMixed(_x) {
//     var parts = _x.split("-");
//     var decParts = parts[1].split("/");
//         return parseInt(parts[0], 10) + (parseInt(decParts[0], 10) / parseInt(decParts[1], 10));
// }


// function properToMixed() {
//     var arr = [];
//     // var number = 1;
//     if(display.value === 0) {
//       display.value = "1";
//     } else if (display.value < 0) {
//       display.value = "undefined";
//     } else {
//       var number = 1;
//       for (var i = display.value; i > 0; i--) {
//         number *=  i;
//       }
//       display.value = number;
//     }
// }


