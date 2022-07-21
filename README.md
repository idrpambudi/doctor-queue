# Patient Waiting Time Estimation

## Getting Started
1. Install dependencies `$ npm i`
2. Run the program `$ npm start`

## Input
```javascript
const doctors = [
    new Doctor('A', 3),
    new Doctor('B', 4),
]
const waitingTime = getPatientWaitingTime(11, doctors)
```
1. The 2nd parameter of Doctor class is the consultation time for each patient
2. The 1st parameter getPatientWaitingTime is the patient queue number
