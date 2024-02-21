import './style.css'

const color_palette= {
  '#264653':'Charcoal',
  '#2A9D8F':'Persian green',
  '#E9C46A':'Saffron',
  '#F4A261':'Sandy brown',
  '#E76F51':'Burnt sienna',
}

Object.keys(color_palette).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = color_palette[color];
});

const addOptionsToColorPicker = () => {
  const colorPickerSelect =document.querySelector("#color-picker");

  Object.keys(color_palette).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color_palette[color];

    colorPickerSelect.append(option);
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect =document.querySelector("#color-picker");
  const colorName = document.querySelector('#color-name');

  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    //almacenamos el codigo de color

    document.body.style.backgroundColor = newColor;
    //aplicamos el bk color con el color seleccionado
    const colornameText = `${color_palette[newColor]} | ${newColor}` 
    //creo una constante de nombre + HEx
    colorName.innerText = color_palette[newColor] ? colornameText : '-' ;
    //Ternario:  si hay color ? me quedo : sino me quedo -
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
