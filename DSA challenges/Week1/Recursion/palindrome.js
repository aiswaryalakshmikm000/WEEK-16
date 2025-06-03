function palindrome (string){
    if(string.length <= 1){ //atleast have one element
        return true
    }
    if(string[0] !== string[string.length-1]){
        return false
    }

    return palindrome(string.substring(1,string.length - 1))   //substring(start index, end index )  end index excludes like sli
} 


//Time Complexity: 𝑂(𝑛)
//Space Complexity: 𝑂(n)