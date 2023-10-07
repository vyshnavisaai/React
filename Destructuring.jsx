import React from 'react'

function Destructuring() {

    const obj={name:'Vyshnavi',age:23,place:'vtk'}

    // const names=obj.name
    // const ages=obj.age
    // const places=obj.place
    // console.log(name)
    // console.log(age)
    // console.log(place)

    //destructuring
    const {name,age,place}=obj
    console.log(name)
    console.log(age)
    console.log(place)

    const arr=[23,45,32]
    const [f,s,t]=arr
    console.log(f)
    console.log(s)
    console.log(t)
  return (
    <div>Destructuring</div>
  )
}

export default Destructuring