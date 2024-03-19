import Content from './Content';
import Header from './Header';
import Total from './Total';
const Course = ({ id, course, parts, totalExercises }) => {
    return (
        <div key={id}>
            <Header headerText={course} />
            <Content parts = {parts} />
            <Total totalExercises={totalExercises} />
        </div>
    )
}

export default Course;