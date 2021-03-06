const {expect}= require('chai');
const wrap= require('./wrap');

describe('wrap', () => {
    let string
    let arr

    beforeEach(()=>{
        string=wrap('abcdef', 2)
        arr= string.split('\n')
     })

    describe('input types', ()=>{

        it('adds correct number of lines', ()=>{
            expect(arr.length).to.equal(4)
        })

        it('has the correct number of characters per line', () => {
            expect(arr[0].length).to.equal(2);
          });
    })
    it('Returns empty string if empty string was provided', () => {
      expect(wrap("", 10)).to.equal("");
    });


  });

