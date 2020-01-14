function isAnagram1(w1, w2) {

  return w1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('') ===
         w2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

}


for (let i = 0; i < 100000; ++i) {
  isAnagram1('Friend', 'finder');
}

for (let i = 0; i < 100000; ++i) { 
  isAnagram1('hello', 'bye')
} 


function isAnagram(w1, w2) {
  for (const letter of w1.replace(/[^\w]/g, '').toLowerCase()) {
    if (!w2.replace(/[^\w]/g, '').toLowerCase().includes(letter)) return false
  }

  return  w1.length == w2.length;
}


for (let i = 0; i < 100000; ++i) {
  isAnagram('Friend', 'finder');
}

for (let i = 0; i < 100000; ++i) { 
  isAnagram('hello', 'bye')
} 
