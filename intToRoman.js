let intToRoman = (s) => {
  const thousand = ["", "M", "MM", "MMM"];
  const hundred = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const unit = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return (
    thousand[~~(s / 1000)] +
    hundred[~~((s % 1000) / 100)] +
    ten[~~((s % 100) / 10)] +
    unit[s % 10]
  );
};
let input = 1234;
console.log("int to roman of " + input + "is :" + intToRoman(input));
