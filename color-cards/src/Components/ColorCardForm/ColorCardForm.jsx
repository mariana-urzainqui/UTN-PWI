import React, { useState } from 'react'

const ColorCardForm = () => {
    const formSchema = {
        colors: 4,
        time: 'timestamp'
    }
    const initialState = {
        time: '',
        color_1: '',
        color_2: '',
        color_3: '',
        color_4: '',
    }
    const [formValues, setFormValues] = useState(initialState)

    const ColorsInputs = []
    for (let i = 1; i <= formSchema.colors; i = i + 1) {
        ColorsInputs.push(
            <div key={i}>
                <label htmlFor={"color_" + i}>Color {i}</label>
                <input name={"color_" + i} id={"color_" + i} type="text" />
            </div>
        )
    }

    const handleChangeFormValue = (e) => {
        const valueToChange = e.target.name
        const newValue = e.target.value

    }

    return (
        <form>
            <h2>Crea tu propia color card</h2>
            {ColorsInputs}
            <label htmlFor='update'>Fecha</label>
            <input type={formSchema.time} name="time" id="time" />
        </form>
    )
}

export default ColorCardForm
