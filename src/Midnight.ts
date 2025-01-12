import React from 'react'
import { NativeEventEmitter } from 'react-native'
import { NativeMidnight } from './NativeMidnight'

const midnightEmitter = new NativeEventEmitter(NativeMidnight)

type MidnightListener = () => void

const addListener = (cb: MidnightListener) => {
  return midnightEmitter.addListener('Midnight_dayChanged', cb)
}

const addHourListener = (cb: MidnightListener) => {
  return midnightEmitter.addListener('Midnight_hourChanged', cb)
}

export const useOnDayChange = (cb: MidnightListener) => {
  React.useEffect(() => {
    const listener = addListener(cb)
    return () => listener.remove()
  })
}

export const useOnHourChange = (cb: MidnightListener) => {
  React.useEffect(() => {
    const listener = addHourListener(cb)
    return () => listener.remove()
  })
}

export default {
  addListener,
}
