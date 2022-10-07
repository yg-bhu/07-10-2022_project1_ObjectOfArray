let ObjectOfArray=
{
    array1:["JavaScript","Python","Ruby","Go","languages","isChallenging","isRewarding","difficulty","isFun"],
    array2:["JavaScript","Python","Ruby","Go"],
    array3:[true,true,7,true],
    showArray()
    {
        this.array1.forEach(function(item){
            console.log(item);
        });
        console.log(this.array2);
        this.array3.forEach(function(item)
        {
            console.log(item);
        });
    }
}
ObjectOfArray.showArray();