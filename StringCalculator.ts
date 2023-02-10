
export class StringCalculator{
    add(numbers : string) : number {

        const prefixDelimiter = "//";
        var sum = 0;
        var numbersArray = [];
        var negArray = [];

        if (!numbers){
            return sum;
        }

        if (numbers.startsWith(prefixDelimiter)){
            numbersArray = numbers.substring(prefixDelimiter.length+2).split(numbers[prefixDelimiter.length]);
        }
        else
            numbersArray = numbers.split(/,|\n/);


        for (var number of numbersArray){
            var currentNumber = parseInt(number);

            if (currentNumber < 0 ){
               negArray.push(currentNumber);
            }
            else if (currentNumber > 1000){
                continue;
            }
            
            sum = sum + currentNumber;        
        }
        
        if (negArray.length > 0){

            throw new Error("negative not allowed:" + negArray.map((number) => ` ${number}`).join());
        }

        return sum;
    }
}
 

