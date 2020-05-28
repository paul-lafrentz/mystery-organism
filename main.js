const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let i = this.dna.indexOf(this.dna[Math.floor(Math.random() * 15)]);
      if (this.dna[i] === 'A') {
        const newBases= ['T', 'C', 'G'];
        this.dna.splice(i, 1, newBases[Math.floor(Math.random() * 3)]);
      } else if (this.dna[i] === 'T') {
        const newBases= ['A', 'C', 'G'];
        this.dna.splice(i, 1, newBases[Math.floor(Math.random() * 3)]);
      } else if (this.dna[i] === 'C') {
        const newBases= ['A', 'T', 'G'];
        this.dna.splice(i, 1, newBases[Math.floor(Math.random() * 3)]);
      } else if (this.dna[i] === 'G') {
        const newBases= ['A', 'T', 'C'];
        this.dna.splice(i, 1, newBases[Math.floor(Math.random() * 3)]);
      } else {
        return 'An error occurred during the mutation';
      }
    },
compareDNA(arrayCompare) {
      let commonDNA = [];
      for (let i = 0; i < this.dna.length; i++) {
        for (let j = 0; j < arrayCompare.dna.length; j++ )
          if (/*this.dna.indexOf(this[i]) === arrayCompare.dna.indexOf(this[j]) &&*/ this.dna[i] === arrayCompare.dna[j]) {
            commonDNA.push(this.dna[i]);
        }
      }
    let percentageDNA = (commonDNA.length/15) * 100;
    console.log(commonDNA);
    }
  }
};


const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());


console.log(pAequor1);
console.log(pAequor2);

pAequor1.compareDNA(pAequor2);
