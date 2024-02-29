let student1={
    name:"ram",
    hasPaid: false,
    hasScholarship: true,
    fullAttendance: false
};
if ((student1.hasScholarship || student1.hasPaid ) && student1.fullAttendance)
{
    console.log(`${student1.name} can give exam`)
}
else
{
    console.log(`${student1.name} cannot give exam`)
}