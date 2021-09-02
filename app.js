const ex1 = () => {
  const numList = [12, 2112, 9000, 1999, 24];
  // start off by setting first index of numList as the max number
  let max = numList[0];
  // for each number in numList, if it's larger than the max, update the max number
  numList.forEach((num) => {
    if (num > max) max = num;
  });
  alert(max);
};

const ex2 = () => {
  const name_array = [];
  let isAnswering = true;
  while (isAnswering) {
    let entry = prompt("Enter a name. Enter 'q' to quit.");
    // if user enters 'q' switch isAnswering to false, else add input to name_array
    entry.toLowerCase() === "q"
      ? (isAnswering = false)
      : name_array.push(entry);
  }
  // iterate through name_array, logging each name
  for (const name of name_array) console.log(name);
};

const ex3 = () => {
  let fizz = "FIZZ";
  let buzz = "BUZZ";
  // prompt user for desired number of iterations
  let limit = parseInt(
    prompt(
      "How many iterations do you want to go through? Please enter an integer"
    )
  );
  // make limit default to 20 if user didn't enter an number
  if (isNaN(limit)) {
    alert("Invalid input. Using 20 by default.");
    limit = 20;
  }
  for (let idx = 1; idx <= limit; idx++) {
    // if idx is divisible by 3 & 5, log FIZZBUZZ along with idx
    if (idx % 3 === 0 && idx % 5 === 0) console.log(`${fizz}${buzz}: ${idx}`);
    // if idx is divisible by 5, log BUZZ along with idx
    else if (idx % 5 === 0) console.log(`${buzz}: ${idx}`);
    // if idx is divisible by 3, log FIZZ along with idx
    else if (idx % 3 === 0) console.log(`${fizz}: ${idx}`);
    // if idx isn't divisible by 3 or 5, just log idx
    else console.log(idx);
  }
};

const ex4 = () => {
  // capture img element and set it's starting src
  const sprite = document.querySelector("img");
  sprite.src = "./assets/guy1.png";
  let idx = 2;
  let anim = setInterval(() => {
    // ensure walking animation loops by resetting idx to 1 whenever it surpasses the amount of images available
    if (idx === 10) idx = 1;
    // set src of img element based on idx
    sprite.src = `./assets/guy${idx}.png`;
    // increment idx by 1
    idx++;
  }, 500);
};

const ex5 = () => {
  // capture img element and set it's starting src
  const sprite = document.querySelector("img");
  sprite.src = "./assets/Mario1.png";
  // initialize starting index for right/left walking running animation
  let rightIdx = 2;
  let leftIdx = 4;
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      // if e.key === 'ArrowRight'
      case "ArrowRight":
        // ensure run right animation loops by resetting rightIdx to 1 whenever it surpasses the amount of images available
        if (rightIdx === 4) rightIdx = 1;
        // set src of img element based on rightIdx
        sprite.src = `./assets/Mario${rightIdx}.png`;
        // reset leftIdx to starting point
        leftIdx = 4;
        // increment rightIdx by 1
        rightIdx++;
        break;
      // if e.key === 'ArrowLeft'
      case "ArrowLeft":
        // ensure run left animation loops by resetting rightIdx to 4 whenever it surpasses the amount of images available
        if (leftIdx === 7) leftIdx = 4;
        // set src of img element based on leftIdx
        sprite.src = `./assets/Mario${leftIdx}.png`;
        // reset rightIdx to starting point
        rightIdx = 1;
        // increment leftIdx by 1
        leftIdx++;
        break;
      default:
        break;
    }
  });
};

// ex1();
// ex2();
// ex3();
// ex4();
ex5();
