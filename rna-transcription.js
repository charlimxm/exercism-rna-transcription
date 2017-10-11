class DnaTranscriber {
  constructor () {

  }

  toRna (dna) {
    var dnaArr = dna.split("")

    var errorMatch = dna.match(/[^AGCT]/g)
    if (errorMatch) throw Error('Invalid input')

    var rna = dnaArr.map((letter) => {
      if (letter === 'C') return 'G'
      if (letter === 'G') return 'C'
      if (letter === 'A') return 'U'
      if (letter === 'T') return 'A'
    })
    return rna.join("")
  }
}
module.exports = DnaTranscriber
