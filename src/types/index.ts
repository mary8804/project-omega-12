import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  extraContent?: string
  showButton?: boolean
  buttonText?: string
  icon?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}