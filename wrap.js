const wrap = (line, maxLen) => {
    if(line==='') return ""
    else {let arr= line.split('')
    let result=[];
    for(let i=0; i<arr.length; i++){
        result.push(arr[i]);
        if((i+1)%maxLen===0) result.push('\n')
    }
    console.log(result)
    return result.join('')
    }
}

wrap('abcdef', 2)

module.exports = wrap;