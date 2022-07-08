function designerPdfViewer(h, word) {
  
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k',
        'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let hash = {}
    let storedVals = []
    
    for(let i = 0, length = alphabet.length; i < length; i++) {
        hash[alphabet[i]] = h[i]
    }
    
    for(let j = 0; j < word.length; j++) {
       let val = word[j]
       if(hash[val]) {
               let area = hash[val] * word.length
               storedVals.push(area)
       }
    }
    
   let area = Math.max(...storedVals)
   
   return area;
}