'use client'

import dynamic from 'next/dynamic'
import { catchError } from 'next/error'
import Spinner from './spinner'

const Model = dynamic(() => import('./model'), {
  ssr: false,
  loading: () => <Spinner />,
})

// The 3D model is decorative: if WebGL is unavailable or the model fails to
// load, hide it instead of taking down the whole page.
const ModelBoundary = catchError((_props: object, { error }) => {
  console.error(error)
  return null
})

const ModelLoader = () => {
  return (
    <ModelBoundary>
      <Model />
    </ModelBoundary>
  )
}

export default ModelLoader
