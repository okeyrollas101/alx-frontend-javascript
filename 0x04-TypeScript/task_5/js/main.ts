interface MajorCredits {
  credits: number,
  _brand: string,
}

interface MinorCredits {
  credits: number,
  _brand: string,
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): MajorCredits => {
    let sum = subject1.credits + subject2.credits;
    return {
        credits: sum,
        _brand: "major"
    }
}

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    let sum = subject1.credits + subject2.credits;
    return {
        credits: sum,
        _brand: "minor"
    }
}
