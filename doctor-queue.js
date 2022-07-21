import { PriorityQueue } from "./priority-queue.js";

class Doctor {
    constructor(name, consultationTime) {
        this.name = name;
        this.consultationTime = consultationTime;
    }
}

// Priority Queue data structure is chosen to fasten up the look up of the next available doctor.
// The overall time complexity of the algorithm is O(P * log D).
// Where P is the patient queue number and D is the number of doctors.
const getPatientWaitingTime = (position, doctors) => {
    const pq = new PriorityQueue((a, b) => a[1] < b[1]);
    doctors.forEach(doctor => pq.push([doctor, doctor.consultationTime]));
    
    for (let i = 0; i < position - 1; i++) {
        const pair = pq.pop();
        const currentDoctor = pair[0];
        const waitedTime = pair[1];
        pq.push([currentDoctor, waitedTime + currentDoctor.consultationTime]);
    }

    return pq.pop();
}

const doctors = [
    new Doctor('A', 3),
    new Doctor('B', 4),
]
const waitingTime = getPatientWaitingTime(11, doctors)
console.log(waitingTime)

const doctors2 = [
  new Doctor('x', 2.5),
  new Doctor('y', 3.75),
  new Doctor('z', 4),
]
const waitingTime2 = getPatientWaitingTime(15, doctors2)
console.log(waitingTime2)