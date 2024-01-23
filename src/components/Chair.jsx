/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/chair.gltf 
*/

import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useCustomization } from '../contexts/Cutomization.jsx';

const Chair = (props) => {
	const { material, legs, chairColor, cushionColor } = useCustomization();
	const { nodes, materials } = useGLTF('./models/chair.gltf');
	const marbleTextureProps = useTexture({
		map: './textures/cushion/Marble_Red_004_basecolor.jpg',
		normalMap: './textures/cushion/Marble_Red_004_normal.jpg',
		roughnessMap: './textures/cushion/Marble_Red_004_roughness.jpg',
		aoMap: './textures/cushion/Marble_Red_004_ambientOcclusion.jpg',
	});

	const larvaTextureProps = useTexture({
		map: './textures/fabric/Lava_006_basecolor.jpg',
		normalMap: './textures/fabric/Lava_006_normal.jpg',
		roughnessMap: './textures/fabric/Lava_006_roughness.jpg',
		aoMap: './textures/fabric/Lava_006_ambientOcclusion.jpg',
	});
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Chair.geometry}>
				<meshStandardMaterial
          {...( material === 'marble' ? marbleTextureProps : larvaTextureProps )}
          color={chairColor.color}
				/>
			</mesh>
			<mesh geometry={nodes.Cushion.geometry} position={[0, 0.064, 0.045]}>
				<meshStandardMaterial {...larvaTextureProps} color={cushionColor.color}/>
			</mesh>
			<mesh
				geometry={nodes.Legs1.geometry}
				material={materials.Legs}
				visible={legs === 2}
			/>
			<mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={legs === 1} />
		</group>
	);
};

useGLTF.preload('./models/chair.gltf');

export default Chair;
