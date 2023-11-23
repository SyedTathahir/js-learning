function createCounter(){
    //private variable:
    let count = 0;
    //closures inner functions:
    function increment(){
        return count++;
        console.log("count: ",coutn);
    }
    return {
        incrementCounter:function(){
            increment();
        },
        getCounter:function(){
            return count;
        }
    }
}

const counter =createCounter()
console.log(counter.incrementCounter());
console.log(counter.getCounter());




