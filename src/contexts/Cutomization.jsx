/* eslint-disable react-refresh/only-export-components */
import  { createContext, useContext, useState } from 'react'

export const chairColors = [
  {
    color: "#683434",
    name: "brown",
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
    color: "#ffa500",
    name: "orange",
  },
  
  {
    color: "#222222",
    name: "black",
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