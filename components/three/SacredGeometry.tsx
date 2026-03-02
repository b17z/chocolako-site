"use client"

import { useRef, useMemo, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"
import { useReducedMotion } from "framer-motion"

// Performance detection hook
function useCanRender3D() {
  const [canRender, setCanRender] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Skip 3D on reduced motion preference
    if (prefersReducedMotion) {
      setCanRender(false)
      return
    }

    // Check for WebGL support
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) {
        setCanRender(false)
        return
      }

      // Check device memory (if available)
      const nav = navigator as Navigator & { deviceMemory?: number }
      if (nav.deviceMemory && nav.deviceMemory < 4) {
        setCanRender(false)
        return
      }

      // Check hardware concurrency (CPU cores)
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        setCanRender(false)
        return
      }

      // Check connection speed (if available)
      const conn = navigator as Navigator & { connection?: { effectiveType?: string } }
      if (conn.connection?.effectiveType === "2g" || conn.connection?.effectiveType === "slow-2g") {
        setCanRender(false)
        return
      }

      setCanRender(true)
    } catch {
      setCanRender(false)
    }
  }, [prefersReducedMotion])

  return canRender
}

function GlowingTorus() {
  const torusRef = useRef<THREE.Mesh>(null)
  const innerTorusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.1
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (innerTorusRef.current) {
      innerTorusRef.current.rotation.x = -state.clock.elapsedTime * 0.15
      innerTorusRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Outer torus */}
        <mesh ref={torusRef}>
          <torusGeometry args={[2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.8} />
        </mesh>

        {/* Inner torus rotated */}
        <mesh ref={innerTorusRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.015, 16, 100]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.6} />
        </mesh>

        {/* Third torus */}
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[1.8, 0.01, 16, 100]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.4} />
        </mesh>

        {/* Center glow sphere */}
        <mesh>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.9} />
        </mesh>

        {/* Glow effect sphere */}
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.15} />
        </mesh>
      </group>
    </Float>
  )
}

function OrbitingParticles({ count = 50 }: { count?: number }) {
  const points = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 2.5 + Math.random() * 1.5

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    return { positions }
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(particles.positions, 3))
    return geo
  }, [particles.positions])

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        color="#d4af37"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
      <GlowingTorus />
      <OrbitingParticles count={60} />
    </>
  )
}

// Fallback component - CSS-only version
function CSSFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Simple CSS-animated rings as fallback */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full border border-gold/30 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        {/* Middle ring */}
        <div
          className="absolute inset-8 rounded-full border border-gold/40 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
        {/* Inner ring */}
        <div
          className="absolute inset-16 rounded-full border border-gold/50 animate-spin"
          style={{ animationDuration: "10s" }}
        />
        {/* Center glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold/60 animate-pulse"
          style={{
            boxShadow: "0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.3)",
          }}
        />
      </div>
    </div>
  )
}

interface SacredGeometryProps {
  className?: string
}

export function SacredGeometry({ className = "" }: SacredGeometryProps) {
  const canRender = useCanRender3D()

  // Show CSS fallback for low-powered devices
  if (!canRender) {
    return <CSSFallback />
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Suspense fallback={<CSSFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ background: "transparent" }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: true,
          }}
          dpr={[1, 1.5]} // Limit pixel ratio for performance
          performance={{ min: 0.5 }} // Allow frame rate drops
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}
