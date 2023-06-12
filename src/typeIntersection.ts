type Draggable={
    drag:()=>void
}

type resizable={
    resize:()=>void
}

type uiWIdget= resizable & Draggable

let textBox :uiWIdget={
    drag:()=>{},
    resize:()=>{}
}

//literal types

    type Quantity=50|100 // only 50 and 100 is possible to assign to the quantity
    let quantity:Quantity=100
    