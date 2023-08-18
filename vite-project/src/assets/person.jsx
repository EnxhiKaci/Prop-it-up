const Person = (props) => {
const {firstName,lastName,age,hColor}=props
    return(
        <>
        <h2>{lastName}, {firstName}</h2>
       <p>Age :{age}</p>
       <p>Hair Color : {hColor}</p>

        </>
    )
}
export default Person