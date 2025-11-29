function counter(count){
    console.log(count)
    if(count > 1){
        counter(count-1)
    } else{
        return
    }
}

counter (6)