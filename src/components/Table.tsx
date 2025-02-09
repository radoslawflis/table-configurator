/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/Table.gltf 
*/

import React, { useContext, useEffect, useRef } from 'react';
import { Edges, useGLTF } from '@react-three/drei';
import { useConfigurator } from '../contexts/Configurator';

import * as Three from 'three';
import { Vector3 } from 'three';
import { useFrame, GroupProps } from '@react-three/fiber';
import { Mesh } from 'three';

const ANIM_SPEED = 12;

export function Table(props: GroupProps) {
  const { nodes, materials } = useGLTF('./models/Table.gltf') as any;  //types are not defined in drei

  const { legs, legsColor, tableWidth } = useConfigurator();

  const plate = useRef<Mesh>(null!);
  const leftLegs = useRef<Mesh>(null!);
  const rightLegs = useRef<Mesh>(null!);

  useEffect(() => {
    materials.Metal.color = new Three.Color(legsColor);
  }, [legsColor]);

  useFrame((_state, delta) => {
    const tableWidthScale = tableWidth / 100;
    const targetScale = new Vector3(tableWidthScale, 1, 1);

    const targetLeftPosition = new Vector3(-1.5 * tableWidthScale, 0, 0);
    plate.current.scale.lerp(targetScale, delta * ANIM_SPEED);

    leftLegs.current.position.lerp(targetLeftPosition, delta * ANIM_SPEED);

    const targetRightPosition = new Vector3(1.5 * tableWidthScale, 0, 0);
    rightLegs.current.position.lerp(targetRightPosition, delta * ANIM_SPEED);
  });

  return (
    <group {...props} dispose={null}>
      <>
        <mesh
          geometry={nodes.Plate.geometry}
          material={materials.Plate}
          castShadow
          ref={plate}
        />
        <Edges />
      </>
      {legs === 0 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs01Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            ref={leftLegs}
          />
          <mesh
            castShadow
            geometry={nodes.Legs01Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            ref={rightLegs}
          />
        </>
      )}
      {legs === 1 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs02Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            ref={leftLegs}
          />
          <mesh
            castShadow
            geometry={nodes.Legs02Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            ref={rightLegs}
          />
        </>
      )}
      {legs === 2 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs03Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            ref={leftLegs}
          />
          <mesh
            castShadow
            geometry={nodes.Legs03Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            ref={rightLegs}
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload('./models/Table.gltf');
