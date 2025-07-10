interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Gidi",
    lastName: "vibes",
    age: 31,
    location: "Kaduna"
}

const student2: Student = {
    firstName: "Chidi",
    lastName: "Chi",
    age: 29,
    location: "Benue"
}

const studentsList: Student[] = [
    student1,
    student2
]


const table: HTMLTableElement = document.createElement('table');
const headRow: HTMLTableRowElement = document.createElement('tr');

for(const student in studentsList[0]) {
    const th: HTMLTableCellElement = document.createElement('th');
     th.textContent = student.toUpperCase();
     headRow.appendChild(th);
}
  table.appendChild(headRow);

studentsList.forEach((student: Student) => {
   const row: HTMLTableRowElement = document.createElement('tr');
   const firstNameCell: HTMLTableCellElement = document.createElement('td');
   firstNameCell.textContent = student.firstName;
   const locationCell: HTMLTableCellElement = document.createElement('td');
   locationCell.textContent = student.location;
   row.appendChild(firstNameCell);
   row.appendChild(locationCell);
   table.appendChild(row);
})

document.body.append(table);
