console.log('================= Object Assignmennt D =================')
const professor = {
  profName: 'Mr. Shukla',
  id: 112233,
  deparment: 'Information technology',
  college: 'COEP Pune',
  city: 'Pune',
  degrees: {
    engineering: 'CSC',
    PHD: 'PHD in Adv Computing',
  },
  certificates: [
    'Hacker Rank Participation',
    'Certificate in IFE course',
    'Certificates in Adv Programming',
  ],
  detailsDegrees: function () {
    this.degrees
    return `Teacher Degrees are : ${this.degrees.engineering} and ${this.degrees.PHD}`
  },
}
console.log('1] Properties ', professor)
console.log(
  '-----------------------------------------------------------------------------------------------',
)
console.log('2] Add one Object Degrees- ', professor.degrees)
console.log(
  '-----------------------------------------------------------------------------------------------',
)
console.log('3] Add One array Certificates', professor.certificates)
console.log(
  '-----------------------------------------------------------------------------------------------',
)
let resultdegree = professor.detailsDegrees()
console.log(`4] ${resultdegree}`)
console.log(
  '-----------------------------------------------------------------------------------------------',
)
professor.totalexperience = '14 Years'
console.log(`5] The total experience is : ${professor.totalexperience}`)
console.log(
  '-----------------------------------------------------------------------------------------------',
)
professor.city = 'Mumbai'
console.log(`6] The Modified property city :`, professor)
console.log(
  '-----------------------------------------------------------------------------------------------',
)
professor.certificates.push('Oracle Certified')
console.log(
  "7] Add new certificate 'Oracle certified' at the end of the array==>",
)
console.log(professor.certificates)
console.log(
  '-----------------------------------------------------------------------------------------------',
)
let lastElement = professor.certificates[professor.certificates.length - 1]
console.log(`8] The last element in the array is : '${lastElement}'`);
