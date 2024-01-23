import React from 'react'
import { useCustomization } from '../contexts/Cutomization';


const Configurator = () => {
  const { material, setMaterial, legs, setLegs, chairColors, chairColor, setChairColor, cushionColors, cushionColor, setCushionColor } = useCustomization();
  

  console.log("chairColors", chairColors)
  return (
    <div className='configurator'>
      <div className='config_section'>
        <div className='config_section_title'>
          Chair Material
        </div>
        <div className='config_section_values'>
          <div className={`item ${material === 'marble' ? 'item_active' : ''}`} onClick={()=> setMaterial('marble')}>
            <div className='item_label'>Marble</div>
          </div>
          <div className={`item ${material === 'larva' ? 'item_active' : ''}`} onClick={()=> setMaterial('larva')}>
            <div className='item_label'>Larva</div>
          </div>
        </div>
      </div>
      <div className="config_section">
        <div className="config_section_title" style={{marginBottom: '5px'}}>Chair color</div>
        <div className="config_section_values">
          {chairColors?.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item_dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item_label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="config_section">
        <div className="config_section_title" style={{marginBottom: '5px'}}>Cushion color</div>
        <div className="config_section_values">
          {cushionColors?.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? "item--active" : ""
              }`}
              onClick={() => setCushionColor(item)}
            >
              <div
                className="item_dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item_label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='config_section'>
        <div className='config_section_title'>
          Legs
        </div>
        <div className='config_section_values'>
          <div className={`item ${legs === 1 ? 'item_active' : ''}`} onClick={()=> setLegs(1)}>
            <div className='item_label'>Default</div>
          </div>
          <div className={`item ${legs === 2 ? 'item_active' : ''}`} onClick={()=> setLegs(2)}>
            <div className='item_label'>Modern design</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configurator