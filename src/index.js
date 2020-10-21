module.exports = function toReadable (number) {
    let ed = [
        "", 
        "one", 
        "two", 
        "three", 
        "four", 
        "five", 
        "six", 
        "seven", 
        "eight", 
        "nine"];
    
      let dec1 = [
        "ten", 
        "eleven", 
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen" ];
    
        let dec2 = [
          "",
          "",
          "twenty",
          "thirty",
          "forty",
          "fifty",
          "sixty",
          "seventy",
          "eighty",
          "ninety" ];
    
          let out;
    
          //console.log(number, number.toString(), number.toString().length );
    
          if (number.toString().length === 3) {
    
              out = ed[number.toString()[number.toString().length - 3]] + " hundred";
    
              if (number.toString()[number.toString().length - 2] == 1) {
    
                out = out + " " + dec1[number.toString()[number.toString().length - 1]];
                //console.log ("3-1:", out);
                return out;
    
              }
    
              if (number.toString()[number.toString().length - 2] == 0) {
    
                if (number.toString()[2] == 0) { return out}
    
                out = out + " " + ed[number.toString()[number.toString().length - 1]];
                //console.log ("3-1:", out);
                return out;
    
              }
    
              else if (number.toString()[number.toString().length - 2] > 1) {
    
                out = out + " " + dec2[number.toString()[number.toString().length - 2]];
    
                if (number.toString()[2] == 0) { return out}
    
                out = out + " " + ed[number.toString()[number.toString().length - 1]];
                //console.log ("3-2:", out);
    
              }
          }
    
          if (number.toString().length === 2) {
            
                //console.log ("2-1:", out);
                //console.log ("2-2:", number.toString()[1]);
    
                if (number.toString()[number.toString().length - 2] == 1) {
    
                  out = dec1[number.toString()[number.toString().length - 1]];
                  //console.log ("2-3:", out);
                  return out;
    
                }
    
                else if (number.toString()[number.toString().length - 2] > 1) {
    
                  out = dec2[number.toString()[number.toString().length - 2]];
    
                  if (number.toString()[1] == 0) { return out}
    
                  out = out + " " + ed[number.toString()[number.toString().length - 1]];
                  //console.log ("2-4:", out);
    
                }
           
          }
    
          
          if (number.toString().length === 1 && number.toString()[0] == 0) {
    
            out =  "zero" ;
            //console.log ("1-1:", out);
          }
    
          if (number.toString().length === 1 && number.toString()[0] != 0) {
    
            out = ed[number.toString()[number.toString().length - 1]];
            //console.log ("1-2:", out);
          }
    
          
          return out; 
    
           
}
