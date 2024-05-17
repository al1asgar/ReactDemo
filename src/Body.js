import Course from './Course';
function Body(){

    const courseName = ["Course1", "Course2","Course3","Course4"]

    return(
        <div>
            <p>This is Body</p>
            {
                courseName.map(course => <Course name={course}/>)
            }
            
        </div>
    );
}
export default Body;