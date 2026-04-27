import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AccretionDisk() {
  const ref = useRef()
  const count = 3000

  const { positions, colors, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const speeds = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 1.8 + Math.random() * 2.8
      const spread = (Math.random() - 0.5) * 0.18

      positions[i * 3]     = Math.cos(angle) * radius
      positions[i * 3 + 1] = spread
      positions[i * 3 + 2] = Math.sin(angle) * radius

      const t = (radius - 1.8) / 2.8
      if (t < 0.25) {
        colors[i * 3] = 1; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 1
      } else if (t < 0.55) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.94; colors[i * 3 + 2] = 1
      } else {
        colors[i * 3] = 0.54; colors[i * 3 + 1] = 0.17; colors[i * 3 + 2] = 0.88
      }

      speeds[i] = (0.12 + Math.random() * 0.06) / Math.sqrt(radius)
    }
    return { positions, colors, speeds }
  }, [])

  const posRef = useRef(positions.slice())
  const anglesRef = useRef(new Float32Array(count).map((_, i) => {
    return Math.atan2(positions[i * 3 + 2], positions[i * 3])
  }))
  const radiiRef = useRef(new Float32Array(count).map((_, i) => {
    const x = positions[i * 3], z = positions[i * 3 + 2]
    return Math.sqrt(x * x + z * z)
  }))

  useFrame((_, delta) => {
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position
    for (let i = 0; i < count; i++) {
      anglesRef.current[i] += speeds[i] * delta * 60 * 0.016
      const r = radiiRef.current[i]
      pos.array[i * 3]     = Math.cos(anglesRef.current[i]) * r
      pos.array[i * 3 + 2] = Math.sin(anglesRef.current[i]) * r
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  )
}

function EventHorizon() {
  const glowRef = useRef()
  useFrame((state) => {
    if (glowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.02
      glowRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh ref={glowRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.42, 0.06, 16, 120]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.55, 32, 32]} />
        <meshBasicMaterial color="#000820" transparent opacity={0.7} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}

function Jets() {
  const ref1 = useRef()
  const ref2 = useRef()
  const count = 300

  const { positions } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = Math.random()
      const spread = (1 - t) * 0.3
      positions[i * 3]     = (Math.random() - 0.5) * spread
      positions[i * 3 + 1] = 1.5 + t * 5
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread
    }
    return { positions }
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    ;[ref1, ref2].forEach((r, idx) => {
      if (!r.current) return
      const pos = r.current.geometry.attributes.position
      for (let i = 0; i < count; i++) {
        pos.array[i * 3 + 1] += 0.015
        if (pos.array[i * 3 + 1] > (idx === 0 ? 7 : -1.5)) {
          pos.array[i * 3 + 1] = idx === 0 ? 1.5 : -1.5
        }
      }
      pos.needsUpdate = true
    })
  })

  return (
    <>
      <points ref={ref1}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#8a2be2" size={0.03} transparent opacity={0.5} sizeAttenuation />
      </points>
      <points ref={ref2}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions.map((v, i) => i % 3 === 1 ? -v : v)} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#00f0ff" size={0.03} transparent opacity={0.5} sizeAttenuation />
      </points>
    </>
  )
}

// Distant star field
function StarField() {
  const count = 1200
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 80
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80
      arr[i * 3 + 2] = (Math.random() - 0.5) * 80 - 10
    }
    return arr
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.04} transparent opacity={0.3} sizeAttenuation />
    </points>
  )
}

// Slow camera drift
function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.x = Math.sin(t * 0.05) * 1.5
    state.camera.position.y = 1.5 + Math.sin(t * 0.07) * 0.5
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#010205']} />
        <StarField />
        <AccretionDisk />
        <EventHorizon />
        <Jets />
        <CameraRig />
      </Canvas>
    </div>
  )
}
