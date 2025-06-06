export {}

const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]; // > 90

type CourseType = {
    title: string
    price: number
}

const cources = [
    {title: "CSS", price: 100},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

// 160
const cheapPredicate = (cource: CourseType) => {
    return cource.price < 160
}

const chipCourses = [
    {title: "CSS", price: 100},
    {title: "REACT", price: 150}
];