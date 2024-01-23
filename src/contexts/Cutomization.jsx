/* eslint-disable react-refresh/only-export-components */
import  { createContext, useContext, useState } from 'react'

export const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

export const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const CustomizationContext = createContext({})

export const CutomizationProvider = (props) => {
  const [material, setMaterial] = useState('marble');
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return <CustomizationContext.Provider value={{
    material, setMaterial,legs, setLegs, chairColors, chairColor, setChairColor, cushionColors, cushionColor, setCushionColor
  }}>
    {props.children}
  </CustomizationContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
}