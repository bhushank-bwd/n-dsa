let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "* ";
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "" + (j + 1) + " ";
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "" + (i + 1) + " ";
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + "" + (j + 1) + " ";
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + "* ";
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = "";
  //   add empty space or -
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + "-";
  }
  // add *
  for (let k = 0; k < i + 1; k++) {
    row = row + "* ";
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let switchText = true;
  let row = "";
  for (let j = 0; j <= i; j++) {
    if (switchText) row = row + "1 ";
    else row = row + "0 ";
    switchText = !switchText;
  }
  console.log(row);
}
let switchText = true;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    if (switchText) row = row + "1 ";
    else row = row + "0 ";
    switchText = !switchText;
  }
  console.log(row);
}
