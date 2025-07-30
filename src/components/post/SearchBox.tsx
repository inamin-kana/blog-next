'use client'
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import React from 'react'

export default function SearchBox() {
  const [ search, setSearch ] = useState('')
  const [ debouncedSearch, setDebouncedSearch ] = useState('')
  const router = useRouter()

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)

    return () => clearTimeout(timer)
  }, [search])

  // Execute when setDebouncedSearch is updated
  useEffect(() => {
    if(debouncedSearch.trim()) {
      router.push(`/?search=${debouncedSearch.trim()}`)
    } else {
      router.push('/')
    }
  }, [debouncedSearch, router])

  return (
    <>
      <Input
        placeholder="Search article..."
        className="w-[200px] lg:w-[300px] bg-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  )
}
