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
      let commonDNAIndex = [];
      for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === arrayCompare.dna[i]) {
            commonDNA.push(this.dna[i]);
            commonDNAIndex.push(i);
        }
      }
    let percentageDNA = (commonDNA.length/15) * 100;
    console.log('Specimen ' + this.specimenNum + ' and Specimen ' + arrayCompare.specimenNum +
    ' have ' + percentageDNA.toFixed(2) + '% DNA in common (' + commonDNA.length + ' bases)');
    console.log('The Dna is shared at position/s: ' + commonDNAIndex.join(', ') + ' and the common DNA bases are: ' + commonDNA.join(', '));
    }
  }
};


const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());


console.log(pAequor1);
console.log(pAequor2);

pAequor1.compareDNA(pAequor2);
